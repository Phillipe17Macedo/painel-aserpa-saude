import React, { useEffect, useState } from 'react';
import { buscarAgendamentosConsulta } from '../../utils/requestAgendamentos/buscarAgendamento';

interface AgendamentoConsulta {
  id: string;
  nome: string;
  // Adicione outros campos conforme necessário
}

const ConsultasAgendadas: React.FC = () => {
  const [agendamentos, setAgendamentos] = useState<AgendamentoConsulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const idAderente = "4048";
  const unidadeAtendimentoId = "2";

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const data = await buscarAgendamentosConsulta(idAderente, unidadeAtendimentoId);
        setAgendamentos(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAgendamentos();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <h2>Consultas Agendadas</h2>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>{agendamento.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultasAgendadas;