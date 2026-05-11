import { showAllert } from "./alert.js";
import { inputName } from "../app.js";
import { inputEmail } from "../app.js";
import { password } from "../app.js";
import { inputFirstname } from "../app.js";

function validateForm() {
  if (inputName.value === "" && inputFirstname.value === "") {
    showAllert(
      "veuillez remplir le(s) champ(s) vide pour créer un compte",
      "alert-error",
    );
    return false;
  }
  if (!inputEmail.value.includes("@")) {
    showAllert("il manque un @ dans votre adresse mail", "alert-error");

    return false;
  }
  if (password.value === "" || password.value.length < 8) {
    showAllert(
      "veuillez saisir un mot de passe valide d'au moins 8 caractères",
      "alert-error",
    );

    return false;
  }
  return true;
}

export { validateForm };
