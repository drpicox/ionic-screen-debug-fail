**Bug Reported** [Here](https://github.com/ionic-team/ionic-framework/issues/25334#issuecomment-1465216110)

This repo shows a problem in the current version of ionic with testing.
The problem is that if you do `screen.debug()` or any of the
`@testing-library` matchers fail, it enters into an infinite loop and
makes the test fail.

**How to recreate**:

1. Create a new ionic project with

   `ionic start myApp blank --type=react`

2. Add `screen.debug()` into the test of `App.test.tsx`

   ```ts
   import { render, screen } from "@testing-library/react";
   import App from "./App";

   test("renders without crashing", () => {
     const { baseElement } = render(<App />);
     screen.debug();
     expect(baseElement).toBeDefined();
   });
   ```

3. Run tests with `npm test`

**Found result**:

```
 FAIL  src/App.test.tsx (6.74 s)
  ✕ renders without crashing (6335 ms)

  ● renders without crashing

    RangeError: Invalid string length

      at printObjectProperties (node_modules/pretty-format/build/collections.js:174:47)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)
      at printComplexValue (node_modules/pretty-format/build/index.js:310:48)
      at printer (node_modules/pretty-format/build/index.js:393:10)
      at printObjectProperties (node_modules/pretty-format/build/collections.js:173:21)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        6.776 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
✨  Done in 592.95s.
```
