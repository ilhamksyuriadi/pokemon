import App from './App';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';
import { mocksApp } from './mocksQuery';

const mocks = mocksApp;
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

it("full app, snapshot", () => {
    act(() => {
        render(
            <MockedProvider mock={mocks}>
                <App />
            </MockedProvider>
        ,container)
    })
    expect(container).toMatchSnapshot();
})