import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    { name: "Camila R.", text: "El mejor café que he probado en Bogotá. ¡La atención es increíble!", rating: 5 },
    { name: "Juan P.", text: "Me encanta el diseño de la web y el producto es espectacular.", rating: 5 },
    { name: "Ana M.", text: "Un ambiente acogedor y un sabor inigualable.", rating: 4 }
  ];

  return (
    <section id="testimonios" className="testimonials-section">
      <h2>Lo que dicen de nosotros</h2>
      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            {/* Generamos las estrellas automáticamente */}
            <div className="stars">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{review.text}"</p>
            <h4 className="testimonial-author">- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

