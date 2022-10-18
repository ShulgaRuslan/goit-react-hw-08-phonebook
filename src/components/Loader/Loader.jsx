import { Rings } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Rings height="300" width="300" color="#00ced1" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
