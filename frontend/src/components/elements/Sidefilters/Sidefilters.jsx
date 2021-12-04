import React from 'react'
import styles from './Sidefilters.module.scss'
import SidefiltersItem from './SidefiltersItem'
import { CSSTransition } from 'react-transition-group'

const Sidefilters = ({showSideFilters}) => {
    return (
            <div className={styles.main__sidefilters}>
                <ul>
                    <SidefiltersItem />
                    <SidefiltersItem />
                    <SidefiltersItem />
                    <SidefiltersItem />
                </ul>
            </div>
    )
}

export default Sidefilters
