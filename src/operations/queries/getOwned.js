import { gql } from '@apollo/client';

export const GET_OWNED = gql`
    query OwnedNumber{
        poke {
            owned @client
        }
    }
`