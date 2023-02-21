import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/users')
      .then(res => {
        setData(res.data.users);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data && data.map(post => (
        <div key={post.id}>
          
          <p> name={post.firstName} email={post.email}       password={post.password}        </p>
        </div>
      ))}
    </div>
  );
};

export default PersonList;