import styles from "./MobileHeader.module.scss";

const MobileHeader = ({click}) => {
    return (
        <div className={styles.container}>SHURSHUHA FEST <span onClick = {() => click()} className={styles.decor}>&</span> MEME HOUSE CHAT</div>
    )
}

export default MobileHeader;