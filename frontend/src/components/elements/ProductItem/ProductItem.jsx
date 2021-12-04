import React from 'react'
import styles from './ProductItem.module.scss'
import product_image from '../../../img/prod1.jpg'
import classes from 'classnames'

const ProductItem = ({ item }) => {
    return (
        <div className={styles.product__item}>
            <div className={styles.product__image}>
                <img src={product_image} alt="Product image" />
            </div>
            <div className={styles.product__header}>
                <div className={styles.product__alts}>
                    <span className={styles.product__condition}>Новый</span>
                    <span className={styles.product__category}>ADVANTAGE</span>
                </div>
                <div className={styles.product__name}>
                    <span className={styles.product__title}>{item.mark} {item.model}</span>
                    <span className={styles.product__divider}>/</span>
                    <span className={styles.product__year}>{item.year}</span>
                </div>
                <div className={styles.product__milage}>
                    Пробег: {item.mileage}км.
                </div>
            </div>
            <div className={styles.product__body}>
                   <div className={styles.product__priceBlock}>
                        <p className={styles.product__mainPrice}>
                            <span className={styles.product__priceText}>Предварительная цена: </span>  
                            <span className={styles.product__priceNumber}>4 455 349₽</span>
                        </p>
                    </div> 

                    <div className={styles.product__iconsBlock}>
                        <ul className={styles.product__iconsList}>
                            <li className={styles.product__iconsItem}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3212 15.6795C17.3325 13.6681 17.9615 10.6568 16.9237 8.00779C16.7888 7.66366 16.4007 7.49408 16.0567 7.62893C15.7127 7.76375 15.5431 8.15191 15.6778 8.49585C16.5217 10.6497 16.0104 13.098 14.375 14.7333C13.0795 16.0289 11.2715 16.6184 9.50489 16.3872L11.4416 15.0931C11.7488 14.8878 11.8315 14.4723 11.6263 14.1651C11.4208 13.8579 11.0055 13.7753 10.6983 13.9805L7.52204 16.1028C7.37454 16.2014 7.27217 16.3545 7.23755 16.5286C7.20292 16.7026 7.23887 16.8832 7.33742 17.0307L9.45976 20.207C9.48474 20.2443 9.51281 20.2784 9.5434 20.3089C9.76447 20.53 10.1178 20.5718 10.3877 20.3915C10.6949 20.1862 10.7775 19.7708 10.5723 19.4636L9.40993 17.7241C11.5576 17.981 13.747 17.2537 15.3212 15.6795Z" fill="black"/>
                                    <path d="M8.89784 7.07743C8.92282 7.11477 8.95089 7.14883 8.98148 7.17942C9.20255 7.40049 9.55589 7.44231 9.82579 7.26198L13.002 5.13968C13.3092 4.9344 13.3919 4.51897 13.1866 4.21177L11.0643 1.03562C10.8589 0.728547 10.4436 0.645794 10.1364 0.851004C9.82916 1.05631 9.74653 1.47171 9.95178 1.77895L11.115 3.51978C8.96653 3.26399 6.77333 3.99217 5.20254 5.56296C3.19112 7.57439 2.56214 10.5857 3.60012 13.2347C3.63487 13.3233 3.68634 13.4003 3.74957 13.4635C3.93185 13.6458 4.21165 13.7135 4.46707 13.6135C4.81107 13.4786 4.98071 13.0905 4.84589 12.7465C4.00199 10.5928 4.51333 8.14445 6.14868 6.5091C7.44103 5.21675 9.25172 4.62597 11.0185 4.85591L9.08243 6.14952C8.77523 6.35479 8.6926 6.7702 8.89784 7.07743Z" fill="black"/>
                                </svg>
                            </li>
                            <li className={styles.product__iconsItem}>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.6879 12.661L13.831 11.6054L15.4402 10.6712C15.737 10.4989 15.8357 10.1223 15.6607 9.83009C15.4857 9.53796 15.1033 9.44074 14.8064 9.61298L12.5898 10.8999L9.24768 8.99996L12.5892 7.10038L14.8065 8.3871C14.9059 8.44484 15.015 8.4722 15.1227 8.4722C15.3363 8.4722 15.5443 8.36409 15.6607 8.16974C15.8356 7.87752 15.7368 7.50095 15.44 7.32863L13.8306 6.39473L15.6879 5.33896C15.9863 5.16935 16.0885 4.79367 15.9162 4.4999C15.744 4.20604 15.3624 4.10539 15.064 4.27508L13.2072 5.33069L13.1903 3.49114C13.1872 3.15191 12.9046 2.87779 12.5609 2.88246C12.2163 2.88549 11.9395 3.16297 11.9427 3.5022L11.9659 6.03625L8.6239 7.93608V4.13675L10.8646 2.88991C11.1645 2.723 11.2702 2.34831 11.1007 2.0529C10.9312 1.75757 10.5505 1.65339 10.2506 1.82038L8.6239 2.72562V0.614248C8.6239 0.275019 8.34458 0 8.00004 0C7.65551 0 7.37618 0.275019 7.37618 0.614248V2.72562L5.74949 1.82047C5.44937 1.65347 5.06898 1.75757 4.89938 2.05298C4.72986 2.34831 4.83558 2.72308 5.13553 2.88999L7.3761 4.13684V7.93608L4.03413 6.03625L4.05733 3.5022C4.0605 3.16297 3.78367 2.88549 3.43913 2.88246C3.43722 2.88246 3.43539 2.88246 3.43339 2.88246C3.09152 2.88246 2.81278 3.15379 2.8097 3.49122L2.79281 5.33069L0.935958 4.27508C0.637587 4.10539 0.256035 4.20612 0.0837667 4.4999C-0.0885017 4.79367 0.013728 5.16935 0.312099 5.33896L2.16929 6.39473L0.559647 7.3288C0.262856 7.50103 0.164037 7.87761 0.338967 8.16991C0.455337 8.36425 0.663374 8.47236 0.877066 8.47236C0.984703 8.47236 1.09375 8.44492 1.19324 8.38727L3.41077 7.10054L6.75241 9.00012L3.41018 10.9L1.19324 9.6129C0.896614 9.44066 0.51398 9.5378 0.338967 9.83001C0.163953 10.1222 0.26269 10.4988 0.55948 10.671L2.16887 11.6054L0.312016 12.6609C0.0136449 12.8305 -0.0885849 13.2062 0.0836835 13.4999C0.199222 13.697 0.408922 13.8071 0.624528 13.8071C0.730334 13.8071 0.837638 13.7806 0.935875 13.7248L2.79273 12.6691L2.80962 14.5088C2.81269 14.8461 3.09143 15.1175 3.43331 15.1175C3.43522 15.1175 3.43714 15.1175 3.43905 15.1175C3.78359 15.1144 4.06041 14.837 4.05725 14.4977L4.03404 11.9636L7.3761 10.0638V13.8632L5.13553 15.11C4.83558 15.2769 4.72986 15.6516 4.89938 15.947C5.01409 16.1469 5.22545 16.2591 5.44305 16.2591C5.54703 16.2591 5.6525 16.2335 5.74949 16.1795L7.37618 15.2744V17.3858C7.37618 17.725 7.65551 18 8.00004 18C8.34458 18 8.6239 17.725 8.6239 17.3858V15.2744L10.2506 16.1795C10.3476 16.2335 10.453 16.2591 10.557 16.2591C10.7746 16.2591 10.986 16.1469 11.1007 15.947C11.2702 15.6517 11.1645 15.2769 10.8646 15.11L8.6239 13.8632V10.0638L11.9659 11.9636L11.9421 14.4976C11.9388 14.8369 12.2156 15.1144 12.5601 15.1175C12.5621 15.1176 12.564 15.1176 12.566 15.1176C12.9078 15.1176 13.1866 14.8463 13.1897 14.509L13.207 12.6691L15.0641 13.7248C15.1624 13.7807 15.2697 13.8072 15.3755 13.8072C15.5911 13.8072 15.8008 13.697 15.9163 13.5C16.0886 13.2062 15.9864 12.8306 15.6879 12.661Z" fill="black"/>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <button className={styles.product__checkBtn}>Проверить наличие</button>
                    <button className={styles.product__signBtn}>Записаться на тест-драйв</button>
            </div>
        </div>
    )
}

export default ProductItem