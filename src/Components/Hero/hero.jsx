import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import 'swiper/css/effect-fade';
import "../Hero/hero.css"
import 'swiper/css';
function Hero() {
  const navigate = useNavigate()
  const navigation = useNavigate()
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="over-lay"></div>
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={2000}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/Images/background1.jpg" alt="bayern-background" className="hero-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Images/background5.jpg" alt="bayern-background" className="hero-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Images/background4 (3).jpg" alt="bayern-background" className="hero-img" />
            </SwiperSlide>
          </Swiper>

          <div className="hero-text">
            <motion.h1 className="hero-title"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              FC Bayern-München | The Pride of German Football
            </motion.h1>
            <motion.p className="hero-description"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}> Discover the players, trohies,
              and unforgettable moments in the history of the greatest club in German football .
            </motion.p>
            <motion.div className="hero-buttons"
              initial={{ opacity: 0, y: 110 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="hero-btn-left" type="submit" onClick={()=> navigation("/matches")}> Latest Matches </button>
              <button className="hero-btn-right" type="submit" onClick={() => navigate("/team")}> Starting XI </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero