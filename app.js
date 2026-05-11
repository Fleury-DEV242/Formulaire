import { saveToLocalStorage } from "./modules/save.js";
import { showAllert } from "./modules/alert.js";
import { validateForm } from "./modules/validationForm.js";


export const inputName = document.querySelector("#name");
export const inputFirstname = document.querySelector("#firstname");
export const inputEmail = document.querySelector("#email");
export const password = document.querySelector("#password");
const form = document.querySelector("form");


export const userList = [];

const createObjectUser = () => {
  const newUser = {
    nom: inputName.value.trim(),
    firstname: inputFirstname.value.trim(),
    email: inputEmail.value.trim(),
    password: password.value,
  };

  if (!validateForm()) {
    return;
  } else {
    userList.push(newUser);
    saveToLocalStorage();
    form.reset();
    showAllert("Votre compte à été créer avec succès", "alert-success")
  }
};

const handleForm = (event) => {
  event.preventDefault();
  createObjectUser();
  console.log(event);
};
form.addEventListener("submit", handleForm);
