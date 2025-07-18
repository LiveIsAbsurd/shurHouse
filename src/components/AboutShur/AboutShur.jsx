import styles from "./AboutShur.module.scss";
import kollab from "../../assets/kollab.svg";
import art from "../../assets/art.jpg";
import shur from "../../assets/shur.jpg";
import pay from "../../assets/pay.jpg";
import {Link} from "react-router-dom";

const content = [
    {
        text: <div>
                <img className={styles.image} src={shur}></img>
                <b>SHURSHUSHA FEST</b> — это праздник, который мы создаём все вместе.
                <br />
                <br />
                <b>Наша миссия</b> — создать безопасное, уютное и дружелюбное пространство, где каждый может быть собой. Мы верим, что творчество не имеет границ. Неважно, делаете ли вы первые шаги в косплее, рисуете арты для себя, хотите спеть любимый опенинг в караоке или уже покорили десятки сцен — мы будем рады видеть вас частью нашей большой и тёплой семьи.
                <br />
                <br />
                <b>Наш фестиваль</b> — это место встречи старых друзей и площадка для новых знакомств, где каждый гость и участник вносит свой вклад в общую незабываемую атмосферу.
                <br />
                <br />
                <h2>Что вас ждёт на SHURSHUSHA FEST?</h2>
                Мы готовим для вас насыщенную программу, где каждый найдет что-то для себя:
                <br />
                <br />
                <b>Косплей-дефиле</b>: Станьте звездой сцены или поддержите любимых косплееров бурными аплодисментами! Мы ценим каждый образ, в который вложена душа.
                <br />
                <br />
                <b>Уникальный маркет</b>: Найдите настоящие сокровища на нашей аллее авторов — от авторских открыток и стикеров до крафтовых изделий ручной работы.
                <br />
                <br />
                <b>Живая музыка и караоке</b>: Насладитесь живым выступлением от приглашенных музыкантов и не стесняйтесь сами взять в руки микрофон, чтобы исполнить любимые хиты!
                <br />
                <br />
                <b>Фотографы и фотоугол</b>: Сохраните воспоминания о своем образе и этом дне благодаря работе наших фотографов и специально оформленной фотозоне.
                <br />
                <br />
                <b>Невероятная атмосфера</b> : И, конечно же, самое главное — это вы! Вас ждёт общение с единомышленниками, новые знакомства и море позитивных эмоций.
                <br />
                <br />
                С любовью,
                <br />
                Команда SHURSHUSHA FEST 💓
                <br />
                <br />
            </div>,
        link: "/aboutsh"
    },
    {
        text: <div>
                <img className={styles.image} src={art}></img>
                <div className={styles.author}>Арт участника чата <Link className={styles.link} to="https://t.me/Create_For_You" target="_blank" rel="noopener noreferrer" >https://t.me/Create_For_You</Link></div>
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
                <br />
                <br />
            </div>,
        link: "/aboutmh"
    },
    {
        text: <div>
                Всего один шаг отделяет вас от незабываемого дня! 
                <br />
                <br />
                Здесь вы можете купить билет онлайн или забронировать его, чтобы оплатить наличными на входе по самой выгодной цене.
                <br />
                <br />
                ❗️<b>ВАЖНО:</b> ПОВЫШЕНИЕ ЦЕН С 20 ИЮЛЯ!
                <br />
                <br />
                С <b>20 июля</b> стоимость всех категорий билетов <b>увеличится на 100 рублей</b>
                <br />
                <br />
                Но у вас есть отличная возможность зафиксировать старую цену! Просто <b>купите</b> билет онлайн или <b>забронируйте</b> его до 20 июля, написав нам в личные сообщения. Так вы не только сэкономите, но и гарантируете себе место на фестивале!
                <br />
                <br />
                <h2>КАК КУПИТЬ ИЛИ ЗАБРОНИРОВАТЬ БИЛЕТ?</h2>

                1. <b>Выберите</b> тип билета из списка ниже.
                <br />
                <br />
                2. <b>Напишите</b> о своем выборе в личные сообщения организатору или группы в вк
                <br />
                <br />
                <Link className={styles.link} to="https://vk.com/shurhs" target="_blank" rel="noopener noreferrer" >https://vk.com/shurhs</Link>
                <br />
                <Link className={styles.link} to="https://vk.com/shurshusha_fest" target="_blank" rel="noopener noreferrer" >https://vk.com/shurshusha_fest</Link>
                <br />
                <br />
                3. В сообщении укажите:
                <br />
                <ul>
                    <li>Ваше имя и фамилию.</li>

                    <li>Какой билет (или билеты) вы хотите приобрести.</li>

                    <li>И что вы хотите сделать: <b>купить</b> билет сразу (онлайн-оплата) или <b>забронировать</b> его для оплаты наличными на входе.</li>
                </ul>
                4. Мы вышлем вам реквизиты для онлайн-оплаты или подтвердим вашу бронь и внесем вас в список гостей.
                <br/>
                <br/>
                <h2>НАШИ БИЛЕТЫ</h2>
                🎟️ <b>Стандартный билет</b>
                <br/>
                <p className={styles.tiket}>Дает право входа на мероприятие и доступ ко всем активностям фестиваля.</p>
                <p className={styles.tiket}><b>Цена: 300₽</b></p>

                🎟️ <b>Билет «На двоих»</b>
                <p className={styles.tiket}>Приходить с другом всегда веселее и выгоднее! Этот билет даёт право входа для двух человек.</p>

                <p className={styles.tiket}><b>Цена: 550₽</b></p>

                🎟️ <b>Билет участника дефиле</b>
                
                <p className={styles.tiket}>Специальная цена для наших звёзд сцены!</p>

                <p className={styles.tiket}><b>Цена: 200₽</b></p>
                Внимание! Билет действителен только при наличии подтверждённой заявки.
                <br/>
                <br/>
                🎟️ <b>Спонсорский билет</b>
                <p className={styles.tiket}>Ваш вклад в развитие нашего фестиваля! Помогает нам делать событие еще лучше и масштабнее. Мы безмерно благодарны за вашу поддержку! 🥺🤲💕</p>

                <p className={styles.tiket}><b>Цена: 750₽</b></p>

                <h2>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ:</h2>
                <b>Бронь</b>: Ваша бронь гарантирует вам билет по старой цене. Вы сможете оплатить его наличными на входе, назвав свое имя.
                <br/>
                <br/>
                <b>Покупка на входе</b>: Покупка билета на месте без предварительной брони будет осуществляться по новой, повышенной цене (при наличии свободных мест).
                <br/>
                <br/>
                <b>Возврат</b>: Условия возврата билетов вы можете уточнить при покупке в личных сообщениях.
                <br/>
                <br/>
                Готовы присоединиться? Тогда с нетерпением ждём именно Вас!
                <br/>
                <br/>
                <img className={styles.image} src={pay}></img>
                <br/>
                <br/>
            </div>,
        link: "/pay"
    },
    {
        text: <div>
                <img className={styles.image} src={kollab}></img>
                <div className={styles.author}>Автор арта <Link className={styles.link} to="https://t.me/ena_rabotaet" target="_blank" rel="noopener noreferrer" >https://t.me/ena_rabotaet</Link></div>
                Вторая коллаборация SHURSHUSHA FEST x Meme House 🔥🔥🔥.
                <h2>HURSHUSHA FEST x Meme House 2.0</h2>
                Что будет, если соединить самый популярный чат города и самый душевный фестиваль? Получится наша вторая, еще более масштабная коллаборация!
                <br/>
                <br/>
                <Link className={styles.link} to="https://t.me/meme_house_chat" target="_blank" rel="noopener noreferrer" >Meme House Chat</Link> — ваш цифровой дом, где всегда поддержат и поймут.
                <br/>
                <Link className={styles.link} to="https://t.me/Shurshau" target="_blank" rel="noopener noreferrer" >SHURSHURSHA FEST</Link> — это место, где эта дружба выходит в оффлайн на фестивале!
                <br/>
                <br/>
                А на самом мероприятии вас будет ждать эксклюзив! Лимитированная коллекция мерча <b>SHURSHUSHA x Meme House</b>:
                <br/>
                <br/>
                ☆ Уникальные плакаты
                <br/>
                ☆ Яркие значки
                <br/>
                ☆ Стильные стикерпаки
                <br/>
                <br/>
                Автором которых является один из незаменимых админов чата
                <br/>
                <Link className={styles.link} to="https://t.me/ena_rabotaet" target="_blank" rel="noopener noreferrer" >https://t.me/ena_rabotaet</Link>
                <br/>
                <br/>
                Будем с нетерпение ждать вас вместе с участниками Meme House на грядущем SHURSHUSHA FEST!
                <br />
                <br />
            </div>,
        link: "/koll"
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
