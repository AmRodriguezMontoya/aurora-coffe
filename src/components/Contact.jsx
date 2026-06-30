import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito!');
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contáctanos</h2>
          <p>¿Tienes alguna duda? Estaremos encantados de ayudarte.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" required placeholder="Tu nombre completo" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" required placeholder="tu@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows="5" required placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}

