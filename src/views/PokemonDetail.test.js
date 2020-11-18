import PokemonDetail from './PokemonDetail';
import { unmountComponentAtNode } from 'react-dom';
import renderer from  'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { GET_POKEMON_DETAIL } from '../operations/queries/getPokemon';
import { BrowserRouter as Router } from "react-router-dom";

const mocks = [
    {
        request: {
            query: GET_POKEMON_DETAIL,
            variables: {
                name: 'ditto',
            },
        },
        result: {
            data: {
                pokemon: {
                    id: 132,
                    name: "ditto",
                    abilities: [
                        {
                            ability: {
                                name: "limber"
                            }
                        },
                        {
                            ability: {
                                name: "imposter"
                            }
                        }
                    ],
                    moves: [
                        {
                            move: {
                                name: "transform"
                            }
                        }
                    ],
                    types: [
                        {
                            type: {
                                name: "normal"
                            }
                        }
                    ]
                }
            },
        },
    },
];

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("integration - pokemon detail, snapshot", () => {
    const tree = renderer.create(
        <MockedProvider mock={mocks}>
            <Router>
                <PokemonDetail />
            </Router>
        </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})