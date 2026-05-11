function showAllert(message, type) {
  const alertElement = document.querySelector(".alert");
  alertElement.textContent = message;
  alertElement.classList.add("alert-active", type);
  alertElement.addEventListener(
    "animationend",
    () => {
      alertElement.classList.remove(
        "alert-active",
        "alert-success",
        "alert-error",
      );
    },
    { once: true },
  );
}

export { showAllert };
