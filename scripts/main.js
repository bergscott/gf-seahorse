var myImage = document.querySelector('img');

myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/seahorse.jpg') {
                myImage.setAttribute('src','images/orangehorse.jpg');
        } else {
                myImage.setAttribute('src','images/seahorse.jpg');
        }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
        var myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Pretty Yellow Seahorse for ' + myName;
}

if(!localStorage.getItem('name')) {
        setUserName();
} else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Pretty Yellow Seahorse for ' + storedName;
}

myButton.onclick = function() {
        setUserName();
}
