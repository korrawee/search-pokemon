import styles from './TypeBadge.module.css';

export interface ITypeBadge {
  type: string;
}
interface TypeColor {
  [key: string]: string;
}
const TypeBadge: React.FC<ITypeBadge> = ({ type }) => {
  const typeColors: TypeColor = {
    normal: '#D6D3D1',
    fire: '#EA580C',
    water: '#38BDF8',
    grass: '#65A30D',
    electric: '#FDE047',
    ice: '#67E8F9',
    fighting: '#B91C1C',
    poison: '#9333EA',
    ground: '#A16207',
    flying: '#0284C7',
    psychic: '#C026D3',
    bug: '#22C55E',
    rock: '#6B7280',
    ghost: '#6366F1',
    dark: '#52525B',
    dragon: '#B91C1C',
    steel: '#E5E5E5',
    fairy: '#FCA5A5',
  };
  const lowerCaseType: string = type.toLowerCase();
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: typeColors[lowerCaseType] }}
    >
      <span className={styles.type__text}>{type}</span>
    </div>
  );
};

export default TypeBadge;
