import style from './header.module.css'

export default function Header() {
  return <>
  <nav className={style.wrapper}>
    <div className={style.images}>
        <div className={style.linkedin}></div>
        <div className={style.github}></div>
        <div className={style.telegram}></div>
    </div>
    <div className={style.info}>
        <p>About</p>
        <p>What I do</p>
        <p>My Project</p>
    </div>
  </nav>
  </>  
}