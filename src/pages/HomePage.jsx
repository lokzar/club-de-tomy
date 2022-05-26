import "../App.css";
import "./HomePage.css"


function HomePage() {
return (
<div className="App">
  <div className="header">
    <h1 className="h1Home">¡Se parte del Club de Tomy!</h1>
  </div>
  <div>
    <h2 className="h2Home">Podrás tener acceso a:</h2>
  </div>
  <section className="Cards">

    <div className="Card1">
      <h2>Tomy Banco</h2>
    </div>
    <div className="Card2">
      <h2>Insignias</h2>
    </div>
    <div className="Card3">
      <h2>Tiendita</h2>
    </div>
  </section>
  <section className="askCard">
    <h3 className="h3Home">¡Pide tu tarjeta en Recepción!</h3>
    <img className="imgHome"
      src="https://res.cloudinary.com/dz29bpftp/image/upload/v1652987961/Club-Tomy/Bank-Card-Tomy2_lerzxn.png" alt="Tarjeta Club de Tomy"></img>
  </section>
</div>
);
}

export default HomePage;