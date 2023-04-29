//Function for removing first and third Person
function RFT() {
    let a = document.getElementById("first");
    let b = document.getElementById("second");
    let c = document.getElementById("third");
    let d = document.getElementById("forth");
    let e = document.getElementById("fifth");
    let f = document.getElementById("sixth");

    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    f.style.display = "block";

    alert("First and third Person is removed from the list");
}

//Function for removing second and forth Person
function RSF() {
    let a = document.getElementById("first");
    let b = document.getElementById("second");
    let c = document.getElementById("third");
    let d = document.getElementById("forth");
    let e = document.getElementById("fifth");
    let f = document.getElementById("sixth");

    b.style.display = "none";
    d.style.display = "none";
    a.style.display = "block";
    c.style.display = "block";
    e.style.display = "block";
    f.style.display = "block";

    alert("Second and forth Person is removed from the list");
}

//Function for removing fifth and sixth Person
function RFS() {
    let a = document.getElementById("first");
    let b = document.getElementById("second");
    let c = document.getElementById("third");
    let d = document.getElementById("forth");
    let e = document.getElementById("fifth");
    let f = document.getElementById("sixth");

    e.style.display = "none";
    f.style.display = "none";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";

    alert("Fifth and Sixth Person is removed from the list");
}