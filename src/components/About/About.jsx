import style from './about.module.css'
import { motion } from 'framer-motion';

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

export default function About() {
    const handleContactClick = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return <section>
        <motion.div
            initial='hiddenHorizontal'
            whileInView='visibleHorizontal'
            viewport={{ once: true }}
            className={style.wrapper}>
            <div className={style.info}>
                <motion.h2 custom={1} variants={animation}>Свяжитесь со мной</motion.h2>
                <motion.p custom={2} variants={animation}>если, Вам нужен увлечённый Fullstack разработчик, который стремиться создавать не только функциональные, но красивые и удобные интерфейсы, привлекающие пользователей.
                    Я изучила множество технологий, таких как HTML, CSS/SCSS, JavaScript и TypeScript, а также серверные языки, такие как Node.js. Я также работала с различными фреймворками, такими как React и Express, что позволяет мне быть гибкой и адаптироваться к требованиям проекта.
                    В моём портфолио Вы найдёте проекты, в которых я использовал современные технологии и подходы. Если Вы ищете разработчика, готового внедрять инновации и работать над интересными проектами.
                    Я всегда открыта для новых возможностей и готова к сотрудничеству. Давайте вместе создадим нечто уникальное и впечатляющее!</motion.p>
                <motion.button custom={3} variants={animation} onClick={handleContactClick}>Мои контакты</motion.button>

            </div>
        </motion.div>
    </section>
}