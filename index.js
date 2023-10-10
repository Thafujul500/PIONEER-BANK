// Selecting section
let button = document.querySelector(".btn");
let log_in_area = document.querySelector(".log-in-area");
let transaction_area = document.querySelector(".transaction-area");

// past money

let depositMoney = document.getElementById("depositMoney");
let withdrowMoney = document.getElementById("withdrowMoney");
let balanceMoney = document.getElementById("balanceMoney");

//inputs

let depositInput = document.getElementById("depositInput");
let withdrowInput = document.getElementById("withdrowInput");

let mailInput = document.querySelector(".mailInput");
let passwordInput = document.querySelector(".passwordInput")

//buttons

let depositButton = document.getElementById("depositButton");
let withdrowButton = document.getElementById("withdrowButton");



//Login button event handeler

button.addEventListener("click",() => {
    // container.classList.add("add");

    if(mailInput.value == "thafujulislam500@gmail.com"  && passwordInput.value == "123456"){
        log_in_area.style.display = "none";
        transaction_area.style.display = "block";
    }
})

//Deposit and withdrow event handeler

depositButton.addEventListener("click",() => {

    let myPreviousNumber = Number(depositMoney.innerText);
    let myGivenNumber = Number(depositInput.value);
    let totalAmount = (myPreviousNumber + myGivenNumber);
    depositMoney.innerHTML = totalAmount;
    depositInput.value = " "

    let newBalanceMoney = Number(balanceMoney.innerText);
    balanceMoney.innerHTML = newBalanceMoney + myGivenNumber;

});

withdrowButton.addEventListener("click",() => {
    let myPreviousNumber = Number(withdrowMoney.innerText);
    let myGivenNumber = Number(withdrowInput.value);
    let newBalanceMoney = Number(balanceMoney.innerHTML);
    if(withdrowInput.value > newBalanceMoney){
        alert("Sorry you can't withdrow!")
    }
    let totalAmount = (myPreviousNumber + myGivenNumber);
    withdrowMoney.innerHTML = totalAmount;
    withdrowInput.value = " ";
    balanceMoney.innerHTML = newBalanceMoney - myGivenNumber;
    

})














