let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images\\640px-Vereenigde_Oostindische_Compagnie_spiegelretourschip_Amsterdam_replica.jpg" ){
        myImage.setAttribute ("src", "images\\VoC.jpg");
    }
    else {
        myImage.setAttribute ("src", "images\\640px-Vereenigde_Oostindische_Compagnie_spiegelretourschip_Amsterdam_replica.jpg");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'History of Economics for, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'History of Economics for, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }