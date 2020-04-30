import React from 'react';
import { Launch, useLaunchesQuery } from '../../generated/graphql';
import { QueryResult } from 'react-apollo';

export type LaunchesProp = {
  clickHandler: Function;
  id: number;
};

const Launches = ({ clickHandler, id }: LaunchesProp) => {
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
      <div>
        <pre>
          <code>{JSON.stringify(launches)}</code>
        </pre>
      </div>
      <div>
        {launches.map(
          ({
            flight_number,
            mission_name,
          }: {
            flight_number: number;
            mission_name: string;
          }) => (
            <h3
              onClick={(e) => {
                e.preventDefault();
                clickHandler(flight_number);
              }}
            >
              {mission_name} {flight_number}
            </h3>
          )
        )}
      </div>
      <ul className='list-group list-group-flush'>
        {launches.map(
          ({ flight_number, mission_name, launch_year }: Launch) => (
            <a
              href='#'
              key={flight_number as string | number | undefined}
              className={`list-group-item list-group-item-action ${
                id === flight_number ? 'active' : ''
              } d-flex justify-content-between align-items-center`}
              onClick={(e) => {
                e.preventDefault();
                clickHandler(flight_number);
              }}
            >
              <span>{mission_name}</span>
              <span className='badge badge-primary badge-pill'>
                {launch_year}
              </span>
            </a>
          )
        )}
        }
      </ul>
    </div>
  );
};

export default Launches;
