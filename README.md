````markdown name=README.md url=https://github.com/Zaain-Ul-Abideen273/nastp-projects/blob/jsprojects/README.md
# jsproject.js

> Short collection of JavaScript examples and exercises for learning core concepts.

Badges: JavaScript · Learning / Demos

---

## About

This repository contains short, focused JavaScript examples intended to teach core concepts such as variables, conditionals, loops, functions, objects, arrays, modules, spread/rest, arrow functions, and common array methods.

Most examples are commented out. A few array-method examples (map, filter, reduce, and a composition example) are active and will print results to the console when you run the file with Node.js.

---

## Quick summary

- Purpose: educational/demo snippets for JS basics.
- Active examples: array methods — `map`, `filter`, `reduce`, and a `filter + map + reduce` composition.
- Side effects: console output only — safe to run locally with Node.js.

---

## Active examples (what runs)

1. **map** — apply tax to prices
   ```js
   const pricesWithTax = prices.map(price => price * 1.17);
   ```

2. **filter** — keep scores <= 34 and print them (demonstrates array, spread, join, and forEach).

3. **reduce** — count occurrences of cities into an object:
   ```js
   // result: { Islamabad: 1, Lahore: 2, Karachi: 1, Peshawar: 1 }
   ```

4. **filter + map + reduce** — sum prices of products priced >= 3000 (example result: `36000`).

---

## How to run

Run the example file with Node:

```bash
node jsproject.js
```

Output will be printed to the terminal (console).

---

## Example expected output (abridged)

```
[500, 1200, 800, 2500]
[585, 1404, 936, 2925]
[34, 34, 9, 0, 34]
34 34 9 0 34
34, 34, 9, 0, 34
34
34
9
0
34
{ Islamabad: 1, Lahore: 2, Karachi: 1, Peshawar: 1 }
36000
```

---

## Notes & suggestions

- Many examples are commented out. If you'd like each demo isolated, consider splitting them into separate files:
  - `map-demo.js`
  - `filter-demo.js`
  - `reduce-demo.js`
- There are a few small typos in comments and variable names (e.g., "Islmabad", `personCotactInfo1`). These are safe but consider fixing them for clarity.
- If you want this to be a teaching repo, add a short header above each active example showing:
  - Learning goal
  - Inputs
  - Expected output
- For sharing online, convert these to runnable snippets in CodeSandbox or CodePen for interactive demos.

---

## Contributing

Please open issues or PRs to:
- Clean up examples
- Fix typos and variable names
- Split demos into separate files or a `demos/` folder
- Add README examples or explanations for each demo

---

_Source file:_ https://github.com/Zaain-Ul-Abideen273/nastp-projects/blob/jsprojects/jsproject.js
````

What I changed and next steps:
- Converted the HTML README into clean Markdown, reorganized sections for clarity, and replaced inline styles with standard Markdown headings and code blocks.
- Fixed formatting for code and sample output, and made suggestions in a dedicated notes section.

If you'd like, I can commit this new README.md to your repository. Tell me:
- Which branch to commit to (current file is in `jsprojects`), and
- A short commit message to use (I can suggest one if you prefer).
