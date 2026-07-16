/* ==========================================================================
   MASTER JAVASCRIPT ENGINE
   Architecture: Modular, Persistent, Asynchronous, and Interactive.
   ========================================================================== */

/* ------------------------------------------------------------------
   SECTION A: Code that runs immediately (outside DOMContentLoaded)
   — Canvas animation engine (Section 8) is safe to attach after DOM
     loads, but kept here as it was originally structured outside.
   ------------------------------------------------------------------ */

// 8. INTERACTIVE CANVAS RENDER PLANE (2D Graphics & Coordinate Tracking)
// NOTE: Moved inside DOMContentLoaded below to guarantee #cnv-render-plane exists.

/* ------------------------------------------------------------------
   SECTION B: Form validation (originally floating outside any listener)
   — Consolidated into the single DOMContentLoaded block below.
   ------------------------------------------------------------------ */

/* ==========================================================================
   SINGLE DOMContentLoaded ENTRY POINT
   (The original file had three separate DOMContentLoaded listeners and one
   floating block, causing duplicate registrations. All logic is unified here.)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('System Diagnostics: DOM Core State Active. Booting master protocols...');

  // ── 0. DYNAMIC CSS INJECTION ──────────────────────────────────────────────
  const sysStyles = document.createElement('style');
  sysStyles.innerHTML = `
    .sys-toast {
      position: fixed; bottom: 20px; right: 20px; padding: 1rem 1.5rem;
      border-radius: 4px; color: #fff; z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0; transform: translateY(20px);
      font-weight: 600; font-size: 0.9rem; font-family: sans-serif;
    }
    .sys-toast.show  { opacity: 1; transform: translateY(0); }
    .sys-toast.success { background-color: #198754; }
    .sys-toast.error   { background-color: #dc3545; }

    .sys-copy-btn {
      position: absolute; top: 10px; right: 10px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      color: #fff; padding: 4px 10px; border-radius: 3px; cursor: pointer;
      font-size: 0.75rem; font-weight: 600; transition: background 0.2s;
      font-family: monospace; z-index: 10;
    }
    .sys-copy-btn:hover { background: rgba(255,255,255,0.3); }
  `;
  document.head.appendChild(sysStyles);

  // ── GLOBAL TOAST NOTIFICATION ─────────────────────────────────────────────
  const triggerToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `sys-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // ── 1. LIVE TELEMETRY (Header System Clock) ───────────────────────────────
  const header = document.getElementById('main-header');
  if (header) {
    const clockSpan = document.createElement('div');
    clockSpan.style.cssText = `
      position: absolute; bottom: 1.5rem; right: 2rem;
      font-size: 0.85rem; color: var(--text-muted); font-family: monospace;
    `;
    header.appendChild(clockSpan);

    setInterval(() => {
      clockSpan.textContent = 'System Time: ' + new Date().toLocaleTimeString('en-US', { hour12: false });
    }, 1000);
  }

  // ── 2. DYNAMIC TABLE OF CONTENTS GENERATOR ───────────────────────────────
  const tocList = document.getElementById('toc-list');
  const sections = document.querySelectorAll('.spec-section');

  if (tocList && sections.length > 0) {
    sections.forEach(section => {
      const headerTitle = section.querySelector('header h2');
      if (!headerTitle) return;

      const rawText = headerTitle.textContent;
      const cleanText = rawText.split(': ')[1] || rawText;
      const sectionId = section.id;

      const li = document.createElement('li');
      li.style.marginBottom = '0.75rem';

      const a = document.createElement('a');
      a.href = `#${sectionId}`;
      a.textContent = cleanText;
      a.style.cssText = `
        color: var(--text-muted); text-decoration: none;
        font-size: 0.9rem; font-weight: 600; transition: color 0.2s ease;
      `;

      a.addEventListener('mouseenter', () => a.style.color = 'var(--accent-color)');
      a.addEventListener('mouseleave',  () => a.style.color = 'var(--text-muted)');
      a.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  // ── 3. PERSISTENT THEME STATE MANAGER (LocalStorage) ─────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    if (localStorage.getItem('sys-theme') === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggle.textContent = 'Light Mode';
    }

    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      localStorage.setItem('sys-theme', isDark ? 'dark' : 'light');
      triggerToast(isDark ? 'Dark Protocol Engaged' : 'Light Protocol Engaged', 'success');
    });
  }

  // ── 4. CLIPBOARD EXTRACTION ENGINE ───────────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    pre.style.position = 'relative';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'sys-copy-btn';
    copyBtn.textContent = 'Copy';

    copyBtn.addEventListener('click', () => {
      const textToCopy = pre.querySelector('code')?.textContent ?? pre.textContent;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          copyBtn.textContent = 'Copied!';
          triggerToast('Code copied to clipboard', 'success');
          setTimeout(() => (copyBtn.textContent = 'Copy'), 2000);
        })
        .catch(err => {
          triggerToast('Clipboard extraction failed', 'error');
          console.error(err);
        });
    });

    pre.appendChild(copyBtn);
  });

  // ── 5. STRICT FORM VALIDATION ENGINE (REGEX PROTOCOL) ────────────────────
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      let isPayloadValid = true;

      // Reset previous error states
      form.querySelectorAll('.sys-error-message').forEach(err => err.remove());
      form.querySelectorAll('input').forEach(input => {
        input.style.borderColor = 'var(--border-color)';
      });

      // Rule A: Email syntax
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          isPayloadValid = false;
          emailInput.style.borderColor = 'var(--status-warning-border)';

          const errorNode = document.createElement('span');
          errorNode.className = 'sys-error-message';
          errorNode.style.cssText = `
            color: #dc3545; font-size: 0.85rem; font-weight: 600;
            display: block; margin-top: 0.25rem;
          `;
          errorNode.textContent = 'Exception: Invalid email syntax detected.';
          emailInput.parentNode.insertBefore(errorNode, emailInput.nextSibling);
        }
      }

      // Rule B: Mandatory text fields
      form.querySelectorAll('input[type="text"]').forEach(txt => {
        if (txt.value.trim() === '') {
          isPayloadValid = false;
          txt.style.borderColor = '#dc3545';
        }
      });

      if (isPayloadValid) {
        triggerToast('Validation Protocol Passed. Data secured.', 'success');
        form.reset();
      } else {
        triggerToast('Validation failed. Data discarded.', 'error');
      }
    });
  });

  // ── 6. ASYNCHRONOUS DATA PIPELINE ────────────────────────────────────────
  const dataTableBody = document.querySelector('#sec-tables tbody');
  if (dataTableBody) {
    dataTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center; color:var(--text-muted);">
          Establishing secure connection... Fetching payload...
        </td>
      </tr>`;

    const fetchSystemData = () => new Promise(resolve => {
      setTimeout(() => resolve([
        { id: 'SYS-001', process: 'Core DOM Rendering',      status: 'Active',   latency: '12ms' },
        { id: 'SYS-002', process: 'Regex Security Matrix',   status: 'Active',   latency: '4ms'  },
        { id: 'SYS-003', process: 'Async Fetch Protocol',    status: 'Pending',  latency: '89ms' },
        { id: 'SYS-004', process: 'Viewport Responsiveness', status: 'Verified', latency: '2ms'  },
      ]), 2000);
    });

    (async () => {
      try {
        const payload = await fetchSystemData();
        dataTableBody.innerHTML = '';
        payload.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td style="font-family:monospace;font-size:0.85rem;">${item.id}</td>
            <td style="font-weight:500;">${item.process}</td>
            <td>
              <span style="padding:0.2rem 0.5rem;background:#d4edda;color:#155724;
                           border-radius:3px;font-size:0.8rem;font-weight:600;">
                ${item.status}
              </span>
            </td>
            <td style="font-family:monospace;color:var(--text-muted);">${item.latency}</td>
          `;
          dataTableBody.appendChild(row);
        });
        console.log('System Diagnostics: Async payload injected into DOM.');
      } catch (error) {
        dataTableBody.innerHTML = `
          <tr>
            <td colspan="4" style="text-align:center;color:#dc3545;">
              Fatal Error: Failed to retrieve system data.
            </td>
          </tr>`;
        console.error('System Diagnostics: Network failure.', error);
      }
    })();
  }

  // ── 7. DYNAMIC SYSTEM METRICS ─────────────────────────────────────────────
  const progressBar = document.getElementById('prog-bar');
  const meterGauge  = document.getElementById('met-gauge');

  if (progressBar && meterGauge) {
    progressBar.value = 0;
    meterGauge.value  = 10;
    let currentProgress = 0;

    const metricEngine = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(metricEngine);
        console.log('System Diagnostics: Compilation complete.');
      }

      progressBar.value = currentProgress;
      meterGauge.value  = Math.min(100, currentProgress * 0.85 + 10);
    }, 400);
  }

  // ── 8. INTERACTIVE CANVAS RENDER PLANE ───────────────────────────────────
  const canvas = document.getElementById('cnv-render-plane');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let x = 10, y = 50, dx = 2, dy = 1.5;
    const radius = 6;

    canvas.addEventListener('click', event => {
      const rect = canvas.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      dx = (dx > 0 ? -2 : 2) * (Math.random() * 0.5 + 0.8);
      dy = (dy > 0 ? -1.5 : 1.5) * (Math.random() * 0.5 + 0.8);
      console.log(`System Diagnostics: Node relocated to [${x.toFixed(0)}, ${y.toFixed(0)}].`);
    });

    const animateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = document.body.classList.contains('dark-theme') ? '#4da6ff' : '#0056b3';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      if (x + radius > canvas.width  || x - radius < 0) dx = -dx;
      if (y + radius > canvas.height || y - radius < 0) dy = -dy;
      x += dx;
      y += dy;

      requestAnimationFrame(animateCanvas);
    };

    animateCanvas();
    console.log('System Diagnostics: Interactive 2D Canvas Engine active.');
  }

  // ── 9. DOM INSPECTOR ENGINE (Live UI Telemetry) ───────────────────────────
  const inspectorBox = document.createElement('div');
  inspectorBox.style.cssText = `
    position: fixed; pointer-events: none;
    background-color: rgba(0,0,0,0.85); color: #4da6ff;
    padding: 0.4rem 0.6rem; border-radius: 4px;
    font-family: monospace; font-size: 0.75rem; font-weight: 600;
    z-index: 10000; box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    display: none; white-space: nowrap;
  `;
  document.body.appendChild(inspectorBox);

  document.addEventListener('mousemove', event => {
    const target = event.target;
    if (target === document.body || target === document.documentElement) {
      inspectorBox.style.display = 'none';
      return;
    }

    // Build the opening tag from DOM properties — avoids the outerHTML.indexOf('>')
    // bug where a '>' inside an attribute value (e.g. style="...>...") truncates early.
    const tagName = target.tagName.toLowerCase();
    const attrParts = Array.from(target.attributes).map(
      attr => `${attr.name}="${attr.value}"`
    );
    let cleanTag = attrParts.length
      ? `<${tagName} ${attrParts.join(' ')}>`
      : `<${tagName}>`;
    if (cleanTag.length > 120) cleanTag = cleanTag.substring(0, 117) + '...>';

    inspectorBox.textContent = cleanTag;
    inspectorBox.style.display = 'block';

    let posX = event.clientX + 15;
    let posY = event.clientY + 15;
    const rect = inspectorBox.getBoundingClientRect();
    if (posX + rect.width  > window.innerWidth)  posX = event.clientX - rect.width  - 15;
    if (posY + rect.height > window.innerHeight) posY = event.clientY - rect.height - 15;

    inspectorBox.style.left = `${posX}px`;
    inspectorBox.style.top  = `${posY}px`;
  });

  document.addEventListener('mouseleave', () => (inspectorBox.style.display = 'none'));
});