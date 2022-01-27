import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                
                <nav>
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Posts</a>
                </nav>

                
                <button type='button'>
                    <img src="/images/github.svg" alt="" />
                    Sign in with GitHub
                </button>
            </div>
        </header>
    );
}