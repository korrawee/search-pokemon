import styles from './Section.module.css';

export interface ISection {
  children?: React.ReactNode;
  style?: {};
}

const Section: React.FC<ISection> = ({ style, children }) => {
  return (
    <div className={styles.container} style={style ? style : {}}>
      {children}
    </div>
  );
};

export default Section;
