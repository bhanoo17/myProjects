const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

const arr = Array.from(buttons);
let result = "";

arr.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            result = eval(result);
            input.value = result;
        }
        else if(e.target.innerText == 'AC'){
            result = "";
            input.value = result;
        }
        else if(e.target.innerText == 'DEL'){
            result = result.substring(0,result.length-1);
            input.value = result;
        }
        else{
            result += e.target.innerText;
            input.value = result; 
        }
    });
})
