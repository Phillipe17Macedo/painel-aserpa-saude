import React, { useState } from 'react';
import axios from 'axios';
import './NotificationFormStyle.css'

const NotificationForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const sendNotification = async () => {
    const notificationData = {
      app_id: "590d625b-5bc5-4ef3-a132-d87326c47469",
      headings: { en: title },
      contents: { en: message },
      url: url,
      included_segments: ["All"],
    };

    try {
      const response = await axios.post('https://onesignal.com/api/v1/notifications', notificationData, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Basic NzZlMjM0ODctYjcwNS00N2E0LTg1MmItYTMwZTIwMjM1ZmYy`
        }
      });

      if (response.status === 200) {
        alert('Notification sent successfully!');
        setError(null); // Limpa o erro anterior, se houver
      } else {
        alert('Failed to send notification.');
      }
    } catch (error: any) {
      console.error('Error sending notification:', error);
      setError(error.response?.data?.errors || 'An error occurred while sending the notification.');
    }
  };

  return (
    <div className="notification-form">
      <h2>Enviar Notificação</h2>
      <form onSubmit={(e) => { e.preventDefault(); sendNotification(); }}>
        <div>
          <label htmlFor="title" className='texto-titulo-form'>Título da Notificação:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Menssagem da Notificação:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="url">URL (opcional):</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Notificação</button>
      </form>
      {error && <div className="error-message">Error: {error}</div>}
    </div>
  );
};

export default NotificationForm;