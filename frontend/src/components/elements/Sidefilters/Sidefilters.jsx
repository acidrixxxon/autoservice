import React from 'react'
import styles from './Sidefilters.module.scss'
import SidefiltersItem from './SidefiltersItem'

const Sidefilters = ({ filtersprops }) => {
    const [ filters,setFilters ] = React.useState(filtersprops
    )
    console.log(filtersprops)
    return (
            <div className={styles.main__sidefilters}>
                <ul>
                    {filters.map((item,index) => (
                        <SidefiltersItem key={index} title={item.title} variants={item.variants} idname={item.name} />
                    ))}
                </ul>
            </div>
    )
}

export default Sidefilters
