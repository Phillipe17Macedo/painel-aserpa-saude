import React, { useEffect, useState } from 'react';
import { buscarAgendamentosConsulta } from '../../utils/requestAgendamentos/buscarAgendamento';

interface AgendamentoConsulta {
  idAgenda: number;
  dataAgenda: string;
  horaAgenda: string;
  status: string;
  medico: string;
  tipoPrestacao: string;
  descExameProce: string | null;
}

const ConsultasAgendadas: React.FC = () => {
  const [agendamentos, setAgendamentos] = useState<AgendamentoConsulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await buscarAgendamentosConsulta();
        if (response.success) {
          setAgendamentos(response.data);
        } else {
          setError('Falha ao buscar dados');
        }
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
          <li key={agendamento.idAgenda}>
            <p><strong>Data:</strong> {agendamento.dataAgenda}</p>
            <p><strong>Hora:</strong> {agendamento.horaAgenda}</p>
            <p><strong>Status:</strong> {agendamento.status}</p>
            <p><strong>Médico:</strong> {agendamento.medico}</p>
            <p><strong>Tipo de Prestação:</strong> {agendamento.tipoPrestacao}</p>
            <p><strong>Descrição do Exame/Procedimento:</strong> {agendamento.descExameProce || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultasAgendadas;