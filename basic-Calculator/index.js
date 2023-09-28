const screen = document.getElementById('screen');
const inputBtn = document.querySelectorAll('button');

let result = "";
const buttons = Array.from(inputBtn);
buttons.forEach((inputData)=>{
    inputData.addEventListener('click', (e)=>{
        if(e.target.innerText === '='){
            result = eval(result);
            screen.value = result;
        }
        else if(e.target.innerText === 'AC'){
            result = "";
            screen.value = result;
        }
        else if(e.target.innerText === 'DE'){
            result = result.substring(0,result.length-1);
            screen.value = result;
        }
        else{
            result += e.target.innerText;
            screen.value = result; 
        }
    }
    )
})