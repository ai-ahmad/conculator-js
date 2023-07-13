// start dom
const button = document.querySelectorAll(".btn1");
const h2 = document.querySelector("h2");
// finish dom

//start waribles
natija = 0;
number_one = ""
caseButton = "";
number_two = "";
caseBtnCount = false;

// finish weribles

button.forEach(btn => {
    btn.addEventListener("click",()=> {
        const count = ()=> {
            switch(caseButton){
                 case 'x':
                    natija = number_one *number_two
                    break;
                case '/':
                    natija = number_one / number_two
                    break;
                case "-":
                    natija = number_one - number_two
                    break;
                case "+":
                    natija = number_one +number_two
                    break;
                
            }
            return natija;
        }
        switch(btn.textContent){
            case "C":
            caseBtnCount = false
            h2.textContent = "0"
            break;
            case "+":
            caseBtnCount = true
            caseButton = "+"
            h2.textContent = caseButton
            caseBtnCount = true
            break;
            case "x":
            caseButton = "x"
            h2.textContent = caseButton
            caseBtnCount = true
            break;
            case "/":
            caseButton = "/"
            h2.textContent = caseButton
            caseBtnCount = true
            break;
            case "-":
            caseButton = "-"
            h2.textContent = caseButton
            caseBtnCount = true
            break;
            case "=":
            h2.textContent = count();
            caseBtnCount = false
            number_one = "";
            number_two = "";
            break;
            default:
              if(!caseBtnCount){
                number_one += btn.textContent;
                h2.textContent = number_one 
              }else {
                number_two += btn.textContent;
                h2.textContent = number_two;
              }
            }
    })
})
