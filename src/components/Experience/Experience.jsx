import style from './experience.module.css'

export default function Experience() {
const arr_experience = [{id:1, title:'Front-End Development', description:'Build Interactive UI with Next.JS'}, {id:2, title:'REST API', description:''}, {id:3,title:'Back-End Development', description:'Dynamic App with Express.JS and SQL' }]
    return <>
        <div className={style.wrapper}>
            <div className={style.images}>
                <div className={style.react}></div>
                <div className={style.js}></div>
                <div className={style.next}></div>
            </div>
            <h2 className={style.title}>What I do</h2>
            <p>as a fullstack</p>
            <div className={style.exp_items}>
                <div className={style.border_item}>
                    {arr_experience.map((el)=><div className={style.info_item} key={el.id}>
                    <h3 className={style.title_item}>{el.title}</h3>
                    <p className={style.description_item}>{el.description}</p>
                    </div>)}
                </div>
            </div>
        </div>
    </>
}