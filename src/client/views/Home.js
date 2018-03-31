import React from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';

const Dashboard = ({ redis }) => {
  return (
    <div>
      <h1>Welcome to RPER</h1>
      <p className="text-muted">ReactJS/ ParcalJS/ ExpressJS / Redis</p>
      <h3 className="redis-text">Message From Redis:</h3>
      <p>
        <small className="text-muted">
          With 2 seconds delay from the server
        </small>
      </p>
      <Highlight className="java">{JSON.stringify(redis, null, 2)}</Highlight>
    </div>
  );
};
export default connect(state => state)(Dashboard);
