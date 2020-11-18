import Error from './Error';
import { unmountComponentAtNode } from 'react-dom';
import renderer from  'react-test-renderer'


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

it("unit - error page, snapshot", () => {
    const tree = renderer.create(<Error ></Error>).toJSON();
    expect(tree).toMatchSnapshot();
})
