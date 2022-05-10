import './nanarResult.css';
import DisplayAvailibilities from './DisplayAvailibilities';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Results() {
  const [nanarAPI, setNanarAPI] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cors-proxy.comicscrip.duckdns.org/https://lyon-react-mars22-p2g2-api.comicscrip.duckdns.org/availabilities'
      )
      .then((res) => res.data)
      .then((data) => {
        setNanarAPI(data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="mainContainerNanar">
          {nanarAPI.map((nanarUser) => (
            <DisplayAvailibilities nanarUser={nanarUser} key={nanarUser.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
