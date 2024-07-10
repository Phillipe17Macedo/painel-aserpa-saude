import axiosConfig from '../../axiosConfig';

interface Dependente {
  id: string;
  nome: string;
  // Adicione outros campos conforme necessário
}

export async function buscarDependentes(idAderente: number): Promise<Dependente[]> {
  try {
    const response = await axiosConfig.get(`/Dependentes/GetDependentes/${idAderente}`);
    console.log("Dependentes:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dependentes:", error);
    throw error;
  }
}

export {};