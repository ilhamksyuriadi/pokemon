import PokemonDetail from './PokemonDetail';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
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

it("pokemon detail, snapshot", () => {
    act(() => {
        render(        
            <MockedProvider mock={mocks}>
                <Router>
                    <PokemonDetail />
                </Router>
            </MockedProvider>
        ,container)
    })
    expect(container).toMatchSnapshot();
})