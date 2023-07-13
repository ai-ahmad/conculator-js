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
            git remote komutu, Git deposundaki uzak depoları görüntülemek veya yapılandırmak için kullanılır. nima ise bir isimdir ve yeni bir uzak depo eklemek için kullanılır.

            git remote nima komutunu kullanarak nima adında bir uzak depo eklemek istediğinizi anlıyorum. Ancak, git remote komutu sadece mevcut uzak depoları listeler ve yeni bir uzak depo eklemek için kullanılmaz.
            
            Yeni bir uzak depo eklemek için aşağıdaki komutu kullanabilirsiniz:
            
            csharp
            Copy code
            git remote add nima <uzak_depo_URL>
            Burada <uzak_depo_URL>, nima adında yeni uzak depo için geçerli olan URL'yi temsil eder. Bu URL, uzak depoya nasıl erişileceğini belirtir. Örneğin, GitHub'da bir uzak depo için URL, https://github.com/kullanici_adi/depo_adi.git şeklinde olabilir.
            
            Lütfen, nima adındaki uzak depo için uygun bir URL kullanarak komutu çalıştırabilirsiniz   caseButton = "+"
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


console.log("finesh")
