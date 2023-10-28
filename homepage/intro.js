const yellowLine = document.getElementsByClassName("yellowLine")[0];
const textBoxes = document.getElementsByClassName("container");
//const animatorBox = document.getElementsByClassName("animatorBox")[0];

const phoneWidth = window.matchMedia("(max-width: 940px)");
phoneWidth.addListener( handlePhoneMediaQueryChange );
handlePhoneMediaQueryChange( phoneWidth );

loadAllDivs();

animateIntroTexts();


function handlePhoneMediaQueryChange( e ){
    if( e.matches ){
        console.log("Matches phone media screen width.");
    }
    else{
        console.log("Media does not match the screen width.");

        lineAnimate( width=0.75*window.innerWidth, duration=1200 );
    }
}


function lineAnimate( width, duration ){

    const LINE_DURATION = duration || 1200;
    const LINE_WIDTH = width || 600;

    yellowLine.animate({
        width: LINE_WIDTH + "px"
    }, { duration: LINE_DURATION, fill: "forwards" });  


}



function loadAllDivs(){
    for(var i=0; i<textBoxes.length; i++){
        textBoxes[i].style.visibility = "visible";
        textBoxes[i].style.top = yellowLine.getBoundingClientRect().top + window.scrollY + yellowLine.getBoundingClientRect().height + "px";
    }
}


function getNumber( el ){ return Number( el.substring( 0, el.length - 2 )); }


function animateIntroTexts(){
    //console.log("yellowLine top: ", yellowLine.getBoundingClientRect().top );
    //console.log("Width 1 = ",greet1_width);
    const greet1_width = textBoxes[0].getBoundingClientRect().width + window.scrollX;

    textBoxes[1].style.left = greet1_width + "px";
    textBoxes[1].style.top = getNumber( textBoxes[1].style.top ) - yellowLine.getBoundingClientRect().height - textBoxes[1].getBoundingClientRect().height + "px";
    //animatorBox.style.top = textBoxes[1].style.top + "px";

    //now popup - popdown the texts
    const FIRST_GREET_DELAY = 350;
    const NAME_DISPLAY_DELAY = 200 + FIRST_GREET_DELAY;

    const parentDiv = document.getElementsByClassName("textbox");
    const toSlideTextsUp = parentDiv[0].querySelectorAll(".text");
    const toSlideTextsDown = parentDiv[1].querySelectorAll(".text");

    //document.documentElement.style.setProperty("--slide-text-amount", "100px");

    slideTextsUpSequentially( toSlideTextsUp );
    slideTextsDownSequentially( toSlideTextsDown );



    function slideTextsUpSequentially( divs ){

        divs.forEach(( div, index ) => {
            setTimeout(() => {
                div.classList.add("slidingUp");
            }, index*250 );
        });
    }

    function slideTextsDownSequentially( divs ){

        divs.forEach(( div, index ) => {
            setTimeout(() => {
                div.classList.add("slidingDown");
            }, index*200 );
        });
    }




/* 
    const UNDERLINE_TIMER = 10 * 1000;
    const fname_underline = document.getElementsByClassName("fname")[0];
    const fname_after = window.getComputedStyle(fname_underline,"::after");

    setInterval( underlineAnimation, UNDERLINE_TIMER );
    function underlineAnimation(){

        fname_after.setProperty("width", "80%");





        fname_after.animate({
            width: "80%"
        }, { duration: 500, fill: "forwards" });

        setTimeout(() => {

            fname_after.animate({
                width: "0%"
            }, { duration: 500, fill: "forwards" });
    

        }, UNDERLINE_TIMER/2 );
    }
 */

    /* setTimeout(() => {
        textBoxes[0]
    }, FIRST_GREET_DELAY );


    setTimeout(() => {
        console.log("PRINT 2");
    }, NAME_DISPLAY_DELAY); */
}

/* 
function speedInSlowOut(el,t){
    function runFast(){
        if(i>=STATED_INTERVAL)
            clearInterval(fastMove);
        else{
            i+=1;
            el.style.width=i*FACTOR + "px";
        }
    }

    const fastMove = setInterval(runFast,)
}
 */