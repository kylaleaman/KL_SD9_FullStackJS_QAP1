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
console.log(colors.silly('No just kidding, I got 100%'));

// Lodash is another npm that allows working with arrays and objects easier
// and more organized. 

var _ = require('lodash');

// Using lodash with an array
var receiptItems = [5.99, 6.25, 4.50, 9.99, 7.89, 3.21, 1.09];
var receiptTotal = _.sum(receiptItems);
console.log('Total amount: ', receiptTotal);

// Using lodash find the highest(max) and lowest(min) amount
var max = _.max(receiptItems);
console.log(colors.angry('Highest item: ', max));

var min = _.min(receiptItems);
console.log(colors.sick('Lowest item: ', min));

console.log(colors.bgBrightCyan("Thank you for being a great teacher!"))
