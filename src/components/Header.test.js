import Header from './Header';
import { unmountComponentAtNode } from 'react-dom';
import renderer from  'react-test-renderer'
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


it("unit - header, snapshot", () => {
    const tree = renderer.create(
        <Router>
            <Header />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
