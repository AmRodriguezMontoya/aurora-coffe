import './Products.css';
// Importamos tus imágenes locales ya corregidas
import img1 from '../assets/cafe1.jpg';
import img2 from '../assets/cafe2.jpg';
import img3 from '../assets/cafe3.jpg';
import img4 from '../assets/cafe4.jpg';
import img5 from '../assets/cafe5.jpg';

export default function Products() {
  const products = [
    { id: 1, title: "Café de Origen", desc: "Notas a chocolate oscuro y frutos secos.", img: img1 },
    { id: 2, title: "Tostado Medio", desc: "Equilibrio perfecto con un toque cítrico.", img: img2 },
    { id: 3, title: "Prensa Francesa", desc: "Para los puristas del café intenso.", img: img3 },
    { id: 4, title: "Espresso Intenso", desc: "Cuerpo completo y sabor profundo.", img: img4 },
    { id: 5, title: "Blend Aurora", desc: "Nuestra mezcla exclusiva de la casa.", img: img5 }
  ];

  return (
    <section id="productos" className="products-section">
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Nuestra Selección</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



