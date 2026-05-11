import { userList } from "../app.js";
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("userArray");
  console.log(JSON.parse(data));
};

const saveToLocalStorage = () => {
  localStorage.setItem("userArray", JSON.stringify(userList));
};

export { saveToLocalStorage, loadFromLocalStorage };
