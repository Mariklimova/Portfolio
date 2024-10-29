import style from './experience.module.css';
import { motion } from 'framer-motion';

const animation = {
    animate: {
        rotate: 360,
    },
    transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
    },
};

export default function Experience() {
    const arr_experience = [
        { id: 1, description: 'Более года профессионального опыта в качестве разработчика, специализирующегося на Javascript, Typescript' },
        { id: 2, description: 'Разработка и поддержка серверных компонентов веб-приложений с использованием Node.js, Express' },
        { id: 3, description: 'Создание клиентских интерфейсов с использованием HTML, CSS и React, Redux, RTK, RTK Query' },
        { id: 4, description: 'Работа с такими базами данных, как MySQL и PostgreSQL' },
        { id: 5, description: 'Написание модульных тестов с использованием Jest и Mocha, интеграционных тестов с использованием Postman' },
        { id: 6, description: 'Знание принципов объектно-ориентированного программирования, реализация принципов SOLID и REST.' }
    ];

    return <section>
        <div className={style.wrapper}>
            <h2 className={style.title}>Моя работа</h2>
            <p>как fullstack разработчика</p>
            <div className={style.exp_items}>
                {arr_experience.map((el) => (
                    <div key={el.id} className={style.border_item}>
                        <p className={style.description_item}>{el.description}</p>
                    </div>
                ))}
            </div>
            <motion.div
                className={style.images}
            >
                <motion.div
                    className={style.react}
                    variants={animation}
                    animate='animate'
                    transition={animation.transition}
                />
                <div className={style.js}></div>
                <motion.div
                    className={style.nextjs}
                    variants={animation}
                    animate='animate'
                    transition={animation.transition}
                />
            </motion.div>
        </div>
    </section>;
}
