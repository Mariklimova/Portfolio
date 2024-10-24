import style from './footer.module.css'

export default function Footer() {
    return <footer className={style.wrapper}>
        <p className={style.title}>contact me</p>
        <div className={style.line}></div>
        <nav className={style.icons_contacts}>
            <div className={style.linkedin}></div>
            <div className={style.github}></div>
            <div className={style.telegram}></div>
            <div className={style.instagram}></div>
        </nav>
    </footer>
}