#!/usr/bin/env node
const { writeFileSync } = require("fs"),
  // Current Working Directory
  cwd = process.cwd(),
  // Full file path that will going to create
  filePath = `${cwd}/jsconfig.json`,
  // File content of the jsconfig.json
  fileContent = `
{
    "compilerOptions": { "baseUrl": "src" },
    "include": ["src"]
}  
`;

writeFileSync(filePath, fileContent);
