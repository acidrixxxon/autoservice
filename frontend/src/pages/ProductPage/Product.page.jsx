import React from 'react'
import { useParams } from 'react-router'
import styles from './ProductPage.module.scss'
import { Link } from 'react-router-dom'
import img1 from '../../img/bmw1.jpg'

const ProductPage = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div className={styles.productPage}>
            <div className={styles.container}>
                <div className={styles.productPage__navlinks__block}>
                    <ul className={styles.navlinks__list}>
                        <li className={styles.navlinks__item}>
                            <Link to="/">Главная</Link>
                        </li>
                        <span className={styles.navlinks__divider}>/</span>
                        <li className={styles.navlinks__item}>
                            <Link to="/catalog">Все автомобили</Link>
                        </li>
                        <span className={styles.navlinks__divider}>/</span>
                        <li className={styles.navlinks__item}>
                            BMW X5
                        </li>
                    </ul>
                </div>

                <div className={styles.productPage__prodtitle__block}>
                    <h1 className={styles.prodtitle__text}>Новый BMW X1 XDrive28i / 2020</h1>
                    <span className={styles.prodtitle__tag}>ADVANTAGE</span>
                </div>

                <section>
                    <div className={styles.mainBlock}>
                        <div className={styles.mainBlock__slider}>
                            <ul className={styles.slider__topSlider}>
                                <span className={styles.topSlider__leftArrow}>
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L2 6L7 11" stroke="#3E3EAC" stroke-width="2"/>
                                    </svg>
                                </span>
                                <span className={styles.topSlider__rightArrow}>
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L1 11" stroke="#3E3EAC" stroke-width="2"/>
                                    </svg>
                                </span>
                                <li className={styles.topSlider__item}>
                                    <img src={img1} alt="bmw1" className={styles.topSlider__image} />
                                </li>
                            </ul>

                            <ul className={styles.slider__bottomSlider}>
                                <span className={styles.bottomSlider__leftArrow}>
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L2 6L7 11" stroke="#3E3EAC" stroke-width="2"/>
                                    </svg>
                                </span>
                                <span className={styles.bottomSlider__rightArrow}>
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L1 11" stroke="#3E3EAC" stroke-width="2"/>
                                    </svg>
                                </span>
                                <li className={styles.bottomSlider__item}>
                                    <img src="https://cdn.motor1.com/images/mgl/lAOqE/s1/2019-bmw-x5-xdrive45e.jpg" alt="img" />
                                </li>
                                <li className={styles.bottomSlider__item}>
                                    <img src="data:image/jpeg;base64,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" alt="img" />
                                </li>
                                <li className={styles.bottomSlider__item}>
                                    <img src="https://cdn.motor1.com/images/mgl/lAOqE/s1/2019-bmw-x5-xdrive45e.jpg" alt="img" />
                                </li>
                                <li className={styles.bottomSlider__item}>
                                    <img src="data:image/jpeg;base64,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" alt="img" />
                                </li>
                            </ul>
                        </div>

                        <div className={styles.mainBlock__specificationsBlock}>
                            <h3 className={styles.specificationsBlock__title}>Характеристики</h3>
                            <ul className={styles.specificationsBlock__list}>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Тип кузова</span>
                                    <span className={styles.specificationsBlock__value}>Седан</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Цвет кузова</span>
                                    <span className={styles.specificationsBlock__value}>Белый</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Комплектация</span>
                                    <span className={styles.specificationsBlock__value}>Advantage</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Пробег</span>
                                    <span className={styles.specificationsBlock__value}>0 км.</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>ПТС</span>
                                    <span className={styles.specificationsBlock__value}>Оригинал</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Год выпуска</span>
                                    <span className={styles.specificationsBlock__value}>2021</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Коробка передач</span>
                                    <span className={styles.specificationsBlock__value}>Автомат</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Тип кузова</span>
                                    <span className={styles.specificationsBlock__value}>Седан</span>
                                </li>
                                <li className={styles.specificationsBlock__item}>
                                    <span className={styles.specificationsBlock__name}>Тип кузова</span>
                                    <span className={styles.specificationsBlock__value}>Седан</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.mainBlock__tradeInBlock}>
                            <h2 className={styles.tradeInBlock__title}>
                                Выгодный Trade in  вместе с СИЛЬВЕР    
                            </h2>
                            <button className={styles.tradeInBlock__button}>
                                Оценить свой авто
                            </button>
                        </div>

                        <div className={styles.mainBlock__reviewsBlock}>
                            <h2 className={styles.reviewsBlock__title}>Отзывы клиентов</h2>
                            <ul className={styles.reviewsBlock__reviewsList}>
                                <li className={styles.reviewsBlock__reviewsItem}>
                                    <div className={styles.reviewsItem__header}>
                                        <div className={styles.reviewsItem__authorPhoto}>
                                            <img src="http://localhost:3000/images/reviewauthor_img1.png" alt="img"/>
                                        </div>
                                        <div className={styles.reviewsItem__authorInfo}>
                                            <span className={styles.authorInfo__name}>Наталья Иванова</span>
                                            <span className={styles.authorInfo__rang}>Местный эксперт</span>
                                            <ul className={styles.authorInfo__rating}>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.reviewsItem__body}>
                                        <p className={styles.reviewsItem__reviewText}>
                                            Замечательный автоцентр. Особенно мне понравился менеджер Уелданов Альберт. Это мастер своего дела. Рассказал подробно про все интересующие автомобили и их комплектации. Провёл отличный тест драйв. Помог подобрать автомобиль на очень выгодных условиях...
                                        </p>
                                        <span className={styles.reviewsItem__date}>2 месяца назад</span>
                                    </div>
                                </li>
                                <li className={styles.reviewsBlock__reviewsItem}>
                                    <div className={styles.reviewsItem__header}>
                                        <div className={styles.reviewsItem__authorPhoto}>
                                            <img src="http://localhost:3000/images/reviewauthor_img1.png"  alt="img"/>
                                        </div>
                                        <div className={styles.reviewsItem__authorInfo}>
                                            <span className={styles.authorInfo__name}>Наталья Иванова</span>
                                            <span className={styles.authorInfo__rang}>Местный эксперт</span>
                                            <ul className={styles.authorInfo__rating}>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.reviewsItem__body}>
                                        <p className={styles.reviewsItem__reviewText}>
                                            Замечательный автоцентр. Особенно мне понравился менеджер Уелданов Альберт. Это мастер своего дела. Рассказал подробно про все интересующие автомобили и их комплектации. Провёл отличный тест драйв. Помог подобрать автомобиль на очень выгодных условиях...
                                        </p>
                                        <span className={styles.reviewsItem__date}>2 месяца назад</span>
                                    </div>
                                </li>
                                <li className={styles.reviewsBlock__reviewsItem}>
                                    <div className={styles.reviewsItem__header}>
                                        <div className={styles.reviewsItem__authorPhoto}>
                                            <img src="http://localhost:3000/images/reviewauthor_img1.png"  alt="img" />
                                        </div>
                                        <div className={styles.reviewsItem__authorInfo}>
                                            <span className={styles.authorInfo__name}>Наталья Иванова</span>
                                            <span className={styles.authorInfo__rang}>Местный эксперт</span>
                                            <ul className={styles.authorInfo__rating}>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.60929 0.745358C6.98043 0.0181071 8.01958 0.0181088 8.39072 0.74536L9.81681 3.53979C9.96211 3.82451 10.2348 4.02261 10.5505 4.07281L13.6488 4.56558C14.4551 4.69382 14.7763 5.68211 14.1993 6.25982L11.9823 8.47964C11.7564 8.70581 11.6523 9.02634 11.7021 9.34209L12.1909 12.4411C12.3181 13.2476 11.4774 13.8584 10.7497 13.4882L7.95342 12.0657C7.66851 11.9207 7.33149 11.9207 7.04658 12.0657L4.25032 13.4882C3.5226 13.8584 2.68191 13.2476 2.80912 12.4411L3.29791 9.34209C3.34771 9.02634 3.24357 8.70581 3.01768 8.47964L0.800708 6.25982C0.22374 5.68211 0.544856 4.69382 1.3512 4.56558L4.44955 4.07281C4.76523 4.02261 5.03789 3.82451 5.18319 3.53979L6.60929 0.745358Z" fill="#FF6B00"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.reviewsItem__body}>
                                        <p className={styles.reviewsItem__reviewText}>
                                            Замечательный автоцентр. Особенно мне понравился менеджер Уелданов Альберт. Это мастер своего дела. Рассказал подробно про все интересующие автомобили и их комплектации. Провёл отличный тест драйв. Помог подобрать автомобиль на очень выгодных условиях...
                                        </p>
                                        <span className={styles.reviewsItem__date}>2 месяца назад</span>
                                    </div>
                                </li>
                            </ul>
                            <button className={styles.reviewsBlock__readAllReviews}>
                                Читать все отзывы
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L1 11" stroke="white" stroke-width="2"/>
                                </svg>
                            </button>
                        </div>

                        <div className={styles.mainBlock__recommendationsBlock}>
                            <h2 className={styles.recommendationsBlock__title}>Вам могут понравиться</h2>
                            <ul className={styles.recommendationsBlock__recList}>
                                <li className={styles.recommendationsBlock__recItem}>
                                    <img src="http://localhost:3000/images/rec1__img.jpg" alt="rec_photo" className={styles.recItem__photo} />
                                    <div className={styles.recItem__body}>
                                        <div className={styles.recItem__tags}>
                                            <span className={styles.recItem__tag}>С пробегом</span>
                                            <span className={styles.recItem__tag}>Sport</span>
                                        </div>
                                        <h2 className={styles.recItem__name}>Kia sportage 2021</h2>
                                        <span className={styles.recImte__mileage}>Пробег: 15 225 км.</span>
                                    </div>
                                </li>

                                <li className={styles.recommendationsBlock__recItem}>
                                    <img src="http://localhost:3000/images/rec2__ing.jpg" alt="rec_photo" className={styles.recItem__photo} />
                                    <div className={styles.recItem__body}>
                                        <div className={styles.recItem__tags}>
                                            <span className={styles.recItem__tag}>С пробегом</span>
                                            <span className={styles.recItem__tag}>Sport</span>
                                        </div>
                                        <h2 className={styles.recItem__name}>Kia sportage 2021</h2>
                                        <span className={styles.recImte__mileage}>Пробег: 15 225 км.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.sideBlock}>
                        <div className={styles.sideBlock__priceBlock}>
                                <h3 className={styles.priceBlock__title}>Стоимость</h3>

                                <div className={styles.priceBlock__discounts}>
                                    <div className={styles.priceBlock__oldPrice}>
                                        Старая цена
                                        <span className={styles.priceBlock__oldPriceValue}>3 535 870 ₽</span>
                                    </div>
                                    <div className={styles.priceBlock__benefit}>
                                        Ваша выгода
                                        <span className={styles.priceBlock__benefitValue}>455 870 ₽</span>
                                    </div>
                                    <div className={styles.priceBlock__availability}>
                                        В наличии
                                        <span className={styles.priceBlock__avalabilityValue}>4 модели</span>
                                    </div>
                                </div>

                                <div className={styles.priceBlock__prePrice}>
                                    <h3 className={styles.prePrice__text}>Предварительная цена</h3>
                                    <span className={styles.prePrice__value}>3 080 000 ₽</span>
                                </div>

                                <div className={styles.priceBlock__buttons}>
                                    <button className={[styles.priceBlock__buttonReserv,styles.priceBlock__button].join(' ')}>Зарезервировать</button>
                                    <button className={[styles.priceBlock__buttonTestdrive,styles.priceBlock__button].join(' ')}>Тест-драйв</button>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductPage
