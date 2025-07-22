import { hoursLoad } from "../../module/form/hours-load.js";

//seleciona o input da data
const selectedDate = document.getElementById("date");

export function scheduleDays() {
  //obtem o valor da data selecionada
  const date = selectedDate.value;
  hoursLoad({ date });
}
