import React from 'react';
import NanarFormulaire from '../components/NanarFormulaire';
import NanarResults from '../components/NanarResults';

export default function Profil() {
  return (
    <div>
      <div>
        <NanarFormulaire />
      </div>
      <div>
        <NanarResults />
      </div>
    </div>
  );
}
