/* ===================================================================
//////////////////////////////////////////////////////////////////////

  _________            .__        __          __        
 /   _____/ ___________|__|______/  |_       |__| ______
 \_____  \_/ ___\_  __ \  \____ \   __\      |  |/  ___/
 /        \  \___|  | \/  |  |_> >  |        |  |\___ \ 
/_______  /\___  >__|  |__|   __/|__| /\ /\__|  /____  >
        \/     \/         |__|        \/ \______|    \/ 

                                                    Script for index
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 ====================================================================*/

 /* READ ME */
/*-------------------------------------------------------------------*/
/* ADD in text here for read me page */
/*-------------------------------------------------------------------*/


/*---------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////
                        _         _      _            
    /\   /\ __ _  _ __ (_)  __ _ | |__  | |  ___  ___ 
    \ \ / // _` || '__|| | / _` || '_ \ | | / _ \/ __|
     \ V /| (_| || |   | || (_| || |_) || ||  __/\__ \
      \_/  \__,_||_|   |_| \__,_||_.__/ |_| \___||___/
                                                        
//////////////////////////////////////////////////////////////////////
---------------------------------------------------------------------*/

var Landing = true;
var lastPress = null;
var width = window.innerWidth;
var animationStatus = false;


/*---------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////
    Functions
//////////////////////////////////////////////////////////////////////
---------------------------------------------------------------------*/


/*********************************************************************  
    Delay timer
*********************************************************************/
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };


/*********************************************************************  
    Fuction for button click - Header
*********************************************************************/

    let buttonClick = async (name) => {
        var main = document.getElementsByTagName("main")[0].style;
        main.opacity = 1;
        // Checks if a animation is already running
        if (animationStatus) {
            return;
        }

        // Checks if the button name was the last pressed

        if (lastPress == name) {
            console.log(`Button press $(name) already pressed`);
            return;
        }

        // Scrolls all articles back to top 
        var Venue_scroll = document.getElementsByClassName("article-title");
        Venue_scroll[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        Venue_scroll[1].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        Venue_scroll[2].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        Venue_scroll[3].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        Venue_scroll[4].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

        // Sets a variable for delayers
        let delayres = null;
        var exitB = document.getElementsByClassName("ExitButton")[0].style;

        // resets all icons before setting it to the button pressed 
        iconDisplay("Clear");
        iconDisplay(name);

        // Looks to see if the user is on the landing page
        if (Landing) {
            animationStatus = true;
            scroll("Up");
            delayres = await delay(1000);
            Clam("Open");
            delayres = await delay(3000);
            ContentDisplay("Clear");
            ContentDisplay(name);
            exitB.display = "inline";
            Landing = !Landing;
            lastPress = name;
            animationStatus = false;
            return;
        }
        else {
            animationStatus = true;
            lastPress = name;
            console.log(`Button to open next page`);
            Clam("Close");
            delayres = await delay(3000);
            ContentDisplay("Clear");
            ContentDisplay(name);
            Clam("Open");
            delayres = await delay(1000);
            animationStatus = false;
        }

    }

/*********************************************************************  
    Fuction for button click - Header
*********************************************************************/
    let ButtonClose = async (name) => {
        if (animationStatus) {
            return;
        }
        animationStatus = true;
        var exitB = document.getElementsByClassName("ExitButton")[0].style;
        var main = document.getElementsByTagName("main")[0].style;
        main.top = "-100vh";
        iconDisplay("Clear");
        scroll("Down");
        lastPress = null;
        exitB.display = "none";
        let delayres = await delay(3000);
        Landing = !Landing;
        Clam("Close");
        main.top = "0dvh";
        animationStatus = false;
    }

/*********************************************************************  
    Fuction for Icon display - Header Icons
*********************************************************************/

    function iconDisplay(name) {
        var Venueimg = document.getElementById("VenueUnclicked");
        var Taxiimg = document.getElementById("TaxiUnclicked");
        var Storyimg = document.getElementById("StoryUnclicked");
        var FAQimg = document.getElementById("FAQUnclicked");
        var RSVPimg = document.getElementById("RSVPUnclicked");
    
        switch (name) {
            case "Venue":
                Venueimg.src = "/resources/ICONS/Venue-click.png";
                break;
            case "Taxi":
                Taxiimg.src = "/resources/ICONS/Hotel-click.png";
                break;
            case "RSVP":
                RSVPimg.src = "/resources/ICONS/RSVP-click.png";
                break;
            case "Story":
                Storyimg.src = "/resources/ICONS/About-click.png";
                break;
            case "FAQ":
                    FAQimg.src = "/resources/ICONS/FAQ-click.png";
                break;
            case "Clear":
                Taxiimg.src = "resources/ICONS/Hotel.PNG";
                Venueimg.src = "/resources/ICONS/Venue.PNG";
                RSVPimg.src = "/resources/ICONS/RSVP.png";
                FAQimg.src = "resources/ICONS/FAQ.PNG";
                Storyimg.src = "resources/ICONS/About.PNG";
                console.log("Clearing icons")
                break;
            default:
                console.log("Error");
                break;
        }
    }

/*********************************************************************  
    Fuction for content display - Main content section Icons
*********************************************************************/

    function ContentDisplay(name) {
        var Venue = document.getElementById("Venue").style;
        var Taxi = document.getElementById("Transport").style;
        var Story = document.getElementById("Story").style;
        var FAQ = document.getElementById("FAQ").style;
        var RSVP = document.getElementById("RSVP").style;

        Venue.animationName = "none";
        Taxi.animationName = "none";
        Story.animationName = "none";
        FAQ.animationName = "none";
        RSVP.animationName = "none";
        
             
        switch (name) {
            case "Venue":
                Venue.display = "inline";
                requestAnimationFrame(() => {
                    console.log("Scrolling up")
                    Venue.animation = "fade 2s linear 0s 1 normal forwards";
                })
                break;
            case "Taxi":
                Taxi.display = "inline";
                requestAnimationFrame(() => {
                    console.log("Scrolling up")
                    Taxi.animation = "fade 2s linear 0s 1 normal forwards";
                })
                break;
            case "RSVP":
                RSVP.display = "inline";
                requestAnimationFrame(() => {
                    console.log("Scrolling up")
                    RSVP.animation = "fade 2s linear 0s 1 normal forwards";
                })
                break;
            case "Story":
                Story.display = "inline";
                requestAnimationFrame(() => {
                    console.log("Scrolling up")
                    Story.animation = "fade 2s linear 0s 1 normal forwards";
                })
                break;
            case "FAQ":
                FAQ.display = "inline";
                requestAnimationFrame(() => {
                    console.log("Scrolling up")
                    FAQ.animation = "fade 2s linear 0s 1 normal forwards";
                })
                break;
            case "Clear":
                Venue.display = "None";
                Taxi.display = "None";
                RSVP.display = "None";
                Story.display = "None";
                FAQ.display = "None";                
                break;
            default:
                console.log("Error");
                break;
        }
    }


/*********************************************************************  
    Fuction Scrolling animation
*********************************************************************/ 

function scroll(direction) {
    var main = document.getElementsByTagName("main")[0].style;
    main.animationName = "none";

    switch(direction){
        case "Up":
            requestAnimationFrame(() => {
                console.log("Scrolling up")
                main.animation = "scroll 1s linear 0s 1 normal forwards";
            })
            break;
        case "Down":
                requestAnimationFrame(() => {
                console.log("Scrolling Down")
                main.animation = "scroll 1s linear 0s 1 reverse forwards";
            })
            break;
        default:
            return;

    }
}

/*********************************************************************  
    Fuction opening animation
*********************************************************************/ 

let Clam = async(direction) => {
    var docContent = document.getElementsByClassName("Content")[0].style;
    docContent.animationName = "none";
    
    // let delayres = await delay(400);

    switch(direction){
        case "Open":
            console.log("Opening Clam");
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    docContent.animation = "close 1.5s linear 0s 1 reverse forwards";
                })            
                docContent.gridTemplateRows = "10% 0% 10%";
            })
            break;
        case "Close":
            console.log("Closing Clam");
            requestAnimationFrame(() => {
                docContent.animation = "close 1.5s linear 0s 1 normal forwards";
            })
            docContent.gridTemplateRows = "10% 80% 10%";
            break;
        default:
            return;

    }
}