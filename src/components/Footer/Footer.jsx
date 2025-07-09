import styles from "./Footer.module.scss";
import telegram from "../../assets/telegram.png";
import vk from "../../assets/vk.jpg";
import memehouse from "../../assets/memehouse.png";
import {Link} from "react-router-dom";

const links = [
    {logo: telegram, link: 'https://t.me/Shurshau'},
    {logo: vk, link: 'https://vk.com/shurshusha'},
    {logo: memehouse, link: 'https://t.me/meme_house_chat'}
]

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                {links.map((item, i) => {
                    return <Link key={i} to={item.link}><img src={item.logo} className={styles.round}></img></Link>
                })}
            </div>
            <div>
                <div className={styles.adress}><div>29 июля, 16:00</div> <div>Гостиница Луки-Сервис</div> г. Великие Луки</div>
                <div className={styles.author}>created by <Link to="https://liveisabsurd.t.me" className={styles.tg}>@LiveIsAbsurd</Link></div>
                <div className={styles.author}>designed by <Link to="https://yorigami.t.me" className={styles.tg}>@Yorigami</Link></div>
            </div>
        </div>
    )
}

export default Footer;
