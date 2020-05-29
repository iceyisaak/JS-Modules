// main.js: brings in speak.js by requiring it , then invoke it with 2 params. CommonJS will bring in needed modules when it looks up the dependency tree.

var speak = require("speak");
speak("deu", 25);