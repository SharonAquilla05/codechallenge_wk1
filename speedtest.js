function SpeedDetector(){
    const speedLimit=70
    const demeritSpeed=5
    let prompt = require('prompt-sync')();
    //
    // get input from the user.
    //
    let speed = prompt('input your speed:');
    // condition according to speed limit added
    if(speed <=70){
        console.log ("Ok")
    }
    else{
        const points=Math.floor(((speed-speedLimit)/demeritSpeed))
        if(points >12){
            console.log("License suspended")
        }
        else{
            // points if speed limit is exceeded has been string interpolated
            console.log (`points:${points}`)
    }
    
    
}
}
// function has been invoked
SpeedDetector()
