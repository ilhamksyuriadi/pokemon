import Error from './Error';
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

it("error page, snapshot", () => {
    act(() => {
        render(<Error />, container)
    })
    expect(container).toMatchSnapshot();
})
