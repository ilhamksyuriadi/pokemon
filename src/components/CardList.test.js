import CardList from './CardList';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
// import { renderer, fireEvent } from "@testing-library/react";

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

it ('card list, with owned props', () => {
    act(() => {
        const pokemon = {
            name: 'Bulbasaur',
            owned: 3,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
        render(<CardList name={pokemon.name} owned={pokemon.owned} image={pokemon.image} />, container)
    })
    expect(container).toMatchSnapshot()
})

it ('card list, with nickname props', () => {
    act(() => {
        const pokemon = {
            name: 'Bulbasaur',
            nickname: 'bulbaaaaa',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
        render(<CardList name={pokemon.name} nickname={pokemon.nickname} image={pokemon.image} />, container)
    })
    expect(container).toMatchSnapshot()

    act(() => {
        const pokemon = {
            name: 'Bulbasaur',
            nickname: 'bulbaaaaa',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
        render(<CardList name={pokemon.name} nickname={pokemon.nickname} image={pokemon.image} />, container)
    })
    expect(container.querySelector("button").textContent).toBe("Release")
})

// it ('unit - card list, button clicked', () => {
//     act(() => {
//         const pokemon = {
//             name: 'Bulbasaur',
//             nickname: 'bulbaaaaa',
//             image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
//         }
//         render(<CardList name={pokemon.name} nickname={pokemon.nickname} image={pokemon.image} />, container)
//     })
//     expect(container).toMatchSnapshot()
// })