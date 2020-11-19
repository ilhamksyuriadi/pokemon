import PokemonList from './PokemonList';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';
import { mocksPokemonList } from '../mocksQuery';
import { BrowserRouter as Router } from "react-router-dom";

const mocks = mocksPokemonList;
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

it("pokemon list, snapshot", () => {
    act(() => {
        render(
            <MockedProvider mock={mocks}>
                <Router>
                    <PokemonList />
                </Router>
            </MockedProvider>
        ,container)
    })
    expect(container).toMatchSnapshot();
})