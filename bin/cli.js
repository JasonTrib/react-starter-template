#!/usr/bin/env node
import { execSync } from 'child_process';

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2] || 'react-starter-template';
const gitCheckoutCommand = `git clone --depth 1 https://github.com/JasonTrib/react-starter-template.git ${repoName}`;
const removeGitCommand = `rm -rf ./${repoName}/.git`;

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

const removedGit = runCommand(removeGitCommand);
if (!removedGit) process.exit(-1);

console.log('\nSuccess! Here are some commands to get started:\n');

console.log(`cd ${repoName}`);
console.log('npm install');
console.log('npm run dev');
