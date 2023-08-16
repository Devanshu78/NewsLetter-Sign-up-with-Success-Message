
const emailId = document.querySelector('#emailId');
const invalidText = document.querySelector('.invalidText');
const inputEmail = document.querySelector('#inputEmail');
const successMessage = document.querySelector('.successMessage');
const container = document.querySelector('.container');
const dismiss = document.querySelector('.dismiss');


function specialChar(str) {
    let specialCharacter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return specialCharacter.test(str);
}

invalidText.classList.add('hidden');

document.getElementById('firstBtn').addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('emailId')
    let str = input.value;
    let validation = specialChar(str);
    if(validation == false){
        emailId.classList.add('invalid');
        invalidText.classList.remove('hidden');
    }
    else{
        container.classList.add('hidden')
        successMessage.classList.remove('hidden');
        inputEmail.innerHTML = str;
    }
})


dismiss.addEventListener('click' , ()=>{
    container.classList.remove('hidden')
    successMessage.classList.add('hidden');  
    window.location.reload();
})