var loginCounter = 0;
var copyCounter = 0;

//function for login button on index page
function login(){
    if(loginCounter % 2 == 0){
        alert('You have been logged in!');
    } else {
        alert('You have been logged out!');
    }
    loginCounter += 1;
}

//functin for additional website button
function copied(){
    if(copyCounter % 2 == 0){
        alert('Discount code has been copied!')
    } else {
        alert('You have already copied the code')
    }
    copyCounter += 1;
}

//changes border of selected item pink when mouse hovers over - from lab but changed slightly
document.getElementById("imagegallery1").addEventListener("mouseover", highlight);
document.getElementById("imagegallery1").addEventListener("mouseout", delight);

function highlight(x){
    x.style="border: solid rgb(204, 0, 153) 2px;"
}

function delight(x){
    x.style="border: none;"
}

function submit_event() {
    var title = document.forms["event"]["event_title"].value;
    var date = document.forms["event"]["event_date"].value;
    if (title==""){
        alert("An event must have a title");
    }
    else {
        if (date.length == 0){
            alert("An event must have a date");
        }
        else {
            alert("Event has been submitted. The society will contact you shortly")
        }
    }
}
