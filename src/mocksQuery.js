// query for testing
import { GET_POKEMON_DETAIL } from './operations/queries/getPokemon';
import { GET_POKEMON_LIST } from './operations/queries/getPokemonList';

export const mocksPokemonDetail = [
    {
        request: {
            query: GET_POKEMON_DETAIL,
            variables: {
                name: 'ditto',
            },
        },
        result: {
            data: {
                pokemon: {
                    id: 132,
                    name: "ditto",
                    abilities: [
                        {
                            ability: {
                                name: "limber"
                            }
                        },
                        {
                            ability: {
                                name: "imposter"
                            }
                        }
                    ],
                    moves: [
                        {
                            move: {
                                name: "transform"
                            }
                        }
                    ],
                    types: [
                        {
                            type: {
                                name: "normal"
                            }
                        }
                    ]
                }
            },
        },
    },
];

export const mocksPokemonList = [
    {
        request: {
            query: GET_POKEMON_LIST,
            variables: {
                limit: 2,
                offset: 0
            },
        },
        result: {
            data: {
                pokemons: {
                    results: [
                        {
                            name: "bulbasaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        },
                        {
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                        },
                        {
                            name: "venusaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                        }
                    ]
                }
            }
        },
    },
];

export const mocksApp = [
    {
        request: {
            query: GET_POKEMON_DETAIL,
            variables: {
                name: 'ditto',
            },
        },
        result: {
            data: {
                pokemon: {
                    id: 132,
                    name: "ditto",
                    abilities: [
                        {
                            ability: {
                                name: "limber"
                            }
                        },
                        {
                            ability: {
                                name: "imposter"
                            }
                        }
                    ],
                    moves: [
                        {
                            move: {
                                name: "transform"
                            }
                        }
                    ],
                    types: [
                        {
                            type: {
                                name: "normal"
                            }
                        }
                    ]
                }
            },
        },
    },
    {
        request: {
            query: GET_POKEMON_LIST,
            variables: {
                limit: 2,
                offset: 0
            },
        },
        result: {
            data: {
                pokemons: {
                    results: [
                        {
                            name: "bulbasaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        },
                        {
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                        },
                        {
                            name: "venusaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                        }
                    ]
                }
            }
        },
    },
]