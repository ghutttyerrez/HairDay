import { apiConfig } from "./api-config";

export async function ScheduleCancel({ id }) {
  try {
    //fazendo a requisição para cancelar um agendamento
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    //tratando o erro caso a requisição falhe
    console.log(error);
    alert(
      "Não foi possível cancelar o agendamento. Por favor, tente novamente mais tarde."
    );
  }
}
