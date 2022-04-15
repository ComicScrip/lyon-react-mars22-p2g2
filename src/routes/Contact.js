import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast('Merci ! Nous reviendrons vite vers vous :)', {
      theme: 'light',
      type: 'success',
      position: 'bottom-center',
    });

    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <h1>Formulaire de contact</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            className={styles.field}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            className={styles.field}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Envoyer
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
