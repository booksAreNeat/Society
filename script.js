var loginCounter = 0;
var copyCounter = 0;

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

//function for event validation
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

//function for login validation
function validate_login() {
    var email = document.forms["login"]["login_email"].value;
    var password = document.forms["login"]["login_password"].value;
    if (email==""){
        alert("You have not entered an email");
    }
    else {
        if (password==""){
            alert("You have to enter a password");
        }
        else {
            alert("You have logged in successfully");
        }
    }
}
