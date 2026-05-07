const inputName = document.querySelector("#name");
const inputFirstname = document.querySelector("#firstname");
const inputEmail = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

const userList = [];

function validateForm() {
  if (inputName.value === "" && inputFirstname.value === "") {
    alert("veuillez remplir le(s) champ(s) vide pour créer un compte");
    return false;
  }
  if (!inputEmail.value.includes("@")) {
    alert("il manque un @ dans votre adresse mail");
    return false;
  }
  if (password.value === "" || password.value.length < 8) {
    alert("veuillez saisir un mot de passe valide d'au moins 8 caractères");
    return false;
  }
  return true;
}

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
    form.reset();
  }

  console.log(userList);
};

const handleForm = (event) => {
  event.preventDefault();
  createObjectUser();
  console.log(event);
};

form.addEventListener("submit", handleForm);
