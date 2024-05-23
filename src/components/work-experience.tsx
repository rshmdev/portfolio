"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "./work-icon";

export default function WorkExperience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        visible
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
        }}
        date="NOV/2024 - PRESENT"
        icon={<WorkIcon />}
        iconStyle={{ background: "rgba(255, 255, 255, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor Full Stack Pleno e Tech Lead
        </h3>
        <h4 className="vertical-timeline-element-subtitle">SMI</h4>
        <p>
          Desenvolvimento de aplicações web, manutenção de aplicações web,
          desenvolvimento de interfaces web, criação de apis rest, liderança
          técnica, azure devops
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        visible
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
        }}
        date="OUT/2024 - PRESENT"
        icon={<WorkIcon />}
        iconStyle={{ background: "rgba(255, 255, 255, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor Front End
        </h3>
        <h4 className="vertical-timeline-element-subtitle">FACIL.TEL</h4>
        <p>
          Desenvolvimento de aplicações web, manutenção de aplicações web,
          desenvolvimento de interfaces web
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        visible
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
        }}
        date="JAN/2024 - SEP/2024"
        icon={<WorkIcon />}
        iconStyle={{ background: "rgba(255, 255, 255, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor Front-End
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Direção concursos
        </h4>
        <p>
          Desenvolvimento de aplicações web, manutenção de aplicações web,
          manutenção de api rest
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
        }}
        visible
        icon={<WorkIcon />}
        className="vertical-timeline-element--work"
        date="DEZ/2023 - JAN/2024"
        iconStyle={{ background: "rgba(255, 255, 255, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Densenvolvedor Front-End
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Coodings</h4>
        <p>
          Desenvolvimento de aplicações web, manutenção de aplicações web,
          desenvolvimento de interfaces web
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
