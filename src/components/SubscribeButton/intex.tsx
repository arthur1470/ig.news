import styles from './styles.module.scss';

interface SubscribeButtonProps {
    productId: string;
}

export function SubscribeButton({ productId }) {
    return (
        <button 
            type="button"
            className={styles.subscribeButton}>
            
            Subscribe now
        </button>
    )
}