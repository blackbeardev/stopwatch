$(function() {

//Define the variables needed:
    //App mode
    var mode = 0;   //The mode is off

    //time counter - find out how many milliseconds have elapsed and then conver that into milliseconds, seconds and minutes
    var timeCounter = 0;

    //lap counter
    var lapCounter = 0;
    //variable for setInterval
    var action;
    //Number of laps
    var lapNum = 0;
    //minutes, seconds, milliseconds for time
    var timeMinutes, timeSeconds, timeMilliseconds, lapMinutes, lapSeconds, lapMilliseconds;

    //FUNCTIONS

    //Function for showing the start and lap buttons when the page is first loaded:
    function hideShowBtns(x, y) {
        $(".btn-control").hide();
        $(x).show();
        $(y).show();

    }

    //Function for starting the counter:
    function startCounter() {
        
    }


    //When the app is loaded only show the start and lap buttons
    hideShowBtns("#start-btn", "#lap-btn");

    //When the start button is clicked on:
        $("#start-btn").on("click", function() {
            //change the app mode to on
            mode = 1;
            //show the stop and lap buttons
            hideShowBtns("#stop-btn", "#lap-btn");
            //start the counter
            startCounter();
        });
        





    //When the stop button is clicked on:
        //Show the resume and reset buttons
        //stop the counter



    //When the resume button is clicked on:
        //show the stop and lap buttons
        //start action



    //When the reset button is clicked on:
        //reload the page


    //When the lap button is clicked on:
        //if mode is ON:
            //stop the action
            //resetlap and print lap details
            //start action



    

});