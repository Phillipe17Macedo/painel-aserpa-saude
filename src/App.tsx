import './App.css';
import NotificationForm from './Notification/NotificationForm';
import ConsultasAgendadas from '../src/components/Agendamento/ConsultasAgendadas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Painel Aserpa Saúde</h1>
      </header>
      <main>
        <NotificationForm />
        <ConsultasAgendadas />
      </main>
    </div>
  );
}

export default App;