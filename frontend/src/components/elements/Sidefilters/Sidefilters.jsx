import React from 'react'
import styles from './Sidefilters.module.scss'
import SidefiltersItem from './SidefiltersItem'

const Sidefilters = ({showSideFilters}) => {
    // const [ activeFilter,setActiveFilter ] = React.useState(null)
    const [ filters,setFilters ] = React.useState([
        {
            title: 'Марка',
            variants: ['Bmw','Audi','Kia','McLaren']
        }
    ])
    return (
            <div className={styles.main__sidefilters}>
                <ul>
                    {filters.map((item,index) => (
                        <SidefiltersItem key={index} title={item.title} variants={item.variants} />
                    ))}
                </ul>
            </div>
    )
}

export default Sidefilters
