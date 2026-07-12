
  <head>
    <meta charset="utf-8" />
    <title>jsproject.js — Examples & Notes</title>
    <style>
      /* Inline styles for GitHub README rendering (simple & safe) */
      .badge { display:inline-block; padding:2px 8px; background:#eef; border-radius:6px; margin-right:6px; font-size:90%; }
      .code { background:#f6f8fa; padding:12px; border-radius:6px; overflow:auto; }
      table { border-collapse:collapse; margin:8px 0; }
      th, td { border:1px solid #ddd; padding:6px 10px; text-align:left; }
    </style>
  </head>
  <body>
    <h1>jsproject.js</h1>

    <p>
      <span class="badge">JavaScript</span>
      <span class="badge">Learning / Demos</span>
    </p>

    <p>
      This file is a collection of short JavaScript examples and exercises intended for learning core concepts.
      Most examples are commented out; a few array-method examples (map, filter, reduce, and a composition example)
      are active and will print results to the console when you run the file.
    </p>

    <h2>Quick summary</h2>
    <ul>
      <li>Purpose: educational/demo snippets for JS basics (variables, conditionals, loops, functions, objects, arrays, modules, spread/rest, arrow functions).</li>
      <li>Active examples: array methods — map (tax), filter (score threshold), reduce (counting cities), and filter+map+reduce (expensive products total).</li>
      <li>Side effects: console output only — safe to run locally with Node.js.</li>
    </ul>

    <h2>Active examples (what runs)</h2>
    <ol>
      <li>
        <strong>map</strong> — apply tax to prices:
        <div class="code"><code>pricesWithTax = prices.map(price => price * 1.17)</code></div>
      </li>
      <li>
        <strong>filter</strong> — keep scores <= 34 and print them (array, spread, join, and forEach demonstration).
      </li>
      <li>
        <strong>reduce</strong> — count occurrences of cities into an object:
        <div class="code"><code>{ Islamabad: 1, Lahore: 2, Karachi: 1, Peshawar: 1 }</code></div>
      </li>
      <li>
        <strong>filter + map + reduce</strong> — sum prices of products priced >= 3000 (result: <code>36000</code>).
      </li>
    </ol>

    <h2>How to run</h2>
    <pre class="code"><code>node jsproject.js</code></pre>
    <p>Output will be printed to the terminal (console)</p>

    <h2>Example expected output (abridged)</h2>
    <pre class="code"><code>
[500,1200,800,2500]
[585,1404,936,2925]
[34,34,9,0,34]
34 34 9 0 34
34, 34, 9, 0, 34
34
34
9
0
34
{ Islamabad: 1, Lahore: 2, Karachi: 1, Peshawar: 1 }
36000
    </code></pre>

    <h2>Notes & suggestions</h2>
    <ul>
      <li>Many examples are commented out. If you'd like each demo isolated, consider splitting them into separate files (e.g., <code>map-demo.js</code>, <code>filter-demo.js</code>).</li>
      <li>Small typos in comments and variable names (e.g., "Islmabad", "personCotactInfo1") — safe but consider fixing for clarity.</li>
      <li>If you want this to be a teaching repo, add a short header above each active example showing the learning goal and expected output.</li>
      <li>For sharing online, you can convert these to runnable snippets inside a Codesandbox or CodePen for interactive demos.</li>
    </ul>

    <h2>Contributing</h2>
    <p>
      Feel free to open issues or PRs to clean up examples, add tests, or split demos into separate folders/files for easier navigation.
    </p>

    <hr />
    <p><small>Source file: <a href="https://github.com/Zaain-Ul-Abideen273/nastp-projects/blob/jsprojects/jsproject.js">jsproject.js</a></small></p>
  </body>
</html>
````
