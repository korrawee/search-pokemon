import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Layout.module.css';
export interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main__container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
