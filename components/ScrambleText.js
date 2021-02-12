import React, { useSate } from 'react';

const ScrambleText = (props) => {
  let el = '';
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const queue = [];
  const frame = 0;

  function setText(newText) {
    const oldText = el;

    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (resolve = resolve));

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    update();
    return promise;
  }
  function update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i];
      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue[i].char = char;
        }
        return (output += `<span class="dud">${char}</span>`);
      } else {
        return (output += from);
      }
    }
    return (el = output);

    function randomChar() {
      return chars[Math.floor(Math.random() * chars.length)];
    }

    const phrases = ['I Design', 'I Create', 'I Optimize', "I'm a Self-Taught Techie", "That's The Difference"];

    let counter = 0;
    const next = () => {
      setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }
};

export default ScrambleText;
