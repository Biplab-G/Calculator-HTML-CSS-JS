const display = document.getElementById("display");

function clearDisplay(input){
    display.textContent = "";
}

function deleteLast(value){
    display.textContent = display.textContent.slice(0, -1);
}

function appendValue(input){
    display.textContent = display.textContent+ input;
}

function calculate(){
    try {
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent= "Error";
    }
}









