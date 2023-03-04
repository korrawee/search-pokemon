import Link from 'next/link';
import styles from './Header.module.css';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo__text}>
        Search Pokemon
      </Link>
    </div>
  );
};

export default Header;
