import dayjs from "dayjs";

import { ScheduleNew } from "../../services/schedule-new.js";
import { scheduleDays } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual no campo de data
selectedDate.value = inputToday;

//configura o min para a data atual
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Por favor, preencha o nome do cliente.");
    }

    //recuperando o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Por favor, selecione um horário.");
    }
    //recuperando a hora selecionada
    const [hour] = hourSelected.innerText.split(":");

    //inserindo a hora na data selecionada
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //cria um ID único para o agendamento
    const id = new Date().getTime();

    //faz o agendamento
    await ScheduleNew({
      id,
      name,
      when,
    });

    //recarrega os agendamentos
    await scheduleDays();

    //limpa o input de nome do cliente
    clientName.value = "";

    //remove a seleção de horário
    document.querySelectorAll(".hour-selected").forEach((hour) => {
      hour.classList.remove("hour-selected");
    });
  } catch (error) {
    alert("Não foi possível realizar o Agendamento"), console.log(error);
  }
};
