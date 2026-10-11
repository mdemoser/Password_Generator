
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword()
})


copyIconEl.addEventListener("click", () => {
   if(inputEl.value){ 
    copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 2000);
}
});


alertContainerEl = document.querySelector(".alert-container")

function createPassword(){
    const chars = "0987654321qwertyuiopasdfghjklzxcvbnm!@#$%&*()_+-?|QWERTYUIOPASDFGHJKLZXCVBNM";
    const passwordLeght =  14
    let password = ""
    for (let index = 0; index < passwordLeght; index++){
        const randomNum = Math.floor(Math.random () * chars.length);
        password += chars.substring(randomNum, randomNum + 1)
        console.log(randomNum, password);
    }

    inputEl.value = password; 
    alertContainerEl.innerText = password + " copied!";

}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputEl.value)
}


