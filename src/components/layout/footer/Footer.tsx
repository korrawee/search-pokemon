import styles from './Footer.module.css';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className={styles.container}>
      <p className={styles.copyright}>
        Copyright © 2023 Korrawee Somyos. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
