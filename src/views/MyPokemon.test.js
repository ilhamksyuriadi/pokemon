import MyPokemon from './MyPokemon';
import { unmountComponentAtNode } from 'react-dom';
import renderer from  'react-test-renderer';

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

it("integration - my pokemon, snapshot", () => {
    const tree = renderer.create(<MyPokemon />).toJSON();
    expect(tree).toMatchSnapshot();
})