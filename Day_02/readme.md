# Difference Between CommonJS (CJS) and ES Module (MJS)

## CommonJS (CJS)
- Older module system but still widely used.
- Uses `require` for importing and `module.exports` for exporting.
- Synchronous execution.
- Non-strict mode by default.

## ES Module (MJS)
- Newer module system introduced in ES6.
- Uses `import` and `export` for module handling.
- Asynchronous execution.
- Strict mode by default.

---

# JavaScript Execution Model
JavaScript is a **single-threaded** and **synchronous** language, meaning it executes one task at a time in a sequential manner.

---

# Process, Threads, and Parallel Execution

## Single Processor
A **single processor** can handle only one task at a time. However, modern systems appear to handle multiple tasks simultaneously due to **context switching**.

### Example:
Suppose you are performing three tasks simultaneously:
1. Watching YouTube.
2. Listening to music.
3. Playing PUBG.

On a **single-core processor**, the CPU rapidly switches between these tasks, running each for a small period before switching to the next. This context switching happens so fast that it gives the illusion that all tasks are running simultaneously. This is called **concurrent execution**.

## Why Do We Need Multi-Core Processors?
If the number of tasks increases, the frequent switching causes delays, leading to performance issues such as system lag. A **multi-core processor** helps mitigate this by handling multiple tasks in parallel.

## Dual-Core Processor
A **dual-core processor** has two cores, allowing it to run two tasks truly in parallel.
- Example: One core can handle YouTube while the other handles PUBG.
- If more than two tasks are running, context switching will still occur, meaning both **parallelism and concurrency** coexist.

## How Does a 20GB Game Run on 8GB RAM?
Modern applications load data in chunks rather than loading the entire file into memory at once. This method is known as **virtual memory management**.
- Example: When playing PUBG, only necessary game files are loaded into RAM dynamically while unused portions remain in storage.

## Octa-Core Processor
An **octa-core processor** can handle **8 tasks simultaneously**. If a system has **20 tasks**, the CPU assigns them across the cores, optimizing execution. Some tasks still require context switching when cores are fully occupied.

### Note:
A **single process** can be allocated to **multiple processors** for improved performance.

---

# Understanding Process and Threads
- **Process:** A task that is being executed. It consumes memory and CPU resources.
- **Thread:** A smaller unit within a process responsible for executing specific tasks.
- **Multi-threading:** Running multiple threads in a single process to improve performance.

### Why Do We Need Multiple Threads?
Consider a process executing the following tasks:
1. Downloading a file.
2. Printing an image of Virat Kohli.
3. Transferring a file.

In a **single-core processor**, context switching occurs between threads. In an **octa-core processor**, each thread can be assigned to a separate core, allowing true parallel execution.

---

# Multi-Threading in Node.js and Browsers
- **Node.js**: Single-threaded but supports multi-threading using **libuv**.
- **Browsers**: The **V8 engine** is single-threaded, but Web APIs allow for asynchronous execution, enabling parallelism.

---

This document provides a clear understanding of JavaScript execution, multi-threading, and CPU resource allocation across different architectures.

