function myFunction() {
    var myIcon = document.getElementById("myIcon");

    myIcon.style.top = '';
    myIcon.style.right = '';
    myIcon.style.bottom = '';
    myIcon.style.left = '';

    var x = Math.floor(Math.random() * 4) + 1;
    console.log(x);

    if (x === 1) {
        myIcon.style.left = "+20px";
    } else if (x === 2) {
        myIcon.style.right = "-20px";
    } else if (x === 3) {
        myIcon.style.top = "0px";
    } else if (x === 4) {
        myIcon.style.bottom = "0px";
    }
}
