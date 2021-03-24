// Referred back to in-class demo and used the examples that were given. 
// querySelector() Created a variable (header) and changed the color.
var header = document.querySelector("header");
header.style.backgroundColor = "#55682F";

// querySelectorAll() Created a variable (h2) and looped over it and changed the color of all (h2) tags.
var h2 = document.querySelectorAll("h2");
for (var i = 0; i < h2.length; i++) {
    h2[i].style.color = "#E11584";
}

// getElementById() Created a variable (info) and Text-Aligned.
var info = document.getElementById("info");
info.style.textAlign = "center";

// getElementsByClassName() Created a variable (footerSections) and looped over it to change the background color.
var footerSections = document.getElementsByClassName("footerSection");
for (var i = 0; i < footerSections.length; i++) {
    footerSections[i].style.backgroundColor = "#bf9b30";
}

// getElementsByTagName() Created a variable (a) and looped over it to be bold.
var a = document.getElementsByTagName("a")
for (var i = 0; i < a.length; i++) {
    a[i].style.fontWeight = "bold";
}

// createElement() Created a variable (newElement) that is an (h3) tag and set the text to below.  Added it to the end of the (info) section.
var newElement = document.createElement("h3");
newElement.innerText = "`RADIATE BOUNDLESS LOVE TOWARDS THE ENTIRE WORLD ABOVE, BELOW & ACROSS'. Buddha";
info.append(newElement);

// createTextNode() Created a variable that is text and added it to the end of the (info) section.
var createTextNode = document.createTextNode("Birds......Birds");
info.append(createTextNode);

// removeChild() Removed the createTextNode ("Birds......Birds") from the (info) section.
info.removeChild(createTextNode);

// classList add() Added a class ("centerHeader") to center the header.
header.classList.add("centerHeader");
// classList remove() Removed a class ("centerHeader").
header.classList.remove("centerHeader");
// classList toggle() Toggled ("centerHeader"), which adds it because it was just removed.
header.classList.toggle("centerHeader");
