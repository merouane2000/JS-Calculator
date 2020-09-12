
    let trailingResult=0;

    let opirationOptions=['add','subtract','multiply','divide'];

    let workingOpiratin="";

function updateDisplay(input){

            let display = document.getElementById("display");

            let secondaryDisplay = document.getElementById("secondaryDisplay");

if ( display.innerText==="0" && opirationOptions.indexOf(input)=== -1){
    if (input === "decimal"){

        display.innerText="0.";

    }

    else if (input === "negative-Value"){

        if(display.innerText.indexOf("-1") === -1){
        
        display.innerText = "-" +  display.innerText;
    }

    else if (display.innerText.indexOf("-1">-1)){
        display.innerText= display.innerText.slice(1,display.innerText.length)

    }

    }

    else{
        display.innerText =input;

    }


            }
else if (opirationOptions.indexOf(input)>=0){ 

        if ( trailingResult === display.innerText){
                    
                workingOpiratin=input;


                }

                else if( workingOpiratin === ""){

                    workingOpiratin=input;
                    trailingResult=display.innerText;
                    secondaryDisplay.innerText =  trailingResult;

                  display.innerText= 0; 

                  

                }

    else{
                    trailingResult = calcutator(trailingResult,display.innerText,workingOpiratin);

                    secondaryDisplay.innerText=trailingResult;

                    display.innerText= 0;

                    workingOpiratin=input;

                }
            }
else if (input === "equals"){

                display.innerText=calcutator(trailingResult,display.innerText,workingOpiratin);

                trailingResult=0;

                workingOpiratin="";

                secondaryDisplay.innerText=trailingResult;

            }
else if(input === "decimal"){
     console.log("decimal number")
     if(display.innerText.indexOf(".") === -1){
         display.innerText += ".";
     }
     console.log("decimal skkipped")

}
else if (input === "negative-Value"){

    console.log("negative ");
    if(display.innerText.indexOf("-1") === -1){
        
        display.innerText = "-" +  display.innerText;
    }

    else if (display.innerText.indexOf("-1">-1)){
        display.innerText= display.innerText.slice(1,display.innerText.length)

    }


}
     else{
                 display.innerText +=input;
             }
       
        }

        function clearDisplay(){

            let display = document.getElementById("display");
            let secondaryDisplay = document.getElementById("secondaryDisplay");

            trailingResult=0

            display.innerText=0;

            secondaryDisplay.innerText= trailingResult;

        }

        function calcutator (firstNumber,secondNumber,opiraton){

            let result="";

            firstNumber=parseFloat(firstNumber);

            secondNumber=parseFloat(secondNumber);

            switch(opiraton) {
                        case 'add':
                        result=firstNumber+secondNumber;
                        break;
                        case 'subtract':
                        result=firstNumber-secondNumber;
                        break;
                        case 'multiply':
                        result=firstNumber*secondNumber;
                        break;
                        case 'divide':
                        result=firstNumber/secondNumber;
                        break;
                        default:
                        console.log("Calculator switch Statment missed somthing")
                    }
    return result.toString();

        }