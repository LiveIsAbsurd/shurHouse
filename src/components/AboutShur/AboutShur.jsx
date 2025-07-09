import styles from "./AboutShur.module.scss";
import kollab from "../../assets/kollab.png";
import art from "../../assets/art.jpg";
import {Link} from "react-router-dom";

const content = [
    {
        text: <div>ANONS | SHURSHUSHA FEST | 
                <br/>
                <br/>
                С огромным нетерпением мы рады пригласить Вас на главное событие этого лета в Великих Луках! Готовьте свои лучшие наряды и косплеи! Станьте участником зрелищных дефиле и исполните любимые песни под караоке! 
                Давайте сделаем это лето  сделаем самым незабываемо жарким вместе 🔥 
                <br/>
                <br/>
                ☆ Когда? 29 июля, 16:00
                <br/>
                ☆ Где? Гостиница «Луки-Сервис», г. Великие Луки
                <br/>
                <br/>
                ☆Что вас ждёт?
                <br/>
                • Косплей-дефиле
                <br/>
                • Маркет с уникальными товарами ручной работы
                <br/>
                • Фотографы и фотоугол
                <br/>
                • Живое исполнение от группы «Комитет культуры» 
                <br/>
                • Караоке</div>,
        link: "/aboutsh"
    },
    {
        text: <div>
                Meme House (дом)— Самый популярный чат для общения нашего города. 
                <br />
                <br />
                Здесь к каждому новому участнику относятся с заботой и особым вниманием, и вы обязательно сможете найти подходящего себе собеседника.
                <br />
                <br />
                Чат активен большую часть времени, поэтому долгое ожидание ответа здесь не представляется возможным.
                <br />
                <br />
                Вам обязательно помогут влиться в происходящую беседу, и вы быстро станете частью этого уютного, комфортного коллектива.
                Постоянный контроль чата администраторами позволяет исключить рекламных ботов в чате и остальных негативных факторов, которыми кишат остальные чаты.
                <br />
                <br />
                Филосовская элита чата всегда поддержит твои мысли о бессмысленности жизни, а ценитили музыки по полочкам разложат твой музыкальный вкус.
                <br />
                <br />
                Что за сомнения? Скорее присоединяйся! 
            </div>,
        link: "/aboutmh",
        image: art
    },
    {
        text: <div>
                🎟️ Билеты:
                <br/>
                Стандартный: 300₽
                <br/>
                На двоих : 550₽
                <br/>
                Для участника дефиле: 200₽
                <br/>
                Спонсорский: 750₽
                <br/>
                <br/>
                ❗️ Внимание! Количество билетов ограничено!
                <br/>
                <br/>
                Для покупки писать сюда: 
                <Link className={styles.link} to="https://vk.com/shurhs"> клик</Link>
            </div>,
        link: "/pay"
    },
    {
        text: <div>
                Вторая коллаборация SHURSHUSHA FEST x Meme House 🔥🔥🔥.
                <br />
                <br />
                На этот раз ещё круче, глобальнее, веселее (даже сайт запилили на такой случай).
                <br />
                <br />
                На предстоящее мероприятие мы подготовили для вас лимитированную коллекцию мерча с коллаборацией ShurShusha/MemeHousе! 💗
                <br />
                У гостей мероприятия будет возможность приобрести плакаты, значки и стикерпаки с логотипами обоих партнеров. 
                <br />
                <br />
                Автором артов для мерча является один из незаменимых админов чата
                <br />
                <Link className={styles.link} to="https://t.me/ena_rabotaet" >https://t.me/ena_rabotaet</Link>
            </div>,
        link: "/koll",
        image: kollab
    }
]

const AboutShur = ({link}) => {
    return (
        <div className={styles.container}>
            
            <div className={styles.text}>
                
                {content
                    .map((el) => {
                        if (el.link == link) {
                            return (
                                <div>
                                    {el.image ? <img className={styles.image} src={el.image}></img> : null}
                                    {link == "/aboutmh" ? <div className={styles.author}>Арт участника чата <Link className={styles.link} to="https://t.me/Create_For_You">https://t.me/Create_For_You</Link></div> : null}
                                    {link == "/koll" ? <div className={styles.author}>Автор арта <Link className={styles.link} to="https://t.me/ena_rabotaet">https://t.me/ena_rabotaet</Link></div> : null}
                                    <div>{el.text}</div>
                                </div>
                            )
                        }
                    })}
            </div>
        </div>
    )
}

export default AboutShur;
