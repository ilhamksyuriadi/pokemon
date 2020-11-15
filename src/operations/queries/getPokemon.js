import { gql } from '@apollo/client';

export const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
        id
        name
        abilities {
            ability {
                name
            }
        }
        moves {
            move {
                name
            }
        }
            types {
                type {
                    name
                }
            }
        }
    }
`