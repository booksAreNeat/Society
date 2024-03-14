var counter = 0;

function login(){
    if(counter % 2 == 0){
        alert('You have been logged in!');
    } else {
        alert('You have been logged out!');
    }
    counter += 1;
}

document.getElementById("imagegallery1").addEventListener("mouseover", highlight);
document.getElementById("imagegallery1").addEventListener("mouseout", delight);

function highlight(x){
    x.style="border: solid blue 2px;"
}

function delight(x){
    x.style="border: none;"
}