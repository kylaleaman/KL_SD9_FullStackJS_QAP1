// The process object provides information about the node.js process. 
// It has properties such as "argv" - command-line arguments and "env" - 
// environment variables 

// Command-line arguments(argv)
console.log('Arguments', process.argv);

//Environment variables 
console.log('Enviroment variables', process.env);

// Exit process after a delay using setTimeout
setTimeout(() => {
    console.log('Exiting the process after a delay.');
    process.exit();
  }, 3000);
  