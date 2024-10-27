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
    return <>
        <motion.div
            initial='hiddenHorizontal'
            whileInView='visibleHorizontal'
            viewport={{ once: true }}
            className={style.wrapper}>
            <div className={style.info}>
                <motion.h2 custom={1} variants={animation}>Свяжитесь со мной</motion.h2>
                <motion.p custom={2} variants={animation}>Я заитересованный разработчик Front-end. Не стесняйтесь изучать мое портфолио, чтобы увидеть разнообразные проекты, которые я выполнил. Если вас заинтересовала моя работа и вы хотите, чтобы я воплотил ваш проект в жизнь, не стесняйтесь обращаться ко мне!</motion.p>
                <motion.button custom={3} variants={animation} onClick={handleContactClick}>Мои контакты</motion.button>

            </div>
        </motion.div>
    </>
}