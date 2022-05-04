import './nanarResult.css';
import DisplayMeetUsers from './DisplayMeetUsers';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Results() {
  const [nanarAPI, setNanarAPI] = useState([]);

  useEffect(() => {
    axios
      .get('/')
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
        <div>
          {nanarAPI.map((nanarUser) => (
            <DisplayMeetUsers nanarUser={nanarUser} key={nanarUser.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
