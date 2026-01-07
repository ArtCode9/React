# Tailwind CSS v3 Setup (legacy)
Tailwind v3 requires PostCSS plugin, slightly different setup.

## Step 1 — Install Tailwind v3 + dependencies
```
npm install -D tailwindcss@3 postcss autoprefixer
```
   - Tailwind v3 needs PostCSS.

## Step 2 — Create Tailwind config + PostCSS
```
npx tailwindcss init -p
```
   - Generates: ```tailwind.config.js``` & ```postcss.config.js```
   - ```postcss.config.js``` will contain:
   ```js
   module.exports = {
         plugins: {
            tailwindcss: {},
            autoprefixer: {},
         },
      };
   ```
## Step 3 — Update CSS
```src/index.css```:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4 — Include CSS in React
Same as v4:
```js
import './index.css';
```

## Step 5 — Update Tailwind content paths
```tailwind.config.js```:
```js
module.exports = {
      content: [
         "./index.html",
         "./src/**/*.{js,jsx}"
      ],
      theme: {
         extend: {},
      },
      plugins: [],
      };
```
   - Ensures Tailwind scans React components to generate only used classes.

## Step 6 — Test Tailwind
Same as v4 — add Tailwind classes to App.jsx and run npm run dev.

## Step 7 — Git integration
Same as v4 — commit all files after setup.