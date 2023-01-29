const button = document.getElementsByClassName('button');
const inputField = document.getElementById('input-number');
const infoParagraph= document.getElementById('info');

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', (event) =>{
        infoParagraph.style.display='none';
        let inputText='';
        switch(event.target.innerHTML){
            case 'C':
                break;
            case '=':
                try{
                    inputText=eval(inputField.value);
                }
                catch(e){
                    inputText='';
                    infoParagraph.style.display='block';
                    infoParagraph.innerHTML='Invalid operation';
                }
                break;
            case '←':
                inputText=inputField.value.slice(0 ,inputField.value.length-1);
                break;
            default:
            inputText=`${inputField.value}${event.target.innerHTML}`
            //inputField.value means previous value whereas event.target.innerHTML is the input value which is given by user.
        }

        inputField.value= inputText;
    });
}