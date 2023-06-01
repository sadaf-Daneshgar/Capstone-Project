//  add code of dom for showing 

// by this code I create div with dom
// create a new div and set its attributes
let div = document.createElement('div');
div.id = 'content';
div.className = 'note';

// create a new text node and add it to the div
let text = document.createTextNode('CreateElement example');
div.appendChild(text);

// add div to the document
document.body.appendChild(div);

// this is a selector in css is this not be a selector in css it will take errors
let element = parentNode.querySelector(selector);

// this one is attribute selector
let autoplay = document.querySelector('[autoplay]');

// in this code I add the class info into my div
let div = document.querySelector('#content');
div.classList.add('info');

// create the object 
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// way of accissing into objects
person.firstName();