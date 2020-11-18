import Empty from './Empty';
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

it("unit - empty page, snapshot", () => {
    const tree = renderer.create(<Empty ></Empty>).toJSON();
    expect(tree).toMatchSnapshot();
})
