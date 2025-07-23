import { fetchScheduleByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../../module/form/hours-load.js";

//seleciona o input da data
const selectedDate = document.getElementById("date");

export async function scheduleDays() {
  //obtem o valor da data selecionada
  const date = selectedDate.value;

  //busca na API dos agendamentos
  const dailySchedules = await fetchScheduleByDay({ date });

  //exibe os agendamentos
  schedulesShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}
