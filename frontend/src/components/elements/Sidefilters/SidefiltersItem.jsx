import React from 'react'
import styles from './Sidefilters.module.scss'
import { CSSTransition } from 'react-transition-group'
import { useDispatch } from 'react-redux'
import { SET__FILTERS } from '../../../redux/constants/ProductConstans'

const SidefiltersItem = ({title,variants,idname}) => {
    const [ showVariants,setShowVariants ] = React.useState(false)
    const [ activeCheckbox,setActiveCheckbox ] = React.useState(false)

    const dispatch = useDispatch()
    const { products } = useSelector(state => state)
    const { filters } = products

    React.useEffect(() => {
        // if (filters.new ===)
    },[])

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
                            <input type="checkbox" onClick={() => dispatch({type: SET__FILTERS,payload: {idname,value: item}})} />
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
