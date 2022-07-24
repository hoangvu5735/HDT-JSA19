const formElement = document.getElementById('info')
console.log("formElement: ", formElement);


formElement.addEventListener("submit", function (e) {
    console.log("Submit clicked")
    e.preventDefault()
    const data = {
        username: formElement.username.value,
        psw: formElement.psw.value,


    }
    console.log(data)
    formElement.username.value = ""
    formElement.psw.value = ""
})