import styles from './StarShipCard.module.css';

export function StarShipCard(props) {

    return (   
        <div className={styles.StarShipCard}>
            {props.name}
        </div>
    )
}