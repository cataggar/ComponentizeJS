import process from 'node:process';

export function hello (name) {
  return `Hello ${name} ${process.version}`;
}