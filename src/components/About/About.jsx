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
                <motion.p custom={2} variants={animation}>если, Вам нужен увлечённый Front-end разработчик, который стремиться создавать не только функциональные, но красивые и удобные интерфейсы, которые привлекают пользователей и повышают их вовлечённость.
В моём портфолио Вы найдёте проекты, в которых я использовал современные технологии и подходы. Если Вы ищете разработчика, готового внедрять инновации и работать над интересными проектами, буду рад обсудить сотрудничество.
 Давайте вместе создадим нечто уникальное и впечатляющее!С нетерпением жду возможности пообщаться!</motion.p>
                <motion.button custom={3} variants={animation} onClick={handleContactClick}>Мои контакты</motion.button>

            </div>
        </motion.div>
    </section>
}