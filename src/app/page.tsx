
import { Header } from "./components/header/header"
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import "./components/header/header.scss"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
        <div className="buttons">
          
          <button className="btn-primary">Contact me!</button>
      </div>
    </main>
  );
}
