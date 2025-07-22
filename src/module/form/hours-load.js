import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  //limpa os horários
  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    //recupera o horário
    const [schedulerHour] = hour.split(":");

    //adiciona a hora na data e verifica se esta no passado
    const isHourPast = dayjs(date).add(schedulerHour, "hour").isAfter(dayjs());

    //define se o horário está disponível
    return {
      hour,
      available: isHourPast,
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
