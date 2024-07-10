import axios from 'axios';
import axiosConfig from '../../axiosConfig';

interface Agendamento {
  idAgenda: number;
  dataAgenda: string;
  horaAgenda: string;
  status: string;
  medico: string;
  tipoPrestacao: string;
  descExameProce: string | null;
}

interface AgendamentoResponse {
  success: boolean;
  data: Agendamento[];
}

export async function buscarAgendamentosConsulta(): Promise<AgendamentoResponse> {
  const idAderente = "4048";
  const unidadeAtendimentoId = "2";
  
  try {
    const response = await axiosConfig.get(`/Agendamento/GetAgendamentosConsulta/${idAderente}/${unidadeAtendimentoId}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Erro ao buscar agendamentos:", error.response?.data || error.message);
    } else {
      console.error("Erro inesperado:", error);
    }
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}

export {};