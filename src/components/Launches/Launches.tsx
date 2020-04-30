import React from 'react';
import { Launch } from '../../generated/graphql';
import { QueryResult } from 'react-apollo';

export type LaunchesProp = {
  launches: QueryResult;
  clickHandler: Function;
  id: number;
};

const Launches = (props: LaunchesProp) => {
  const {
    launches: { data, error, loading },
    clickHandler,
    id,
  }: LaunchesProp = props;

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
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
      </ul>
    </div>
  );
};

export default Launches;
