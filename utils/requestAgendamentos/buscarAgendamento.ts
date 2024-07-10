import axiosConfig from '../config/axiosConfig';

interface Agendamento {
  id: string;
  nome: string;
  // Adicione outros campos conforme necessário
}

export async function buscarAgendamentosConsulta(idAderente: string, unidadeAtendimentoId: string): Promise<Agendamento[]> {
  try {
    const response = await axiosConfig.get(`/Agendamento/GetAgendamentosConsulta/${idAderente}/${unidadeAtendimentoId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}