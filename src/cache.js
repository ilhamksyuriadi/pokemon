import { makeVar } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';

export const ownedVar = makeVar(0);

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                owned: {
                    read() {
                        return ownedVar();
                    }
                }
            }
        }
    }
})

// export default cache