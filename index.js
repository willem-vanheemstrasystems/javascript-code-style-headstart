/*
 * File: index.js
 */
var Checker = require('jscs');
var checker = new Checker();
checker.registerDefaultRules();

// Use the node-style-guide preset
checker.configure({
  preset: 'node-style-guide',
});
