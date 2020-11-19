import Header from './Header';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
// import renderer from  'react-test-renderer'
import { BrowserRouter as Router } from "react-router-dom";

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


it("unit - header page, snapshot", () => {
    act(() => {
        render(
            <Router>
                <Header />
            </Router>
        , container)
    })
    expect(container).toMatchSnapshot();
})
