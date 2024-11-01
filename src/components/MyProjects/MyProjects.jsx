import style from './projects.module.css';
import caffeine from './assets/caffeine.png';
import bistro from './assets/bistro.png';
import education from './assets/education.png';
import web from './assets/web.png';
import weather from './assets/weather.png';
import vacancies from './assets/vacansies.png';
import presentation from './assets/presentation.png';

export default function MyProjects() {

    const arr_projects = [{ id: 1, name: 'Сaffeine', environment: ['typescript', 'html', 'react', 'styled components', 'framer motion'], description: 'Проект демонстрирует применение современных подходов к разработке интерфейсов с использованием React и реализует основные функциональные требования для создания привлекательного сайта для пользователей', img: caffeine, style_img: style.img_item_1, link: 'https://github.com/Mariklimova/caffeine' },
    { id: 2, name: 'BistroBliss', environment: ['javascript', 'html', 'scss', 'react', 'next.js'], description: 'Многостраничное веб-приложение для ресторана, где пользователи могут ознакомиться с меню и услугами заведения. Проект охватывает всю необходимую функциональность для ресторана, делая акцент на визуальной составляющей', img: bistro, style_img: style.img_item_2, link: 'https://github.com/Mariklimova/BistroBliss' },
    { id: 3, name: 'EducationPlatform', environment: ['typescript', 'node.js', 'express', 'cors', 'jwt-token', 'react', 'html', 'css'], description: 'Данный проект представляет собой платформу для онлайн-обучения, позволяющую пользователям изучать различные предметы через веб-интерфейс. Он ориентирован на предложении интерактивных курсов с визуально привлекательным дизайном', img: education, style_img: style.img_item_3, link: 'https://github.com/Mariklimova/EducationPlatform' },
    { id: 4, name: 'WebPage', environment: ['javascript', 'html', 'css', 'react'], description: 'Проект представляет собой веб-приложение для платформы, связанной с азартными играми в форме рекламной страницы c использованием анимации', img: web, style_img: style.img_item_4, link: 'https://github.com/Mariklimova/WebPage' },
    { id: 5, name: 'Weather-dashboard', environment: ['typescript', 'html', 'css', 'react', 'axios', 'api'], description: 'Веб-приложение для отображения текущей погоды в заданном пользователем городе. Результаты отображаются на экране, включая температуру, влажность, скорость ветра и описание погоды. Также предусмотрена возможность сброса введенных данных и повторного поиска.', img: weather, style_img: style.img_item_5, link:'https://github.com/Mariklimova/weather-dashboard-ts' },
    { id: 6, name: 'Vacancies', environment: ['javascript', 'html', 'scss', 'react', 'material ui', 'localstorage'], description: 'Проект представляет собой веб-приложение, предназначенное для поиска и управления вакансиями. Пользователи могут искать вакансии, добавлять их в список избранного, просматривать подробности о каждой вакансии, а также управлять своим списком избранных позиций', img: vacancies, style_img: style.img_item_6,link:'https://github.com/Mariklimova/React-FilterBlocks' },
    { id: 7, name: 'Presentation-adaptive', environment: ['javascript', 'html', 'css', 'react'], description: 'Данный проект является веб-приложением, разработанным с целью предоставления пользователю возможности взаимодействовать с функциональностью, связанной с демо-версией услуг компании', img: presentation, style_img: style.img_item_7,link:'https://github.com/Mariklimova/Presentation-adaptive' },]

    return <section>
        <div className={style.wrapper}>
            <h2>Мои проекты</h2>
            <p>Некоторые проекты, которые я реализовала</p>
            <div className={style.whirligig_projects}>
                {arr_projects.map((el) => <div key={el.id} className={style.project_item}>
                    <img className={el.style_img} src={el.img} alt="img" />
                    <div className={style.environment}>{el.environment.map((elem, i) => <div key={i} className={style.env_item}><p>{`#${elem}`}</p></div>)}</div>
                    <h3 className={style.name_item}>{el.name}</h3>
                    <p className={style.text_item}>{el.description}</p>
                    <a href={el.link}><p className={style.view}>Подробнее →</p></a>
                </div>)}
            </div>
        </div>
    </section>
}