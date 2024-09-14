import "./styles.css";
import dogcoin from "./imagens/dogcoin.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="menu">
          <nav>
            <ul>
              <li>Blog</li>
              <li>Sobre</li>
              <li>Descrição</li>
            </ul>
          </nav>
        </header>
        <div className="image-container">
          <img src={dogcoin} alt="Foto" />
        </div>
        <div className="text-container">
          <h1>Leticia Ingrid</h1>
          <p>
            Olá, tenho 19 anos e sou analista de desenvolvimento na Reframax
            Engenharia á 5 anos.
          </p>
        </div>
      </div>
      <div className="text-principal">
        <h1>Últimas do blog</h1>
        <h3>5 dicas para minha carreira profissional</h3>
        <p>Estar sempre atualizado as novas tecnologias</p>
        <p>Aprimorar as habilidades de comunicação</p>
        <p>Adote uma mentalidade de resolução de problemas</p>
        <p>Construa networking e se conecte com outros profissionais</p>
      </div>
    </div>
  );
}
