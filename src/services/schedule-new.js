import { apiConfig } from "./api-config.js";

export async function ScheduleNew({ id, name, when }) {
  try {
    //fazendo a requisição para criar um novo agendamento
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
  } catch (error) {
    //tratando o erro caso a requisição falhe
    console.log(error);
    alert(
      "Não foi possível realizar o agendamento. Por favor, tente novamente mais tarde."
    );
  }
  alert("Agendamento realizado com sucesso!");
}
