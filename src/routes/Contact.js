import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9ckxiwr',
        'template_73bygp6',
        form.current,
        '-P9_tX4W1pcnOXEX_'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setNom('');
    setEmail('');
    setMessage('');
    toast('Merci ! Nous reviendrons vite vers vous :)', {
      theme: 'light',
      type: 'success',
      position: 'bottom-center',
    });
  };

  return (
    <div className={styles.background}>
      <div className={styles.apropos}>
        <p>A propos de Nanar production </p>
      </div>
      <div className={styles.detail}>
        <h2>
          L'équipe est composé de cinq développeurs en herbe :
          Julie,Quentin,Rayanne,Adnan et Mylène
        </h2>
      </div>
      <h1>Contact-nous</h1>
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="email">
            Nom:
            <input
              type="nom"
              id="nom"
              name="nom"
              className={styles.field}
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="ex: Adnan Mahamat"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className={styles.field}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: adnanmht@gmail.com"
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              className={styles.field}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre texte ici..."
              maxLength="400"
              style={{ resize: 'none' }}
            />
          </label>
          <button type="submit" className={styles.submitBtn}>
            Envoyer
          </button>
        </form>

        <ToastContainer />
      </div>
      <div className={styles.ligne}>
        <hr className="ligne" />
      </div>
    </div>
  );
}
