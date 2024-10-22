import style from './preview.module.css';
import foto from './assets/Avatar.svg'

export default function Preview() {

    const arr_roles = [{
        id: 1, name: 'Frontend', description: 'Briefing, wireframe, UX, UI and branding.', roles_icon: style.icon_1
    },
    { id: 2, name: 'Backend', description: 'Briefing, wireframe, UX, UI and branding.', roles_icon: style.icon_2 },
    { id: 3, name: 'Database Architect', description: 'Briefing, wireframe, UX, UI and branding.', roles_icon: style.icon_3 }]

    return <>
        <div className={style.wrapper}>
            <div className={style.visit_card}>
                <div className={style.about_me}>
                    <p>Hi, My name is Agil Zulfa</p>
                    <h1>Full Stack Developer</h1>
                    <p>focus in harnessing the power of Next.js with Express.js and REST API to craft dynamic web applications. creating seamless user experiences that bring ideas to life.</p>
                </div>
                <img src={foto} alt="foto" />
            </div>
            <div className={style.skills}>
                <div className={style.roles}>
                    {arr_roles.map((el) => <div key={el.id} className={style.roles_item}>
                        <div className={el.roles_icon}></div>
                        <div className={style.info_item}>
                        <h3 className={style.roles_name}>{el.name}</h3>
                        <p>{el.description}</p>
                        </div>
                    </div>)}
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
}