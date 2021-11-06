import React from 'react'
import './Slider.scss'
import img1 from '../../../img/Group46.png'

const Slider = () => {
    const img = [
        <img key={img1} src={img1} />,
        <img key={img1} src={img1} />,
        <img key={img1} src={img1} />
    ]
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 3000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])
     
    // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return (
<div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
    )
}

export default Slider
