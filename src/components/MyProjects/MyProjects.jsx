import style from './projects.module.css';
import img1 from './assets/caffeine.png';
import img2 from './assets/bistro.png';
import img3 from './assets/education.png';
import img4 from './assets/web.png';
import img5 from './assets/weather.png';
import img6 from './assets/vacansies.png';
import img7 from './assets/presentation.png';

export default function MyProjects() {

    const arr_projects = [{ id: 1, name: 'Сaffeine', environment: ['typescript', 'react', 'styled components', 'framer motion'], description: 'Проект демонстрирует применение современных подходов к разработке интерфейсов с использованием React. Он реализует основные функциональные требования для создания привлекательного сайта для пользователей', img: img1, style_img: style.img_item_1 },
    { id: 2, name: 'BistroBliss', environment: ['javascript', 'html', 'css'], description: 'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl', img: img2, style_img: style.img_item_2 },
    { id: 3, name: 'EducationPlatform', environment: ['typescript', 'node.js', 'express', 'cors', 'jwt-token'], description: 'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl', img: img3, style_img: style.img_item_3 },
    { id: 4, name: 'WebPage', environment: ['javascript', 'html', 'css'], description: 'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl', img: img4, style_img: style.img_item_4 },
    { id: 5, name: 'Weather-dashboard', environment: ['javascript', 'html', 'css'], description: 'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl', img: img5, style_img: style.img_item_5 },
    { id: 6, name: 'Vacancies', environment: ['javascript', 'html', 'css'], description: 'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl', img: img6, style_img: style.img_item_6 },
    { id: 7, name: 'Presentation-adaptive', environment: ['javascript', 'html', 'css'], description: 'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl', img: img7, style_img: style.img_item_7 },]

    return <section>
        <div className={style.wrapper}>
            <h2>Мои проекты</h2>
            <p>Некоторые проекты, которые я реализовала</p>
            <div className={style.whirligig_projects}>
                {arr_projects.map((el) => <div key={el.id} className={style.project_item}>
                    <img className={el.style_img} src={el.img} alt="img" />
                    <div className={style.environment}>{el.environment.map((elem, i) => <div key={i} className={style.env_item}><p>{elem}</p></div>)}</div>
                    <h3 className={style.name_item}>{el.name}</h3>
                    <p className={style.text_item}>{el.description}</p>
                    <p className={style.view}>Подробнее →</p>
                </div>)}
            </div>
        </div>
    </section>
}