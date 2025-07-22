import { scheduleDays } from "../schedules/load.js";

//seleciona o input de data
const selectedDate = document.getElementById("date");

//recarrega os horários ao selecionar uma nova data

selectedDate.onchange = () => scheduleDays();
