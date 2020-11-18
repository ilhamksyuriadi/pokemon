import CardList from './CardList';
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

it("unit - card list, with nickname props or with owned props", () => {
    act(() => {
        render(<CardList owned={7}/>, container)
    })
    expect(container).toHaveTextContent('7')

    act(() => {
        render(<CardList owned={7}/>, container)
    })
    expect(container).toMatchSnapshot()

    act(() => {
        render(<CardList nickname={'pidgey'}/>, container)
    })
    expect(container).toHaveTextContent('pidgey')

    act(() => {
        render(<CardList nickname={'pidgey'}/>, container)
    })
    expect(container).toMatchSnapshot()
})