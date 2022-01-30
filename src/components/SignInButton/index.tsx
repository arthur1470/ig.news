import styles from './styles.module.scss';
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import { useSession, signIn, signOut} from 'next-auth/react'

export function SignInButton() {
    const {data:session} = useSession();    
    
    return session ? (
        <button 
            type="button" 
            className={styles.button}    
            onClick={() => {signOut()}}        
        >
            <FaGithub color="#39c758" />            
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.button}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />            
            Sign in with GitHub
        </button>
    );
}