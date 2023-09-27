document.addEventListener("DOMContentLoaded", function () {
   const display = document.getElementById('cal-display');
   const buttons = document.getElementsByClassName('btn');

   let currValue="";

   function evaluateResult(){
    console.log('currValue: ', currValue);
    const convertedValue = currValue.replace("x","*").replace("÷","/").replace("%","*0.01")
    .replace('sin','Math.sin').replace('cos','Math.cos').replace('ln','Math.log').replace('π','Math.PI')
    .replace('log','Math.log10').replace('e','Math.E').replace('tan','Math.tan').replace('√','Math.sqrt');

    console.log('convertValue: ', convertedValue);
     const result = eval(convertedValue);
     currValue = result.toString();
     display.value = currValue;
   }

   for(let i=0;i<buttons.length;i++){
    const button = buttons[i];
    button.addEventListener('click', function() {
        const value=button.innerHTML;

        try{
        if(value == "AC"){
            currValue="";
            display.value = currValue;
        } else if(value == "="){
           evaluateResult();
        } else {

            currValue +=value;
            display.value=currValue;
        }
    } catch(error){
        console.error(error);
        currValue="ERROR";
        display.value=currValue;
    }

    })
   }

});