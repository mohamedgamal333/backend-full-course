# Alternative Server Setup

While working on Chapter 3, I explored an alternative and simpler way to determine the current directory in Node.js ES Modules.

## Course Implementation

The course uses:

```js
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

This approach converts the current module URL into a filesystem path and then extracts the directory name.

## Alternative Implementation

Newer Node.js versions provide `import.meta.dirname`, which can make the implementation shorter:

```js
import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
});
```

## Why I Explored This

I wanted to understand whether there was a simpler way to solve the same problem instead of only following the implementation used in the course.

This helped me understand that:

* There can be multiple valid implementations of the same problem.
* New Node.js features can simplify older patterns.
* Understanding the reason behind a solution is more valuable than simply memorizing it.

## Decision

I kept the course implementation in the main application because the goal of this chapter is also to understand how `fileURLToPath()` and `dirname()` work.

The alternative implementation is documented separately so the main application remains clean while preserving what I learned during the research.
