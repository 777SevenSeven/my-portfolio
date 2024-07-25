import { SectionTitle } from "../sectionTitle/sectionTitle";

import "./experience.scss";
import { Skill } from "../skill/skill";

export function Experience() {
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>I'm currently studying Computer Engineering at UTFPR in the Third Period of the course. and 2 Year Of Study In Programmation, I won Competitions in the technology area.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="2 years"/>
            <Skill image="/ts.png" measure={3} years="3 years"/>
            <Skill image="/js.png" measure={3} years="3 years"/>
            <Skill image="/java.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}