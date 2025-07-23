import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  //limpa os horários
  hours.innerHTML = "";

  //obtem a lista de horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) => {
    return dayjs(schedule.when).format("HH:mm");
  });

  //verifica todos os horarios
  const opening = openingHours.map((hour) => {
    //recupera o horário
    const [schedulerHour] = hour.split(":");

    //adiciona a hora na data e verifica se esta no passado
    const isHourPast = dayjs(date).add(schedulerHour, "hour").isBefore(dayjs());

    //verifica se o horário está indisponível
    const isHourUnavailable = unavailableHours.includes(hour);
    const available = !isHourUnavailable && !isHourPast;

    console.log(
      `Hour: ${hour}, isHourPast: ${isHourPast}, isHourUnavailable: ${isHourUnavailable}, available: ${available}`
    );

    //define se o horário está disponível
    return {
      hour,
      available,
    };
  });

  //renderiza o horário
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    //deixa a classe disabled se o horário não estiver disponível
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    //adiciona o header conforme o horário do dia
    if (hour === "09:00") {
      hourHeaderadd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderadd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderadd("Noite");
    }

    hours.append(li);
  });

  //adiciona o evento de click nos horários disponíveis
  hoursClick();
}

//separando os horários por período
function hourHeaderadd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
