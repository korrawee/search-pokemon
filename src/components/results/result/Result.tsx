import styles from './Result.module.css';
import Image from 'next/image';
import Section from '../section/Section';
import TypeBadge from '../type-badge/TypeBadge';

interface Attack {
  name: string;
  type: string;
  damage: number;
}
export interface Pokemon {
  id: string;
  name?: string;
  number?: string;
  weight?: {
    minimum: string;
    maximum: string;
  };
  height?: {
    minimum: string;
    maximum: string;
  };
  classification?: string;
  types?: string[];
  resistant?: string[];
  weaknesses?: [string];
  fleeRate?: number;
  maxCP?: number;
  maxHP?: number;
  attacks?: {
    fast?: Attack[];
    special?: Attack[];
  };
  evolutionRequirements?: {
    amount: string;
    name: string;
  };
  evolutions?: Pokemon[];
  image: string;
}

// Result interface
export interface IResult {
  handleLinkClick: (value: string) => void;
  pokemon: Pokemon | boolean;
}

// Render type badges
const renderTypeBadge = (types: string[]) => (
  <>
    {types.map((type, index) => {
      return (
        <span key={index}>
          <TypeBadge type={type} />
        </span>
      );
    })}
  </>
);

// Render each attack skill
const renderAttack = (atks: Attack[]) => (
  <>
    {atks?.map((atk, index) => (
      <div
        key={index}
        className={styles.data}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {atk.name}
        <span>
          {' '}
          <strong>{atk.damage}</strong>
          <span> dmg</span>
        </span>
        {/* <span> {atk.type}</span> */}
        <TypeBadge type={atk.type} />
      </div>
    ))}
  </>
);

// Render each Evolution Pokemon
const renderEvolutionPokemon = (
  pokemons: Pokemon[],
  handleLinkClick: (value: string) => void
) => {
  return (
    <div className={styles.pokemon__evol__container}>
      {pokemons.map((pokemon: Pokemon, index) => (
        <div key={index} style={{ alignItems: 'center' }}>
          <h1
            onClick={() => pokemon.name && handleLinkClick(pokemon.name)}
            className={styles.link}
          >
            {pokemon.name}
          </h1>
          <Image
            className={styles.pokemon__img}
            width="200"
            height="200"
            src={pokemon.image}
            alt={`pic-of-${pokemon.name}`}
          />
        </div>
      ))}
    </div>
  );
};

// ======================
// Result Component
// ======================
const Result: React.FC<IResult> = ({ pokemon, handleLinkClick }) => {
  // Early return, if pokemon is boolean
  if (typeof pokemon === 'boolean') return <></>;

  return (
    <div className={styles.main__container}>
      <Image
        className={styles.pokemon__img}
        width="400"
        height="400"
        src={pokemon.image}
        alt={`pic-of-${pokemon.name}`}
      />
      {/* Overviews section */}
      <Section>
        <dl>
          <p className={styles.pokemon__info}>
            Name:
            <span className={styles.data}>
              {pokemon.name} {pokemon.types && renderTypeBadge(pokemon.types)}
            </span>
          </p>
          <p className={styles.pokemon__info}>
            Max HP:<span className={styles.data}>{pokemon.maxHP}</span>
          </p>
          <p className={styles.pokemon__info}>
            Max CP:<span className={styles.data}>{pokemon.maxCP}</span>
          </p>
          <p className={styles.pokemon__info}>
            Weight:
            <span
              className={styles.data}
            >{`${pokemon.weight?.minimum} - ${pokemon.weight?.maximum}`}</span>
          </p>
          <p className={styles.pokemon__info}>
            Resistant:
            <span className={styles.data}>
              {pokemon.resistant && renderTypeBadge(pokemon.resistant)}
            </span>
          </p>
        </dl>
        <dl>
          <p className={styles.pokemon__info}>
            Weakness:
            <span className={styles.data}>
              {pokemon.weaknesses && renderTypeBadge(pokemon.weaknesses)}
            </span>
          </p>
          <p className={styles.pokemon__info}>
            Classification:
            <span className={styles.data}>{pokemon.classification}</span>
          </p>
          <p className={styles.pokemon__info}>
            Flee rate:<span className={styles.data}>{pokemon.fleeRate}</span>
          </p>
          <p className={styles.pokemon__info}>
            Height:
            <span
              className={styles.data}
            >{`${pokemon.height?.minimum} - ${pokemon.height?.maximum}`}</span>
          </p>
          <p className={styles.pokemon__info}>
            Evolution requirement:
            {pokemon.evolutionRequirements && (
              <span
                className={styles.data}
              >{`${pokemon.evolutionRequirements.name} x${pokemon.evolutionRequirements.amount}`}</span>
            )}
          </p>
        </dl>
      </Section>

      {/* Attack skills section */}
      <Section>
        <div>
          <p className={styles.pokemon__info}>Fast Attacks:</p>
          {pokemon.attacks?.fast && renderAttack(pokemon.attacks.fast)}
        </div>
        <dl>
          <p className={styles.pokemon__info}>Special Attacks:</p>
          {pokemon.attacks?.special && renderAttack(pokemon.attacks.special)}
        </dl>
      </Section>

      {/* Evolution pokemons section */}
      <Section style={{ gridTemplateColumns: 'auto' }}>
        <div>
          <p className={styles.pokemon__info}>Evolution:</p>
          {pokemon.evolutions &&
            renderEvolutionPokemon(pokemon.evolutions, handleLinkClick)}
        </div>
      </Section>
    </div>
  );
};

export default Result;
