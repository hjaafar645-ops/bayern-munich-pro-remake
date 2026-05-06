import { useState } from "react"
import "../../Components/Contact/contact.css"
function Contact() {
    function handleForm(event) {
        event.preventDefault()
        setSuccess(true)
        setName("")
        setEmail("")
        setPassword("")
        setMessage("")
        setTimeout(() => {
            setSuccess(false)
        }, 4000)
        fetch("http://localhost:3000/", {
            method: "POST",
            body: JSON.stringify({ "NAME": name, "EMAIL": email, "PASSWORD": password, "MESSAGE": message })
        })
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    const [success, setSuccess] = useState(false)

    return (
        <>
            <section className="contact-section">
                <div className="contact-title">
                    <h2><i> Contact Us </i></h2>
                </div>
                <div className="contact-info">
                    <form className="contact-form" onSubmit={handleForm}>
                        <h3 className="form-title"> Join The Fans </h3>
                        <div className="input-group">
                            <input type="text" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label> Name </label>
                            <i className="bi bi-person"></i>
                        </div>
                        <div className="input-group">
                            <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label> Email </label>
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="input-group">
                            <input type="password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label> Password </label>
                            <i className="bi bi-lock"></i>
                        </div>
                        <label className="area-label"> Message </label>
                        <textarea name="message" placeholder="Your Message ..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit"> Send </button>
                        {success && (
                            <p className="form-success"> Message sent successfully </p>
                        )}
                    </form>
                    <div className="form-img">
                        <img src="/Images/colle.png" alt="colle" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact