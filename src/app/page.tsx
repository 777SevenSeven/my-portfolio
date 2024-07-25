
import { Header } from "./components/header/header"
import "./components/header/header.scss"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>Texto</p>
        <div className="experience-time">

        </div>
        <div className="info">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>EN - Fluent</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
          <span></span>
          <span>Computer Engineering Student - Universidade Tecnológica Federal do Paraná</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me!</button>
        </div>
      </div>
    </main>
  );
}
