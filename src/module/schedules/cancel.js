import { scheduleDays } from "./load.js";
import { ScheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

//gerar o evento de click para cada periodo(manha, tarde e noite)
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    //verifica se o elemento clicado é um agendamento
    if (event.target.classList.contains("cancel-icon")) {
      //obtem a Li pai do elemento clicado
      const item = event.target.closest("li");
      //obtem o id do agendamento
      const id = item.getAttribute("data-id");

      //confirma que o id foi selecionado
      if (id) {
        //confirmação de cancelamento
        const isConfirm = confirm(
          "Você tem certeza que deseja cancelar este agendamento?"
        );

        //se o usuário confirmar, chama a função de cancelamento
        //e recarrega os agendamentos
        if (isConfirm) {
          await ScheduleCancel({ id });
          scheduleDays();
        }
      }
    }
  });
});
