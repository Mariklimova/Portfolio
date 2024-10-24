import style from './about.module.css'

export default function About() {
    return <>
        <div className={style.wrapper}>
            <div className={style.info}>
            <h2>Get in touch with me</h2>
            <p>I am a passionate Front-end developer currently in my third year of studying Informatics/Computer Science at Siliwangi University. Feel free to explore my portfolio to see the diverse projects I've completed. If you're interested in my work and would like me to bring your project to life, don't hesitate to reach out to me!</p>
            <button>Contact me</button>

            </div>
        </div>
    </>
}