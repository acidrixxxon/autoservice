import React from 'react'
import styles from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
                    <svg className={styles.spinner} role="alert" aria-live="assertive">
          <circle cx="30" cy="30" r="20" className={styles.circle} />
        </svg>
        </div>

    )
}

export default Spinner
