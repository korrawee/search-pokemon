import { IResult } from './Result';
function handleLinkClick() {
  console.log('do handleLinkClick');
}
const base: IResult = {
  pokemon: {
    id: 'UG9rZW1vbjowMjU=',
    number: '025',
    name: 'Pikachu',
    weight: {
      minimum: '5.25kg',
      maximum: '6.75kg',
    },
    height: {
      minimum: '0.35m',
      maximum: '0.45m',
    },
    attacks: {
      fast: [
        {
          name: 'Quick Attack',
          type: 'Normal',
          damage: 10,
        },
        {
          name: 'Thunder Shock',
          type: 'Electric',
          damage: 5,
        },
      ],
      special: [
        {
          name: 'Discharge',
          type: 'Electric',
          damage: 35,
        },
        {
          name: 'Thunder',
          type: 'Electric',
          damage: 100,
        },
        {
          name: 'Thunderbolt',
          type: 'Electric',
          damage: 55,
        },
      ],
    },
    classification: 'Mouse Pokémon',
    types: ['Electric'],
    resistant: ['Electric', 'Flying', 'Steel'],
    weaknesses: ['Ground'],
    fleeRate: 0.1,
    maxCP: 777,
    maxHP: 887,
    evolutionRequirements: {
      amount: '50',
      name: 'Pikachu candies',
    },
    evolutions: [
      {
        id: 'UG9rZW1vbjowMjY=',
        name: 'Raichu',
        image: 'https://img.pokemondb.net/artwork/raichu.jpg',
      },
    ],
    image: 'https://img.pokemondb.net/artwork/pikachu.jpg',
  },
  handleLinkClick: handleLinkClick,
};

export const mockResultProps = {
  base,
};
