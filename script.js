/* =========================================
   FLOATING HEARTS
========================================= */

const heartIcons = ["💖","💕","🌸","💗"];

for(let i=0;i<35;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=heartIcons[
        Math.floor(Math.random()*heartIcons.length)
    ];

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
        (7+Math.random()*8)+"s";

    heart.style.animationDelay=
        (-Math.random()*10)+"s";

    heart.style.fontSize=
        (18+Math.random()*16)+"px";

    document.body.appendChild(heart);

}


/* =========================================
   NO BUTTON
========================================= */

const no=document.getElementById("no");

const container=document.querySelector(".buttons");

const funnyTexts=[

    "No 🙈",

    "Nice try 😜",

    "Think again 🤭",

    "Catch me 😂",

    "Almost 😆"

];

let currentText=0;

let currentSide="right";


function moveButton(){

    const padding=10;

    const maxX=
        container.clientWidth-
        no.offsetWidth-
        padding;

    let newX;

    if(currentSide==="right"){

        newX=padding;

        currentSide="left";

    }else{

        newX=maxX;

        currentSide="right";

    }

    no.style.left=newX+"px";

    no.style.right="auto";

    currentText++;

    if(currentText>=funnyTexts.length){

        currentText=0;

    }

    no.innerHTML=funnyTexts[currentText];

}

/* =========================================
   EVENT LISTENERS
========================================= */

// Desktop
no.addEventListener("mouseenter", moveButton);

// Mobile
no.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveButton();

}, { passive:false });


// If someone somehow taps it,
// don't follow the button or open another page.
no.addEventListener("click", function(e){

    e.preventDefault();

    moveButton();

});


// Keep the button on the right if the page is resized.
window.addEventListener("resize", function(){

    no.style.left = "";
    no.style.right = "0";
    no.style.top = "0";

    currentSide = "right";

});
