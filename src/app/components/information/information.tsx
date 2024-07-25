import "./information.scss"
import { SectionTitle } from "../sectionTitle/sectionTitle"

export function Info() {
    return (
        <div className="infos">
          <SectionTitle text="Languages" />
          <div className="languages-info">
            <span>EN - Fluent</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <SectionTitle text="Education" />
          <div className="educational-info">
          <span></span>
          <span>Computer Engineering Student - Universidade Tecnológica Federal do Paraná</span>
          </div>
        </div>
    )
}