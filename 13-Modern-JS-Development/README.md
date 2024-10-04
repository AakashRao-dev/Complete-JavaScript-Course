# Notes

- Bundling: Join all modules into one file
- Transpiling/Polyfilling: Convert JS back to ES5

Two step makes the **BUILD PROCESS**

- Webpack & Parcel: JavaScript Bundlers

#### Module

- Reusable piece of code that **encapsulates** implementation details
- Usually a **standalone file**, but it doesn't have to be
- Export: (PUBLIC API)
- Import: (DEPENDANCY)

- Why Modules?
  **Compose Software**: Modules are small building blocks that we put together to build complex applications
  **Isolate Components**: Modules can be developed in isolation without thinking about the entire codebases
  **Abstract Code**: Implement low-level code in modules & import these abstractions into other modules
  **Organized Code**: Modules naturally lead to a more organized codebase

### Native JavaScript ES6 Modules

- Modules stored in files, exactly one module per file

**ES Module**

1. Top-level variables - Scoped to module
2. Always in strict mode
3. Top-level this - undefined
4. Imports & Exports works
5. HTML linking `<script type="module">`
6. File Downloading - Asynchronous
7. Modules are imported Synchronously
8. This makes budling & dead code elimination possible

**Script**

1. Global (problem: global namespace pollution)
2. Manually define strict mode
3. Top-level this - window
4. Imports & Exports does't work
5. HTML linking `<script>`
6. Synchronous

PARSING main file - (AYSNC DOWNLOADING MODULES - LINKING IMPORTS - EXECUTING MODULES) - EXECUTING main file
