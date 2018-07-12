


    var vidRef = document.getElementById('vid1')
    var playBtnRef = document.getElementById('playButton') 
    var pauseBtnRef = document.getElementById('pauseButton') 

    function playMe(){
        vidRef.play()
        //playBtnRef.setAttribute("style", "color:pink; background-color:grey;") 
        //playBtnRef.setAttribute("disabled",true)
    playBtnRef.disabled = "true"
    pauseBtnRef.removeAttribute("disabled")
    
        console.log(vidRef.paused)
    
    }

    pauseMe = function(){
        vidRef.pause()
        pauseBtnRef.setAttribute("disabled", true)
        //playBtnRef.setAttribute("disabled", false)
        pauseBtnRef.disabled = "true"   
        playBtnRef.removeAttribute("disabled")
        console.log(vidRef.paused)
    }

    callMe1()
    callMe2()
    function callMe1(){
        console.log("called 1");
    }    

    callMe2 = function(){
        console.log("called2");
    }


