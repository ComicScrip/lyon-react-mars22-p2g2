import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';
import { Avatar } from '@mui/material';
import Julie from '../img/Julie.png';
import Quentin from '../img/Quentin.png';
import Rayanne from '../img/Rayanne.png';
import Adnan from '../img/Adnan.png';
import Mylène from '../img/Mylène.png';

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
        <p>
          L'équipe est composé de cinq développeurs en herbe :
          Julie,Quentin,Rayanne,Adnan et Mylène
        </p>
        <div className={styles.Avatar} style={{ margin: 30 }}>
          <Avatar alt="Julie" src={Julie} />
          <Avatar alt="Quentin" src={Quentin} />
          <Avatar alt="Rayanne" src={Rayanne} />
          <Avatar alt="Adnan" src={Adnan} />
          <Avatar alt="Mylène" src={Mylène} />
        </div>
      </div>
      <div className={styles.lignedesktop}>
        <hr className="ligne" />
      </div>
      <div className={styles.contacte}>
        <p>Contacte-nous</p>
      </div>
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="email">
            Nom
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
            Email
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
          <div htmlFor="message">
            Message
            <textarea
              rows="8"
              cols="90"
              id="message"
              name="message"
              className={styles.field}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre texte ici..."
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Envoyer
          </button>
        </form>

        <ToastContainer />
      </div>

      <div className={styles.lignemobile}>
        <hr className="ligne" />
      </div>
    </div>
  );
}
