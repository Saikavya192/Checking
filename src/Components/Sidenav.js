import styles from './Sidenav.module.css';
export default function Sidenav(){
    return(
        <div className={styles.Sidenav}>
        <h1 className={styles.heading}>BOSTON.AI</h1>
        <hr/>
        <button className={styles.button}><i className="fas fa-plus"></i>New Chat</button>
        </div>

    );
}