const DELAY_TIMER_FOR_ONLOAD = 1 * 1000;  //10 secs
const INITIAL_WAITING_TIME = 900;
const POST_DELAY_TIME = 400;
const SECONDS_SKIP = 4;


window.onload = () => {
    
    //progress of 0 to 100% animation ---------------------------
    setTimeout(() => {


            function loop() { 
                //let progressElement = document.getElementsByClassName('progress-display')[0];
            
                if(progressValue <= 100){
                    progressElement.innerHTML = progressValue + "%";
                    progressValue += SECONDS_SKIP;
                } else {
                    clearInterval(interval);
                }
            }
        
            
            let progressValue = 0;
            let progressElement = document.getElementsByClassName('progress-display')[0];
        
            const interval = setInterval(loop, DELAY_TIMER_FOR_ONLOAD/(100/SECONDS_SKIP));
    


    }, INITIAL_WAITING_TIME);



    //fade out animation after 100% load ----------------------
    setTimeout(() => {


        const loadScreen = document.getElementById('loading-screen');
        
        //loadScreen.style.display = 'none';
        //add fading transition out there
        loadScreen.classList.remove("fade-in");
        loadScreen.classList.add("fade-out");



        //load into the intro animation script file
        var introScript = document.createElement('script');
        introScript.src = './homepage/intro.js'; // The JavaScript file to load dynamically
        document.body.appendChild(introScript);

        var scrollbarScript = document.createElement('script');
        scrollbarScript.src = 'scrollbar.js'; // The JavaScript file to load dynamically
        document.body.appendChild(scrollbarScript);
        
        /* var introScript = document.createElement('script');
        introScript.src = 'intro.js'; // The JavaScript file to load dynamically
        document.body.appendChild(introScript);
        
        var introScript = document.createElement('script');
        introScript.src = 'intro.js'; // The JavaScript file to load dynamically
        document.body.appendChild(introScript); */




    }, DELAY_TIMER_FOR_ONLOAD + INITIAL_WAITING_TIME + POST_DELAY_TIME);

    
}