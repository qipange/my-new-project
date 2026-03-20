const { greet, add, multiply } = require('./utils');

console.log("=== My New Project ===");

// Test the utility functions
console.log(greet("World"));

console.log("Math operations:");
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`5 * 3 = ${multiply(5, 3)}`);

console.log("Project initialized successfully!");