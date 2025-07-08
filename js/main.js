const btnSwitch = document.querySelector("#switch");

// Al cargar la página, verifica si estaba activado el modo oscuro
if (localStorage.getItem("modo-oscuro") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
}

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Guarda el estado actual en localStorage
  const modoOscuroActivo = document.body.classList.contains("dark");
  localStorage.setItem("modo-oscuro", modoOscuroActivo);
});
