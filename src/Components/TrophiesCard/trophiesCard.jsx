import { major } from "../../Data/trophies"
import { useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import "../../Components/TrophiesCard/trophiesCard.css"
function TrophiesCard() {
    const [openModal, setOpenModal] = useState(false)
    const [selectTrophy, setSelectTrophy] = useState(null)

    return (
        <>
            <section className="trophies-section">
                <div className="trophies-title">
                    <h2><i> Trophies </i></h2>
                </div>
                <div className="trophies-content-cards">
                    {major.map((troph) => (
                        <div className="major-cards" key={troph.id}>
                            <img className="trophies-img-card" src={troph.img} alt={troph.name} />
                            <h3 className="trophies-title-card"> {troph.name} </h3>
                            <span className="trophies-num-card"> {troph.titles} </span>
                            <button className="trophies-btn-card" onClick={() => { setOpenModal(true); setSelectTrophy(troph) }}> View Details </button>
                        </div>
                    ))}
                </div>
                {
                    openModal && selectTrophy && (
                        <div className="modal-overlay">
                            <div className="modal-content-card" key={selectTrophy.id}>
                                <button onClick={() => setOpenModal(false)} className="modal-close"> <i className="bi bi-x-lg"></i> </button>
                                <div className="rippon">
                                    <i className={`bi ${selectTrophy.icon}`} ></i>
                                    <span className="modal-trophies-num-card"> <i> {selectTrophy.titles} </i> </span>
                                </div>
                                <img className="modal-trophies-img-card" src={selectTrophy.img} alt={selectTrophy.name} />
                                <h3 className="modal-trophies-title-card"> <i> {selectTrophy.name} </i> </h3>
                                <h4 className="modal-trohies-first-card"> <i> First Title : {selectTrophy.firstTitle} </i> </h4>
                                <p className="modal-trophies-desc-card"> <i> {selectTrophy.description} </i> </p>
                            </div>
                        </div>
                    )
                }
                <div className="museum-banner">
                    <div className="linear">
                        <span> Fc Bayern Museum </span> <i className="bi bi-dribbble"></i>
                        <span> 34 Bundesliga </span> <i className="bi bi-dribbble"></i>
                        <span> Champions League Glory </span> <i className="bi bi-dribbble"></i>
                        <span> Mia San Mia </span>
                    </div>
                </div>
                <div className="museum-section">
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        modules={[EffectFade, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        className="mySwiperr"
                    >
                        <SwiperSlide>
                            <img src="/Images/museum.jpg" alt="museum" className="museum-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/Images/museum3.jpg" alt="museum" className="museum-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/Images/museum2.jpg" alt="museum" className="museum-img" />
                        </SwiperSlide>
                    </Swiper>
                    <img src="/Images/museum3.jpg" alt="museum-img" className="museum-midea-img"/>
                </div>
            </section >
        </>
    )
}

export default TrophiesCard