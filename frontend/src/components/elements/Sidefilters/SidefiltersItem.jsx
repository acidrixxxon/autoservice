import React from 'react'
import styles from './Sidefilters.module.scss'
import { CSSTransition } from 'react-transition-group'

const SidefiltersItem = ({title,variants}) => {
    const [ showVariants,setShowVariants ] = React.useState(false)

    const toggleHandler = () => {
        setShowVariants(!showVariants)
    }

    return (
        <li className={styles.sidefilters__item}>
        <div className={styles.sidefilters__title} onClick={() => toggleHandler()}>
            <span>{title}</span>
            {showVariants 
                ? <svg style={{"transform": "rotate(-180deg)"}} width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L6 15L11 10" stroke="black" strokeWidth="1.2"/>
                  </svg> 
                : <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L6 15L11 10" stroke="black" strokeWidth="1.2"/>
                  </svg>}
        </div>
        <CSSTransition         
            in={showVariants}
            timeout={200}
            classNames="alert"
            unmountOnExit>
                
            <div className={styles.sidefilters__variants}>
            <ul>
                {variants.map((item,index) => (
                    <li key={index}>
                        <span className={styles.sidefilters__checkbox}>
                            <input type="checkbox" />
                            </span>
                        <span className={styles.sidefilters__text}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        </CSSTransition>
    </li>
    )
}

export default SidefiltersItem
