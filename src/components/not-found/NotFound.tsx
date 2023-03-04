import styles from './NotFound.module.css';

export interface INotFound {}

const NotFound: React.FC<INotFound> = () => {
  return <h1 className={styles.not__found__text}>Pokemon not found.</h1>;
};

export default NotFound;
