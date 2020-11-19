import SuccessForm from './SuccessForm';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

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

it("unit - success form, snapshot", () => {
    act(()=> {
        const pokemon = {
            name: 'Bulbasaur',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
        render(<SuccessForm pokemon={pokemon} />,container)
    })
    expect(container).toMatchSnapshot();
})

