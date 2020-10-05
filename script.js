// / gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format("MMM Do YY");  
    
    $("#date").text(currentHeaderDate);
}



// loads header date
getHeaderDate();

// gets the past present and future color chancges
var currentTime = moment().format('LT');  
console.log(currentTime)


var hourformat= document.getElementsByClassName("<textarea>");



if (currentTime < moment().format(HH)){
    document.getElementsByClassName("<textarea>")({
        "class":"past"



    })
else if(currentTime === moment().format(HH)){
    document.getElementsByClassName("<textarea>")({
        "class":"present"

    })
else if(currentTime > moment().format(HH)){
    document.getElementsByClassName("<textarea>")({
        "class":"future"

    })

}}}