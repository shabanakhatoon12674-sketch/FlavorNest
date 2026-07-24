function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>Food Gallery</h2>

      <div className="gallery-container">
        <div className="gallery-card">
          <h3>🍕 Pizza</h3>
          <p>Freshly baked Italian pizza.</p>
        </div>

        <div className="gallery-card">
          <h3>🍔 Burger</h3>
          <p>Loaded cheese burger.</p>
        </div>

        <div className="gallery-card">
          <h3>🍝 Pasta</h3>
          <p>Classic creamy pasta.</p>
        </div>

        <div className="gallery-card">
          <h3>🍰 Dessert</h3>
          <p>Chocolate cake with ice cream.</p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;