const buttonEl = document.querySelector("#btn");
const birthdayEl =document.querySelector("#date");
const resultEl = document.querySelector("#result")

buttonEl.addEventListener("click", calculateAge)

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue===""){
        resultEl.textContent = ("You have to select a date first!")
    }
    else{
        const age = getAge(birthdayValue);
        resultEl.textContent= `You are ${age} ${age>1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || (month === 0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;
    }

    return age;
}