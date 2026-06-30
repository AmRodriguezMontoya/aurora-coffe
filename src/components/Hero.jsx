import heroBg from '../assets/pexels-omerderinyar-29112471.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="hero-section" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1>El arte de despertar tus sentidos.</h1>
        <p>Seleccionamos los mejores granos de altura para llevar la esencia del café directamente a tu taza.</p>
        <a href="#productos" className="btn-primary">Explorar Colección</a>
      </div>
    </section>
  );
}




