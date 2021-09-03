var display = document.getElementById("display");


var buttons = Array.from(document.getElementsByClassName("buttons"))

buttons.map( button => {
  button.addEventListener("click", (e) => {
  switch(e.target.innerText){
    case "c":
    display.innerText = "";
    break;
    case "←":
    if(display.innerText){
      display.innerText = display.innerText.slice(0, -1);
    }
    break;
    case "=":
    try{
      display.innerText = eval(display.innerText)+ " is the answer eksay"
    }catch {
      display.innerText = "Saht Eksay"
    }

    break;
    default:
    display.innerText += e.target.innerText;

  }
  })
})



// year

var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
