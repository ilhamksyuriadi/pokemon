import SuccessForm from './SuccessForm';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from  'react-test-renderer';
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
    const pokemon = {
        id: 1,
        name: 'Bulbasaur',
    }
    const tree = renderer.create(<SuccessForm pokemon={pokemon} />).toJSON();
    expect(tree).toMatchSnapshot();
})

