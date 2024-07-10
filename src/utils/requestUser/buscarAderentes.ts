import axiosConfig from '../../axiosConfig';

interface Aderente {
  id: string;
  nome: string;
  // Adicione outros campos conforme necessário
}

export async function buscarAderente(cpf: string, titular: boolean): Promise<Aderente> {
  try {
    const response = await axiosConfig.get(`/Aderente/GetAderente/${cpf}/${titular}`);
    console.log("Resposta da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aderente:", error);
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}

export {};