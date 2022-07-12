"use strict";
let elForm = document.querySelector(".login__form");
let elUserName = document.querySelector(".user__name");
let elUserPasword = document.querySelector(".user__password");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let userName = elUserName.value;
  let userPasword = elUserPasword.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userName,
      password: userPasword,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
        if (data.token) {
            window.localStorage.setItem("token", data.token);
            window.location.replace("index.html")
        } else {
          alert("Login password xato kiritildi")
        }
    });
});