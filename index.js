var display = document.getElementById("display");


var buttons = Array.from(document.getElementsByClassName("buttons"))

document.addEventListener("keydown", function(e){
  if(e.key === "Backspace" || e.key === "c"){
    display.innerText = ""
  }else if(e.key === "ArrowLeft"){
    display.innerText = display.innerText.slice(0, -1);
  }else if(e.key === "=" || e.key === "Enter"){
    display.innerText = eval(display.innerText)+ " is the answer eksay"
  }else if(e.key === "+"){
    display.innerText = eval(display.innerText) +"+"
  }else if(e.key === "-"){
    display.innerText = eval(display.innerText) + "-"
  }else if(e.key === "*"){
    display.innerText = eval(display.innerText) + "*"
  }else if(e.key === "/"){
    display.innerText = eval(display.innerText) + "/"
  }else if(e.key === "1"){
    display.innerText =  (display.innerText) +"1"
  }else if(e.key === "2"){
    display.innerText =  (display.innerText) +"2"
  }else if(e.key === "3"){
    display.innerText =  (display.innerText) +"3"
  }else if(e.key === "4"){
    display.innerText =  (display.innerText) +"4"
  }else if(e.key === "5"){
    display.innerText =  (display.innerText) +"5"
  }else if(e.key === "5"){
    display.innerText =  (display.innerText) +"5"
  }else if(e.key === "6"){
    display.innerText =  (display.innerText) +"6"
  }else if(e.key === "7"){
    display.innerText =  (display.innerText) +"7"
  }else if(e.key === "8"){
    display.innerText =  (display.innerText) +"8"
  }else if(e.key === "9"){
    display.innerText =  (display.innerText) +"9"
  }else if(e.key === "0"){
    display.innerText =  (display.innerText) +"0"
  }
})


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
