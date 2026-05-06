import { Swiper, SwiperSlide } from "swiper/react"
import { useSearchParams } from "react-router-dom";
import { Navigation } from 'swiper/modules'
import { players } from "../../Data/players";
import { motion } from "framer-motion";
import 'swiper/css/navigation';
import "./playerCard.css"
import 'swiper/css';
function PlayerCard() {
    const [searchParams] = useSearchParams();
    /* Player-Categories */
    const query = searchParams.get("search")?.toLowerCase().trim() || "";
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(query)
    );
    const starters = filteredPlayers.filter(player => player.starter)
    const goalkeepers = starters.filter(player => player.position.trim() === "GK")
    const defenders = starters.filter(player => player.position.trim() === "LB" || player.position.trim() === "CB" || player.position.trim() === "RB")
    const midfielders = starters.filter(player => player.position.trim() === "CDM" || player.position.trim() === "CM")
    const attackingMidfielders = starters.filter(player => player.position.trim() === "AM" || player.position.trim() === "CAM" || player.position.trim() === "RW" || player.position.trim() === "LW")
    const forwards = starters.filter(player => player.position.trim() === "ST")
    const subs = filteredPlayers.filter(player => !player.starter)

    /* ToTeam */
    const scrollToTeam = () => {
        const team = document.getElementById("starting")
        if (team) {
            team.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <section className="team-section">
                <motion.div className="section-title"
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    <h2><i> Meet The Squad </i></h2>
                    <span className="line"></span>
                    <i className="down bi bi-chevron-double-down" onClick={scrollToTeam}></i>
                </motion.div>
                < div className="information" id="starting">
                    <div className="trainer">
                        <img className="kompany" src="/Images/Kompany.png" alt="Kompany" />
                        <h4 className="name-trainer"> Vincent Kompany </h4>
                    </div>
                    <div className="goalkeeper">
                        {goalkeepers.map(player => (
                            <div className="player-card" key={player.id}>
                                <img className="img-card" src={player.image} alt={player.name} />
                                <h3 className="name-card">{player.name}</h3>
                                <p className="position-card">{player.position}</p>
                                <h4 className="number-card">{player.number}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="defenders">
                        {defenders.map(player => (
                            <div className="player-card" key={player.id}>
                                <img className="img-card" src={player.image} alt={player.name} />
                                <h3 className="name-card">{player.name}</h3>
                                <p className="position-card">{player.position}</p>
                                <h4 className="number-card">{player.number}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="midfielders">
                        {midfielders.map(player => (
                            <div className="player-card" key={player.id}>
                                <img className="img-card" src={player.image} alt={player.name} />
                                <h3 className="name-card">{player.name}</h3>
                                <p className="position-card">{player.position}</p>
                                <h4 className="number-card">{player.number}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="attackingMidfielders">
                        {attackingMidfielders.map(player => (
                            <div className="player-card" key={player.id}>
                                <img className="img-card" src={player.image} alt={player.name} />
                                <h3 className="name-card">{player.name}</h3>
                                <p className="position-card">{player.position}</p>
                                <h4 className="number-card">{player.number}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="forwards">
                        {forwards.map(player => (
                            <div className="player-card" key={player.id}>
                                <img className="img-card" src={player.image} alt={player.name} />
                                <h3 className="name-card">{player.name}</h3>
                                <p className="position-card">{player.position}</p>
                                <h4 className="number-card">{player.number}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={5}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },

                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },

                        576: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },

                        767: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },

                        991: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },

                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 25
                        }
                    }}

                    className="mySwiper"
                >
                    <div className="subs">
                        {subs.map(player => (
                            <SwiperSlide className="player-sub-card" key={player.id}>
                                <img className="img-sub-card" src={player.image} alt={player.name} />
                                <h3 className="name-sub-card"> {player.name} </h3>
                                <p className="position-sub-card"> {player.position} </p>
                                <h4 className="number-sub-card"> {player.number} </h4>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </section >
        </>
    )
}

export default PlayerCard