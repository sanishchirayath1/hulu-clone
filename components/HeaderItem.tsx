import HeaderItemStyle from '../styles/HeaderItem.module.scss'

function HeaderItem({title, Icon}) {
    return (
        <div className={HeaderItemStyle.container}>
            <Icon className={HeaderItemStyle.icon}/>
            <p>{title}</p>
        </div>
    )
}

export default HeaderItem