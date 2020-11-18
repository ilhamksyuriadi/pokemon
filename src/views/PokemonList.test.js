import PokemonList from './PokemonList';
import { unmountComponentAtNode } from 'react-dom';
import renderer from  'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { GET_POKEMON_LIST } from '../operations/queries/getPokemonList';
import { BrowserRouter as Router } from "react-router-dom";

const mocks = [
    {
        request: {
            query: GET_POKEMON_LIST,
            variables: {
                limit: 2,
                offset: 0
            },
        },
        result: {
            data: {
                pokemons: {
                    results: [
                        {
                            name: "bulbasaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        },
                        {
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                        },
                        {
                            name: "venusaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                        }
                    ]
                }
            }
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

it("integration - pokemon list, snapshot", () => {
    const tree = renderer.create(
        <MockedProvider mock={mocks}>
            <Router>
                <PokemonList />
            </Router>
        </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})