document.addEventListener('DOMContentLoaded', function(){

    //Task 1

    let arr = [2,4,1,3]

    console.log(arr);
    
    function getSortArray (array, type){
        if(type == 'up'){
            array.sort((a,b)=>a-b)
            console.log(array);
        }
        else if(type == 'down'){
            array.sort((a,b)=>a-b).reverse();
            console.log(array);
        }
        else{
            console.log('Invalid type of sort');
        }
    }

    getSortArray(arr, 'up');

    //Task 2

    let container = document.querySelector('.container');
    let whiteDiv = document.createElement('div');
    whiteDiv.classList.add('white_div');
    let blueDiv = document.createElement('div');
    blueDiv.classList.add('blue_div');
    let redDiv = document.createElement('div');
    redDiv.classList.add('red_div');

    for(let i=0;i<20;i++){
            whiteDiv.innerHTML += '\n';
            blueDiv.innerHTML += '\n';
            redDiv.innerHTML += '\n';
        for(let j=0;j<80;j++){
            whiteDiv.innerHTML += 'O';
            blueDiv.innerHTML += 'O';
            redDiv.innerHTML += 'O'; 
        }
    }

    container.prepend(whiteDiv,blueDiv,redDiv);


    //Task 3

    let count = 2;
    let phoneInput = document.querySelector('.phoneInput');
    let addPhoneButton = document.querySelector('#addPhone');
    addPhoneButton.onclick = function(event){
        event.preventDefault();
        let newPhoneInput = document.createElement('input');
        let newPhoneLabel = document.createElement('label')
        newPhoneLabel.innerHTML = `Телефон ${count}`
        phoneInput.append(newPhoneLabel,newPhoneInput);
        count++;
    }

    class Person{
        constructor(){
            this.fullName = 'Дубойский Александр Николаевич';
            this.phoneNumber = '+375257587011';
            this.comment = 'comment';
        }
        Send(){
            let fullNameInput = document.querySelector('#fullName');
            let phoneNumberInput = document.querySelector('#phone');
            let commentInput = document.querySelector('#comment');
            fullNameInput.value += this.fullName;
            phoneNumberInput.value += this.phoneNumber;
            commentInput.value += this.comment;
        }
    }

    let submitButton = document.querySelector('#submit');
    submitButton.onclick = function(){
        new Person().Send();
    }
})