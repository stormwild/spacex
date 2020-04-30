import gql from 'graphql-tag';

export const LAUNCHES = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;