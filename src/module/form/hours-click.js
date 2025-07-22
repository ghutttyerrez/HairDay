export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      //remove a classe hour-selected de todas as lis nao selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      //adiciona a classe hour-selected na li selecionada
      selected.target.classList.add("hour-selected");
    });
  });
}
