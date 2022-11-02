// scripts.js

function showClasses(show) {
    if (show) {
        document.getElementById("classesPopup").style.visibility = "visible";
        document.getElementsById("main").setAttribute('class', 'blur');
    }
    else {
        document.getElementById("classesPopup").style.visibility = "hidden";
        document.getElementsById("main").setAttribute('class', 'null');
    }
}

function showHobbies(show) {
    if (show) {
        document.getElementById("hobbiesPopup").style.visibility = "visible";
        document.getElementsById("main").setAttribute('class', 'blur');
    }
    else {
        document.getElementById("hobbiesPopup").style.visibility = "hidden";
        document.getElementsById("main").setAttribute('class', 'null');
    }
}


function redirLink() {
    window.open("https://www.linkedin.com/in/kristen-friday/");
}