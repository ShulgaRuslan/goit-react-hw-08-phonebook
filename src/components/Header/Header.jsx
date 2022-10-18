import { useSelector } from 'react-redux';
import { authSelectors } from 'authorization';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import Authentication from 'components/Authentication';

import styles from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <Authentication />}
      </div>
    </header>
  );
}
