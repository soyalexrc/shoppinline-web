import styles from './styles.module.css';
import Link from "next/link";

export default function Index () {
    return (
        <div className={styles.container}>
            <p className={styles.label}>Limited Time Only: Up to 60% off Dining Furniture</p>
            <Link className={styles.link} href="https://google.com" target="_blank">Shop Now</Link>
        </div>
    )
}
