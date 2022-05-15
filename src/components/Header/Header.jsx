import { Container } from '../Container/Container';
import githublogo from './img/githublogo.png';
import styles from './Header.module.scss';

export const Header = ({ findUser, setinputValue, children }) => {
  return (
    <Container>
      <div className={styles.header__wrapper}>
        {children}
        <header className={styles.header}>
          <a href="/#">
            <img
              draggable="false"
              src={githublogo}
              alt="githublogo"
              className={styles.header__logo}
            />
          </a>
          <div className={styles.header__input}>
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              type="submit"
            >
              <input
                onKeyPress={(e) => e.key === 'Enter' && findUser()}
                placeholder="Enter GitHub username"
                onChange={(event) => setinputValue(event.target.value)}
                type="text"
                className={styles.input}
              />
              <button
                onClick={() => findUser()}
                type="button"
                className={styles.header__loupe}
              >
              </button>
            </form>
          </div>
        </header>
      </div>
    </Container>
  );
};
