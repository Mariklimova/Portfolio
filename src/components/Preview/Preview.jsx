import style from './preview.module.css';
import foto from './assets/Avatar.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const animation = {
    hiddenHorizontal: {
        x: 100,
        opacity: 0,
    },
    visibleHorizontal: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
    hiddenVertical: {
        y: -100,
        opacity: 0,
    },
    visibleVertical: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const SkillList = ({ skills }) => {
    return <ul>
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
    </ul>;
};

const SkillSection = ({ skills, itemsToShow = 4 }) => {
    const [showMore, setShowMore] = useState(false);
    const visibleSkills = showMore ? skills : skills.slice(0, itemsToShow);

    return <div>
        <SkillList skills={visibleSkills} />
        <AnimatePresence>
            {skills.length > 4 && (
                <button className={style.btn_show} onClick={() => setShowMore(!showMore)} key={showMore ? 'showLess' : 'showMore'}>
                    {showMore ? 'Свернуть' : 'Показать больше'}
                </button>
            )}
        </AnimatePresence>
    </div>;
};

export default function Preview() {

    const arr_roles = [{ id: 1, name: 'Языки', description: ['JavaScript', 'TypeScript'], roles_icon: style.icon_1 },
    { id: 2, name: 'Frontend', description: ['React', 'Next.js', 'React Native', 'Redux Toolkit', 'Redux Toolkit Query', 'Material UI', 'Mantine', 'HTML', 'CSS/SCSS', 'Framer motion', 'Styled components'], roles_icon: style.icon_2 },
    { id: 3, name: 'Backend', description: ['Node.js', 'Express'], roles_icon: style.icon_3 },
    { id: 4, name: 'Архитектор БД', description: ['MySQL', 'PostgreSQL'], roles_icon: style.icon_4 },
    { id: 5, name: 'Дополнительно', description: ['Mocha', 'Jest', 'Git', 'Figma'], roles_icon: style.icon_5 }]


    return <section>
        <div className={style.wrapper}>
            <motion.div
                initial='hiddenVertical'
                whileInView='visibleVertical'
                viewport={{ once: true }}
                className={style.visit_card}>
                <div className={style.about_me}>
                    <motion.p custom={1} variants={animation}>Привет, меня зовут Марина Климова, и я</motion.p>
                    <motion.h1 custom={2} variants={animation}>FullStack Разработчик</motion.h1>
                    <motion.p custom={3} variants={animation}>занимающийся разработкой как фронтенда, так и бэкенда, что позволяет мне создавать полноценные веб-приложения от начала до конца. Я сосредоточена на использовании современных технологий для создания динамических веб-приложений, создавая бесперебойный пользовательский интерфейс и воплощающий свои идеи в жизнь.</motion.p>
                </div>
                <motion.img className={style.img}
                    custom={4} variants={animation} src={foto} alt="foto" />
            </motion.div>
            <motion.div
                initial='hiddenVertical'
                whileInView='visibleVertical'
                viewport={{ once: true }}
                className={style.skills}>
                <div className={style.roles}>
                    {arr_roles.map((el) => <motion.div custom={4 + el.id} variants={animation} key={el.id} className={style.roles_item}>
                        <div className={el.roles_icon}></div>
                        <div className={style.info_item}>
                            <h3 className={style.roles_name}>{el.name}</h3>
                            <div className={style.line} />
                            <h3>Я работала с</h3>
                            <SkillSection skills={el.description} />
                        </div>
                    </motion.div>)}
                </div>
                <div>

                </div>
            </motion.div>
        </div>
    </section>
}


