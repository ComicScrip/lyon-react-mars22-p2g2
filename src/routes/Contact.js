import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast('Merci ! Nous reviendrons vite vers vous :)', {
      theme: 'light',
      type: 'success',
      position: 'bottom-center',
    });
    setNom('');
    setEmail('');
    setMessage('');
    console.log({ nom, email, message });
  };

  return (
    <div>
      <h1>Formulaire de contact</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">
            Nom:
            <input
              type="nom"
              id="nom"
              className={styles.field}
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            Email:
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
            Message:
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
      <div className={styles.ligne}>
        <hr className="ligne" />
      </div>
      <div className={styles.apropos}>
        <p>A propos de Nanar production </p>
      </div>
      <div className={styles.detail}>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at ultrices turpis, non hendrerit leo. Vivamus auctor tempus nulla,
          nec elementum augue tincidunt vel. Nam et pellentesque lectus, vel
          fermentum augue. Maecenas pretium aliquet ipsum, ac fermentum nibh
          sagittis nec. Donec euismod dictum turpis sed accumsan.
        </h2>
      </div>
    </div>
  );
}
