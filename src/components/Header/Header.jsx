import styles from "./Header.module.scss";
import {Link, useLocation} from "react-router-dom";
const menuItems = [
    {name: "Главная", link: "/"}, 
    {name: "О SHURSHUSHA FEST", link: "/aboutsh"}, 
    {name: "О чате Meme House", link: "/aboutmh"}, 
    {name: "Покупка билетов", link: "/pay"}, 
    {name: "О Коллаборации", link: "/koll"}];

const Header = () => {
    const location = useLocation();

    return (
        <div className={styles.menu}>
            <div>
                {menuItems.map((item, i) => {
                    return <Link to={item.link} key={i} className={`${styles.item} ${location.pathname == item.link ? styles.select : ''} `}>{item.name}</Link>;
                })}
            </div>

            <div className={styles.adress}><div>29 июля, 16:00</div> Гостиница Луки-Сервис г. Великие Луки</div>
        </div>
    )
}

export default Header;
