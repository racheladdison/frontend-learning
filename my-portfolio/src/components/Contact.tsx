import React, {useState} from "react";
import "./Contact.css"

const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact