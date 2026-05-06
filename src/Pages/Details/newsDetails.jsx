import { useParams } from "react-router-dom"
import { details } from "../../Data/news"
import { useNavigate } from "react-router-dom"
import "../../Pages/Details/newsDetails.css"
function NewsDetails() {
    const back = useNavigate()
    const { id } = useParams()
    const det = details.find((item) =>
        item.id === Number(id))
    if (!det) {
        return <h2> News not found </h2>
    }
    console.log(details)
    console.log(id)

    return (
        <>
            <main className="news-details">
                <article className="news-article">
                    <div className="aricle-content">
                        <h1> <i className="bi bi-quote"></i> {det.info} </h1>
                        <p> {det.all_details} </p>
                        <span className="date-article"> {det.date} </span>
                        <button className="article-btn-back" onClick={() => back("/News")}> Back To News </button>
                    </div>
                    <div className="details-img">
                        <img src={det.img} alt={det.info}/>
                    </div>
                </article>
            </main>
        </>
    )
}

export default NewsDetails