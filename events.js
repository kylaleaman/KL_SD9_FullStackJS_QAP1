// Node.js has a module called "Events" that helps your programs react
// to things that happen, like button clicks or data arriving. It provides
// You can create and listen for events, making it easier to organize
// and control how your code responds to different situations

// Create an instance of EventEmitter
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create event handler
const myEventHandler = function () {
    console.log('Today is Fri-YAY!');
}

// Assign handler to event
eventEmitter.on('Day', myEventHandler);

// Emit the event
eventEmitter.emit('Day');


