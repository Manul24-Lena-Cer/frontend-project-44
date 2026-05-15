#!/usr/bin/env node
import userInput from 'readline-sync'; 

function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = userInput.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export default greetUser; 
