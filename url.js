// The URL module provides tools to break down a URL into its parts or create
// individual components. 

var url = require('url');

// Parsing a URL
var address = 'https://localhost:3000/default.htm?year=2024&month=may';
// var parsedURL = url.parse(urlString, true);
var q = url.parse(address, true);

// Display URL components 
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//Build a URL
var newURL = url.format({
    protocol: 'https',
    host: 'www.kylasarahleaman.com',
    pathname: '/aboutme',
});
console.log(newURL);