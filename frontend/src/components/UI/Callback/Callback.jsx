import React from 'react'
import './Callback.scss'
import { CSSTransition } from 'react-transition-group';

const Callback = () => {
    const [showModal,setShowModal] = React.useState(false)

    const closeModal = () => {
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }
    return (
        <>
            <button onClick={openModal} className="callbackBtn">
                    Обратный звонок
            </button>
                <CSSTransition         
                    in={showModal}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    >
                    <div className="callbackModal">
                        <div className="callbackModal__header">
                            <span>Обратный звонок</span>    
                            <svg onClick={closeModal} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="0.5" y="35.5" width="35" height="35" rx="17.5" transform="rotate(-90 0.5 35.5)" fill="#EBEBEB" stroke="#EBEBEB"/>
                                <path d="M14 14L23 23" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 23L23 14" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>   
                        <div className="callbackModal__body">
                            <input type="text" placeholder="Ваше имя" />
                            <input type="text" placeholder="Телефон" />
                            <input type="text" placeholder="Удобное время" />
                            <button>Отправить</button>
                            <p>Нажимая "Отправить" вы соглашаетесь с <span>политикой обработки персональных данных</span> </p>
                        </div>
                    </div>
                </CSSTransition>
        </>
    )
}

export default Callback
