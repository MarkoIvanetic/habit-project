import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';

const HabitList = ({ loading, habits }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {habits?.map(({ _id, title }) => {
        return <div key={_id}>{title}</div>;
      })}
    </ul>
  );
};

const IndexPage = (props) => {
  const [status, setStatus] = useState('loading...');
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    if (status !== 'loading...') return;
    axios('/api/getHabits').then((result) => {
      if (result.status !== 200) {
        console.error('Error loading habits');
        console.error(result);
        return;
      }
      setHabits(result.data.habits);
      setStatus('loaded');
    });
  }, [status]);

  return (
    <Layout>
      <h1>Habits to load here...</h1>
      <HabitList loading={habits === null} habits={habits} />
    </Layout>
  );
};

export default IndexPage;
