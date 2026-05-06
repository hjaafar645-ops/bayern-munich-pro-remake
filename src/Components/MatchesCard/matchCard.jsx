import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { matches } from "../../Data/matches"
import 'swiper/css'
import "../MatchesCard/matchCard.css"
function MatchCard() {
  return (
    <>
      <section className="match-section">
        <div className="match-results">
          <div className="match-result-card">
            <div className="bayern-section">
              <img className="image-clup" src="/Images/bayernLogo.png" alt="bayernLogo" /> <span> 2 </span>
              <h4 className="bayern-section-title"> Bayern München </h4>
              <ul className="goals">
                <li> Luis Díaz `41</li>
                <li> Harry Kane `46</li>
              </ul>
            </div>

            <div className="chmpions-logo">
              <img src="/Images/UCL.jpg" alt="champions" />
              <p className="ending-match"> End of match - The first leg of the quarter-finals </p>
              <p className="timing"> Tuesday 7/4/2026 </p>
            </div>

            <div className="madrid-section">
              <span> 1 </span> <img className="image-clup" src="/Images/madridLogo.png" alt="madridLogo" />
              <h4 className="madrid-section-title"> Real Madrid </h4>
              <p> kylian Mpabbé `74  </p>
            </div>
          </div>
        </div>
        <div className="match-title">
          <h2> <i> Matches </i> </h2>
          <p> <i> Latest results and upcoming fixtures </i> </p>
        </div>

        <div className="latest-fixtures">
          <div className="latest-fixture-content">
            <Swiper
              spaceBetween={20}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              modules={[Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },

                480: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },

                576: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },

                767: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },

                991: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },

                1200: {
                  slidesPerView: 5,
                  spaceBetween: 25
                }
              }}
              className="mySwiper"
            >
              <div className="latest-fixtures-card">
                {matches.map((match) => (
                  <SwiperSlide className="match-content-card" key={match.id}>
                    <div className="match-liga-card">
                      <img className="liga" src={match.img} alt={match.img} />
                    </div>
                    <div className="match-logo-card">
                      <img src={match.homeLogo} alt={match.homeTeam} />
                      <img src={match.awayLogo} alt={match.awayTeam} />
                    </div>
                    <div className="match-name-card">
                      <h4> {match.homeTeam} </h4>
                      <h4> {match.awayTeam} </h4>
                    </div>
                    <div className="match-score-card">
                      {match.homeScore} : {match.awayScore}
                    </div>
                    <div className="macth-info-card">
                      <h4> {match.stadium} </h4>
                      <h5> {match.date} </h5>
                      <p> {match.status} </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default MatchCard