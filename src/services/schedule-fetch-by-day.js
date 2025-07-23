import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function fetchScheduleByDay({ date }) {
  try {
    //faz a requisicao
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    //converte a resposta em JSON
    const data = await response.json();

    //filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => {
      const isSameDay = dayjs(date).isSame(schedule.when, "day");
      console.log(`Comparing ${date} with ${schedule.when}: ${isSameDay}`);
      return isSameDay;
    });

    console.log(dailySchedules);
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos para o dia selecionado.");
  }
}
