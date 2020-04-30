import React from 'react';
import { useLaunchQuery } from '../../generated/graphql';
import { QueryResult } from 'react-apollo';

const Launch = ({ id }: { id: number }) => {
  const { data, error, loading }: QueryResult = useLaunchQuery({
    variables: { id: String(id) },
  });

  if (loading) {
    return <div className='alert alert-info'>...Loading</div>;
  }

  if (error) {
    return <div className='alert alert-danger'>{JSON.stringify(error)}</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  const {
    launch: {
      flight_number,
      mission_name,
      launch_success,
      rocket: { rocket_name, rocket_type },
      details,
      links: { flickr_images },
    },
  } = data;
  return (
    <div className='card'>
      <div className='card-header'>
        {mission_name}{' '}
        <span className='badge badge-secondary badge-pill'>
          {launch_success}
        </span>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          {rocket_name}{' '}
          <span className='badge badge-secondary badge-pill'>
            {rocket_type}
          </span>
        </h5>
        <p className='card-text'>{details}</p>
      </div>
      <ul className='list-group list-group-flush'>
        {flickr_images.map((image: string, i: number) => (
          <li key={i} className='list-group-item'>
            <img className='img-fluid' src={image} alt={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Launch;
