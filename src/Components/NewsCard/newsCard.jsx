import { poster } from "../../Data/news"
import { cards } from "../../Data/news"
import { Link } from "react-router-dom"
import "../NewsCard/newsCard.css"
function NewsCard() {
    return (
        <>
            <section className="news-section">
                <div className="news-title">
                    <h2><i> News </i></h2>
                </div>
                <div className="poster">
                    <div className="poster-overlay"></div>
                    <div className="poster-image">
                        <p className="timer"> Next Match </p>
                        <h3 className="poster-title">{poster.title}</h3>
                        <img src={poster.img} alt={poster.title} />
                    </div>
                    <div className="poster-logo">
                        <div className="poster-bayern-logo">
                            <img src={poster.bayernLogo} alt={poster.bayernName} />
                            <h3>{poster.bayernName}</h3>
                        </div>
                        <span> VS </span>
                        <div className="poster-madrid-logo">
                            <img src={poster.madridLogo} alt={poster.realName} />
                            <h3>{poster.realName}</h3>
                        </div>
                    </div>
                    <div className="poster-content">
                        <p>{poster.description}</p>
                        <p><strong>Stadium:</strong> {poster.stadium}</p>
                        <p><strong>Date:</strong> {poster.date}</p>
                    </div>
                </div>

                <div className="news-cards-section">
                    {cards.map((card) => (
                        <div className="news-card-content" key={card.id}>
                            <div className="img-zoom">
                                <img className="img-news-card" src={card.img} alt={card.category} />
                            </div>
                            <h2 className="category-news-card"> <i className={`${card.icon}`}></i> {card.category} </h2>
                            <h3 className="title-news-card"> {card.title_en} </h3>
                            <h3 className="desc-news-card"> {card.desc_en} </h3>
                            <Link to={`/News/${card.id}`} className="btn-news-card"> Read More </Link>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default NewsCard