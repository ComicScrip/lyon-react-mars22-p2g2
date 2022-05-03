import { useState } from 'react';

function NanarFormulaire() {
  const [name, setName] = useState('');
  const [date, setDate] = useState();

  const handleSubmit = (event) => {
    console.log(`name: ${name}`);
    event.preventDefault();
  };

  return (
    <>
      <h1>Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Localisation">
          Localisation
          <select>
            <option value="Lyon 5">Lyon 5éme</option>
            <option value="lyon 6">Lyon 6éme</option>
            <option value="Lyon 7">Lyon 7éme</option>
            <option value="Lyon 8">Lyon 8éme</option>
          </select>
        </label>
        <label htmlFor="Date">
          Date
          <input
            type="Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>

        <button type="button">Soumettre</button>
      </form>
    </>
  );
}

export default NanarFormulaire;
