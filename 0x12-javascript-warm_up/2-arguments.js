#!/usr/bin/node

if (process.argv.length === 1) {
  console.log('Argument found');
} else if (process.argv.length > 1) {
  console.log('Arguments found');
} else {
  console.log('No argument');
}
