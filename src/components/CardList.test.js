import CardList from './CardList';
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

it("unit - card list, snapshot", () => {
    const tree = renderer.create(<CardList />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("unit - card list, with nickname props or with owned props", () => {
    act(() => {
        render(<CardList owned={7}/>, container)
    })
    expect(container).toHaveTextContent('7')

    act(() => {
        render(<CardList nickname={'pidgey'}/>, container)
    })
    expect(container).toHaveTextContent('pidgey')
})