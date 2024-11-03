import { useEffect, useState } from 'react';
import style from './header.module.css';


export default function Header() {
  const [isShowBurger, setShowBurger] = useState(false);
  
  useEffect(() => {
    document.documentElement.style.overflow = isShowBurger ? 'hidden' : 'auto';
  }, [isShowBurger]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return <>
    <nav className={style.wrapper}>
      <div className={style.images}>
        <a href="https://www.linkedin.com/in/marina-klimova-685416286"><div className={style.linkedin}></div></a>
        <a href="https://github.com/Mariklimova"><div className={style.github}></div></a>
        <a href="https://t.me/MariKlimovaDev"><div className={style.telegram}></div></a>
        <div className={style.email}></div>
      </div>
      <div className={style.info}>
        <p onClick={() => handleScrollTo('about')}>Обо мне</p>
        <p onClick={() => handleScrollTo('experience')}>Опыт работы</p>
        <p onClick={() => handleScrollTo('projects')}>Мои проекты</p>
      </div>

      <div className={style.burger}>
        <div className={style.burgerIcon} onClick={() => setShowBurger(!isShowBurger)}></div>

        {isShowBurger && (
          <div className={style.burgerMenu}>
            <div className={style.closeIcon} onClick={() => setShowBurger(false)}></div>
            <p onClick={() => handleScrollTo('about')}>Обо мне</p>
            <p onClick={() => handleScrollTo('experience')}>Опыт работы</p>
            <p onClick={() => handleScrollTo('projects')}>Мои проекты</p>
          </div>
        )}
      </div>
    </nav>
  </>
}