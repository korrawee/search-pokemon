import styles from './PokemonInfo.module.css';
import Image from 'next/image';
import Section from '../section/Section';

interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface IPokemonInfo {
  id: string;
  number?: string;
  name?: string;
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
  evolutions?: IPokemonInfo[];
  image: string;
}

function handleClick(e: any) {
  console.log(e);
}
const renderResistantType = (types: string[]) => (
  <>
    {types.map((type) => (
      <span> {type}</span>
    ))}
  </>
);

const renderAttack = (atks: Attack[]) => (
  <>
    {atks?.map((atk) => (
      <h4 className={styles.data}>
        {atk.name}
        <span>
          {' '}
          {atk.damage}
          <span> dmg</span>
        </span>
        <span> {atk.type}</span>
      </h4>
    ))}
  </>
);

const renderEvolutionPokemon = (pokemons: IPokemonInfo[]) => (
  <div className={styles.pokemon__evol__container}>
    {pokemons.map((pokemon) => (
      <div style={{textAlign: 'center'}}>
        <a onClick={(e) => handleClick(e)} className={styles.data}>{pokemon.name}</a>
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
const PokemonInfo: React.FC<IPokemonInfo> = (pokemon: IPokemonInfo) => {
  return (
    <div className={styles.main__container}>
      <Image
        className={styles.pokemon__img}
        width="400"
        height="400"
        src={pokemon.image}
        alt={`pic-of-${name}`}
      />
      <Section>
        <dl>
          <dt>
            Name:<span className={styles.data}>{pokemon.name}</span>
          </dt>
          <dt>
            Max HP:<span className={styles.data}>{pokemon.maxHP}</span>
          </dt>
          <dt>
            Max CP:<span className={styles.data}>{pokemon.maxCP}</span>
          </dt>
          <dt>
            Weight:
            <span
              className={styles.data}
            >{`${pokemon.weight?.minimum} - ${pokemon.weight?.maximum}`}</span>
          </dt>
          <dt>
            Resistant:
            <span className={styles.data}>
              {pokemon.resistant && renderResistantType(pokemon.resistant)}
            </span>
          </dt>
        </dl>
        <dl>
          <dt>
            Weak:<span className={styles.data}>{pokemon.weaknesses}</span>
          </dt>
          <dt>
            Classification:
            <span className={styles.data}>{pokemon.classification}</span>
          </dt>
          <dt>
            Flee rate:<span className={styles.data}>{pokemon.fleeRate}</span>
          </dt>
          <dt>
            Height:
            <span
              className={styles.data}
            >{`${pokemon.height?.minimum} - ${pokemon.height?.maximum}`}</span>
          </dt>
          <dt>
            Evolution requirement:
            <span
              className={styles.data}
            >{`${pokemon.evolutionRequirements?.name} x${pokemon.evolutionRequirements?.amount}`}</span>
          </dt>
        </dl>
      </Section>
      <Section>
        <div>
          <dt>Fast Attacks:</dt>
          {pokemon.attacks?.fast && renderAttack(pokemon.attacks.fast)}
        </div>
        <dl>
          <dt>Special Attacks:</dt>
          {pokemon.attacks?.special && renderAttack(pokemon.attacks.special)}
        </dl>
      </Section>
      <Section style={{ gridTemplateColumns: 'auto' }}>
        <div>
          <dt>Evolution:</dt>
          {pokemon.evolutions && renderEvolutionPokemon(pokemon.evolutions)}
        </div>
      </Section>
    </div>
  );
};

export default PokemonInfo;
