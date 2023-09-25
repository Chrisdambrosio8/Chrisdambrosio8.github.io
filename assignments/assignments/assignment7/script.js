const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const changeFunds = () => {
    const mood = document.getElementById("txt-funds").value.toLowerCase().trim();
    const root = document.querySelector(":root");

    if (funds < 2499 ) {
        root.style.setProperty("square-fill", "25%", "--primary");
    } else if (funds >= 2500)
    {
        root.style.setProperty("square-fill", "50%", "--primary");
    } else{
        root.style.setProperty("square-fill", "100%", "--primary");
    }

}

const whoOlder = () => {
    const age1 = parseInt(document.getElementById("txt-age1").value);
    const age2 = parseInt(document.getElementById("txt-age2").value);
    const age3 = parseInt(document.getElementById("txt-age3").value);
    const orderDiv = document.getElementById("who-older");

    
    let largestAge, middleAge, smallestAge;

    if (age1 >= age2 && age2 >= age3) {
      largestAge = age1;
      middleAge = age2;
      smallestAge = age3;
    } else if (age1 >= age3 && age3 >= age2) {
      largestAge = age1;
      middleAge = age3;
      smallestAge = age2;
    } else if (age2 >= age1 && age1 >= age3) {
      largestAge = age2;
      middleAge = age1;
      smallestAge = age3;
    } else if (age2 >= age3 && age3 >= age1) {
      largestAge = age2;
      middleAge = age3;
      smallestAge = age1;
    } else if (age3 >= age1 && age1 >= age2) {
      largestAge = age3;
      middleAge = age1;
      smallestAge = age2;
    } else {
      largestAge = age3;
      middleAge = age2;
      smallestAge = age1;
    }
    
    console.log("Ages in descending order:");
    console.log(largestAge);
    console.log(middleAge);
    console.log(smallestAge);



}



window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-change-funds").onclick = changeFunds;
    document.getElementById("button-show-data").onclick = whoOlder;

};