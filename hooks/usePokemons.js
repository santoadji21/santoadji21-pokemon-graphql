import { gql, useQuery } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        dreamworld
      }
    }
  }
`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

export const usePokemons = () => {
  const { error, data, loading } = useQuery(GET_POKEMONS);

  return {
    error,
    data,
    loading,
  };
};
