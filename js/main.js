const form = document.querySelector(".form")
const Name = document.querySelector(".name")
const NameWarning = document.querySelectorAll(".name-warning")
const NameCheck = document.querySelector(".checkIconName")

const Lastname = document.querySelector(".lastname")
const LastnameWarning = document.querySelectorAll(".last-name-warning")
const LastCheck = document.querySelector(".checkIconLast")

const Email = document.querySelector(".email")
const EmailWarning = document.querySelectorAll(".email-warning")
const EmailCheck = document.querySelector(".checkIconEmail")

const Password = document.querySelector(".password")
const PassWarning = document.querySelectorAll(".password-warning")
const PassCheck = document.querySelector(".checkIconPass")

const Input = document.querySelectorAll(".input")

let Tst = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

form.addEventListener('submit', function (el) {

    el.preventDefault()
    if (Name.value === '' || Name.value == null) {
        NameWarning.forEach(function (e) {
            e.classList.remove("none")
            Name.style.outline= "2px solid hsl(0, 100%, 74%)"
            
        })

    } else {
        NameCheck.classList.remove("none")
        Name.style.outline= "3px solid hsl(154, 59%, 51%)"
        NameWarning.forEach(function (e) {
            e.classList.add("none")
        })

    }

    if (Lastname.value === '' || Lastname.value == null) {
        LastnameWarning.forEach(function (e) {
            e.classList.remove("none")
            Lastname.style.outline= "2px solid hsl(0, 100%, 74%)"
            
        })
    } else {
        LastCheck.classList.remove("none")
        Lastname.style.outline= "3px solid hsl(154, 59%, 51%)"
        LastnameWarning.forEach(function (e) {
            e.classList.add("none")
        })
    }

    if (Email.value === '' || Email.value == null) {
        EmailWarning.forEach(function (e) {
            e.classList.remove("none")
            Email.style.outline= "2px solid hsl(0, 100%, 74%)"
            
        })
    } else if (Tst.test(Email.value)) {
        EmailCheck.classList.remove("none")
        Email.style.outline= "3px solid hsl(154, 59%, 51%)"
        EmailWarning.forEach(function (e) {
            e.classList.add("none")

        })

    } 

    if (Password.value === '' || Password.value == null) {
        PassWarning.forEach(function (e) {
            e.classList.remove("none")
            Password.style.outline= "2px solid hsl(0, 100%, 74%)"
            
        })
    } else {
        PassCheck.classList.remove("none")
        Password.style.outline= "3px solid hsl(154, 59%, 51%)"
        PassWarning.forEach(function (e) {
            e.classList.add("none")
        })
    }



});