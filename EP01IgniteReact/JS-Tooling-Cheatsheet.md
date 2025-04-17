# JavaScript Tooling & Workflow Cheatsheet

## 1. NPM  
- **What it is**  
  NPM (Node Package Manager) is the default package manager for Node.js. It consists of:
  - **Registry**: An online public registry of JavaScript packages, modules, and tools that you can install.  
  - **CLI**: A command‑line interface (`npm`) for installing, updating, removing, and publishing packages.  
- **Key roles**  
  - Manages dependency installation and version resolution.  
  - Defines and runs custom scripts (build, test, start) via the `scripts` section in `package.json`.  
  - Handles semantic versioning ranges to let you adopt updates safely.

---

## 2. Parcel & Webpack  
### Parcel  
- **Zero‑configuration**  
  Start with no config file; Parcel infers entry point(s) and applies transforms.  
- **Automatic asset transforms**  
  Out‑of‑the‑box support for JavaScript (ESNext via Babel), TypeScript, CSS, SASS/LESS, images, fonts, JSON, HTML, and more.  
- **Fast incremental rebuilds**  
  Uses a persistent cache (`.parcel-cache`) to only recompile changed files.

### Webpack  
- **Highly configurable**  
  Central `webpack.config.js` lets you define entry points, loaders for different file types, and plugins.  
- **Plugin & loader ecosystem**  
  - **Loaders** transform non‑JS assets (e.g., `babel-loader`, `css-loader`, `file-loader`).  
  - **Plugins** extend behavior (e.g., `HtmlWebpackPlugin`, `DefinePlugin`, `MiniCssExtractPlugin`).  
- **Advanced optimizations**  
  Code splitting, lazy loading, tree shaking, bundle analysis, asset fingerprinting.

### Why use bundlers?  
- **Bundle assets**: Combine multiple files into one or more optimized files for the browser.  
- **Reduce HTTP requests**: Fewer files → faster initial load.  
- **Enable modern syntax**: Transpile ESNext, JSX, TypeScript, etc., into browser‑compatible code.  
- **Optimize output**: Minification, dead‑code elimination, image optimization, cache busting.

---

## 3. `.parcel-cache`  
- A hidden folder created by Parcel to store intermediate build artifacts:  
  - Parsed ASTs, dependency graphs, transformed assets.  
- **Purpose**: Speeds up rebuilds by reusing results from prior compilations.  
- **Version control**: Should be added to `.gitignore`—it is machine‑specific and can be regenerated.

---

## 4. npx  
- CLI runner bundled with NPM (since v5.2+).  
- **Function**: Executes binaries from NPM packages without requiring a global install.  
  - First looks in local `node_modules/.bin`.  
  - If not found locally, downloads and runs from the registry (one‑off).  
- **Use cases**:  
  - Running project‑specific CLI tools (e.g., `npx webpack --config webpack.config.js`).  
  - Trying out a package without polluting your global namespace (e.g., `npx create-react-app my-app`).

---

## 5. `dependencies` vs `devDependencies`  
- **`dependencies`**  
  - Packages required at runtime in production.  
  - Installed with `npm install <pkg>`.  
  - Examples: React, Express, Lodash.  
- **`devDependencies`**  
  - Tools and libraries needed only during development and build.  
  - Installed with `npm install --save-dev <pkg>`.  
  - Examples: Webpack, Babel, Jest, ESLint.

---

## 6. Tree Shaking  
- **Concept**: Static analysis of ES module `import`/`export` to detect and remove code that isn’t used (dead code).  
- **Benefits**: Smaller bundle size, faster load times.  
- **Requirements**:  
  - Must use ES modules (`import`/`export`), not CommonJS.  
  - Bundler support (Parcel, Webpack with `mode: 'production'`, Rollup).

---

## 7. Hot Module Replacement (HMR)  
- **Definition**: Ability to update modules in a running application without a full page reload.  
- **Advantages**:  
  - Preserves application state (e.g., React component state, Redux store).  
  - Instant feedback loop → faster development.  
- **Implementation**: Built into Webpack Dev Server and Parcel’s dev mode.

---

## 8. Parcel “Superpowers”  
1. **Zero Configuration**  
   - No `webpack.config.js` or extra boilerplate—Parcel figures out sensible defaults.  
2. **Fast Rebuilds via Caching**  
   - `.parcel-cache` stores build artifacts, enabling near‑instant incremental builds.  
3. **Built‑in Asset Pipeline**  
   - On‑the‑fly image resizing/conversion, CSS modules, URL hashing, without plugins.  
4. **Universal Tree Shaking**  
   - Eliminates dead code across JS, CSS, and even dynamic imports.  
5. **Seamless HMR**  
   - Automatic, state‑preserving module updates during development.

---

## 9. `.gitignore`  
- **Purpose**: Prevent specific files/folders from being tracked by Git.  

### Common entries  
```gitignore
# Dependencies
node_modules/

# Parcel cache
.parcel-cache/
.cache/

# Build output
dist/

# Environment variables
.env

# OS files
.DS_Store
Thumbs.db



# Additional Best Practices

## What Not to Ignore
- **Source code**: `src/`, `lib/`
- **Config files**: `package.json`, `.babelrc`, `webpack.config.js`

---

## 10. `package.json` vs `package-lock.json`

### `package.json`
- Human‑editable manifest: project name, version, scripts, dependency ranges (`^1.2.3`, `~1.2.3`).

### `package-lock.json`
- Auto‑generated: records exact versions of dependencies and their entire tree.
- Ensures deterministic installs across machines/environments.

---

## 11. Why Not Modify `package-lock.json`
- Manual edits break the deterministic dependency graph.
- Risk of mismatched versions and hard‑to‑debug install issues.
- Always update via `npm install`, `npm update`, or `npm ci`.

---

## 12. `node_modules`
- Directory created by NPM to store all installed packages and nested dependencies.
- **Should not be committed**:
  - Can be re‑installed with `npm install`.
  - Large size can bloat your repository.

---

## 13. `dist` Folder
- Short for “distribution”.
- Contains production‑ready build artifacts: bundled JS, minified CSS, optimized images.
- **Ignore in Git**: can be regenerated with your build script (e.g., `npm run build`).

---

## 14. `browserslist`
- Configuration defining which browsers your project supports.
- **Formats**:
  - In `package.json` under `"browserslist"` key.
  - In a standalone `.browserslistrc` file.
- **Used by**: Babel (polyfills), Autoprefixer (CSS prefixes), bundlers (differential builds).

---

## 15. Semantic Versioning: `^` vs `~`

| Symbol | Meaning                                    | Example  | Allowed updates     |
|--------|--------------------------------------------|----------|---------------------|
| `^`    | Minor and patch updates, no new major      | `^1.2.3` | `>=1.2.3 <2.0.0`    |
| `~`    | Patch updates only (when major & minor set)| `~1.2.3` | `>=1.2.3 <1.3.0`    |

---

## 16. HTML `<script>` Types
- **Classic script** (default):
  ```html
  <script src="app.js"></script>
  ```
  Runs immediately in order of appearance.
- **Module script**:
  ```html
  <script type="module" src="main.js"></script>
  ```
  - Supports ES module imports/exports.
  - Deferred by default (executes after parsing).
  - Uses strict mode; top‑level `this` is `undefined`.

---

> **How to Use**  
> 1. Copy this block into a separate Markdown file (e.g., `ADDITIONAL_PRACTICES.md`) in VS Code.  
> 2. Customize or expand as needed.  
> 3. Commit and push to GitHub for clear, focused reference.

