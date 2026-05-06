import { palyersData } from "../../Data/gallery"
import { legendsData } from "../../Data/gallery"
import { momentsData } from "../../Data/gallery";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from "react";
import "../../Components/Gallery/img.css"
import 'swiper/css/navigation';
import 'swiper/css';
function Img() {
    const playersRef = useRef(null)
    const legendsRef = useRef(null)
    const arenaRef = useRef(null)
    const momentsRef = useRef(null)
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const toTop = useRef(null)
    const scrollToTop = () => {
        if (toTop.current) {
            toTop.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <section className="gallery-section" ref={toTop}>
                <div className="gallery-title">
                    <h2><i> Gallery </i></h2>
                </div>
                <div className="hero-img-team">
                    <img src="/Images/Team.png" alt="team" />
                    <div className="team-overlay">
                        <div className="overlay-text">
                            <h4> The <span> Bavarin </span> </h4>
                            <p> First <span> Team </span>  </p>
                        </div>
                    </div>
                </div>
                <div className="gallery-option">
                    <ul className="gallery-list">
                        <li> <button> All  </button></li>
                        <li> <button onClick={() => scrollToSection(playersRef)}> Players </button> </li>
                        <li> <button onClick={() => scrollToSection(legendsRef)}> Legends </button> </li>
                        <li> <button onClick={() => scrollToSection(arenaRef)}> Allianz Arena </button> </li>
                        <li> <button onClick={() => scrollToSection(momentsRef)}> Moments </button> </li>
                    </ul>
                </div>
                <div className="first-images-title">
                    <h3> Players </h3>
                </div>
                <div className="players-squad" ref={playersRef}>
                    {palyersData.map((squad) => (
                        <div className="players-squad-cards" key={squad.id}>
                            <img className="squad-image" src={squad.image} alt={squad.name} />
                            <div className="squad-overlay">
                                <div className="overlay-squad-text">
                                    <h3 className="squad-cards-name"> {squad.name} </h3>
                                    <p className="squad-cards-position"> {squad.position} </p>
                                    <p className="squad-cards-value"> {squad.value} {squad.type} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="images-title">
                    <h3> Legends </h3>
                </div>
                <div className="legends" ref={legendsRef}>
                    {legendsData.map((legend) => (
                        <div className="legends-cards" key={legend.id}>
                            <img className="legends-img" src={legend.image} alt={legend.name} />
                            <div className="legends-overlay">
                                <div className="legends-overlay-text">
                                    <h3 className="legends-cards-name"> {legend.name} </h3>
                                    <p className="legends-cards-years"> {legend.years} </p>
                                    <p className="legends-cards-value"> {legend.value} {legend.type} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="images-title">
                    <h3> Allianz Arena </h3>
                </div>
                <div className="allianz" ref={arenaRef}>
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src="/Images/aliianz-gallery.png" alt="allianz-stadium" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/allianz.jpg" alt="allianz-stadium" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/allianz2.jpg" alt="allianz-stadium" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/allianz3.jpg" alt="allianz-stadium" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/allianz4.jpg" alt="allianz-stadium" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="images-title">
                    <h3> Moments </h3>
                </div>
                <div className="moments" ref={momentsRef}>
                    {momentsData.map((moment) => (
                        <div className="moments-cards" key={moment.id}>
                            <img className="moments-image" src={moment.image} alt={moment.desc} />
                            <div className="moments-overlay">
                                <div className="moments-overlay-text">
                                    <h3 className="moments-cards-name"> {moment.desc} </h3>
                                    <p className="moments-cards-years"> {moment.year} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="scroll">
                    <button className="top" onClick={()=> scrollToTop(toTop)}> Scroll To Top <i className="bi bi-arrow-up-circle"></i> </button>
                </div>
            </section>
        </>
    )
}

export default Img