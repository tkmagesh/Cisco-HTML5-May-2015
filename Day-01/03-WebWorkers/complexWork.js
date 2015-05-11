function doWork(){
    for(var i=0; i<10000; i++)
        for(var j=0; j<10000; j++)
            for(var k=0; k<100;k++)
            {}
}

self.addEventListener("message", function(messageEvt){
    if (messageEvt.data === "start"){
        displayMessage("Work Started");
        doWork();
        displayMessage("Work Completed");
    } else {
        console.log("unknown message from main");
    }
});
    
function displayMessage(msg){
    self.postMessage(msg);
}