import Loading from './Loading';
import { render, screen, cleanup, unmountComponentAtNode } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from  'react-test-renderer'

// let container = null;
// beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
// })

// afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null
// });

afterEach(cleanup)

it("loading page render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Loading />, div)
});

it("loading message passed correctly", () => {
    const {getByTestId} = render(<Loading msg="loading" /> )
    expect(getByTestId('loading')).toHaveTextContent("loading")
});

it("matches snapshot", () => {
    const tree = renderer.create(<Loading msg="loading"></Loading>).toJSON();
    expect(tree).toMatchSnapshot();
})
