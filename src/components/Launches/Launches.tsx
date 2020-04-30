import React from 'react';
import { useLaunchesQuery, Launch } from '../../generated/graphql';
import { QueryResult } from 'react-apollo';

const Launches = () => {
  const { data, error, loading }: QueryResult = useLaunchesQuery();

  if (loading) {
    return <div className='alert alert-info'>...Loading</div>;
  }

  if (error || !data) {
    return <div className='alert alert-danger'>{JSON.stringify(error)}</div>;
  }

  const { launches } = data;

  return (
    <div className='card'>
      <h4 className='card-header'>Missions</h4>
      <ul className='list-group list-group-flush'>
        {launches.map(
          ({ flight_number, mission_name, launch_year }: Launch) => (
            <li
              key={flight_number as string | number | undefined}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              <span>{mission_name}</span>
              <span className='badge badge-primary badge-pill'>
                {launch_year}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Launches;
