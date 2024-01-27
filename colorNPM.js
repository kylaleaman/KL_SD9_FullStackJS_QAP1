// @Colors/colors is a npm that adds color to your outputs in your console.
// You can use this library to set themes or have fun

// Require colors
var colors = require('@colors/colors');

// Using @Colors/colors for fun
console.log('Hello Peter'.rainbow);
console.log('Hope you are having a great day!'.brightMagenta.bgBrightWhite);

// Using @Colors/colors for seeing a theme that is "string safe"
colors.setTheme ({
    silly: 'rainbow',
    happy: 'yellow',
    sad: 'blue',
    angry: 'red',
    pretty: 'brightMagenta',
    sick: 'green'
})

console.log(colors.sick('I am sick today'));
console.log(colors.sad('This is a really sad movie'));
console.log(colors.pretty('I love Barbie!!'));
console.log(colors.angry('I got an F on my assignment'));
console.log(colors.happy('No just kidding, I got 100%'));