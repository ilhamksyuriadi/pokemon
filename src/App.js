import './App.css';

import { useQuery, gql } from '@apollo/client';

const ALL_POKEMON = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        message
        status
      }
    }
`

function App() {
  const {loading, error, data} = useQuery(ALL_POKEMON,
    {
      variables: {
        name: "ditto"
      }
    }
  )

  if (loading) return <p>Loading...</p>
  if (error) return `Error! ${error}`
  return (
    <>
      <h2>{data.pokemon.name}</h2>
    </>
  );
}

export default App;
