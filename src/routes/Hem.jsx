import React from "react";
import RenderImg from "../components/RenderImg";

function Hem() {
  return (
    <div>
      <p className="welcome-text">
        Välkommen till vår hemsida! Vi är stolta över att erbjuda en fantastisk
        matupplevelse med våra lokala, färska och miljövänliga råvaror av högsta
        kvalitet. Varje ingrediens handplockas noggrant för att säkerställa att
        våra rätter är både läckra och hälsosamma. Vi tror att god mat börjar
        med exceptionella råvaror!
      </p>
      <RenderImg />
      <div className="drone-container">
        <p className="welcome-text">
          Sättet vi levererar mat förändras i takt med teknologins framsteg.
          Drönare sveper över himlen, som budbärare av smakupplevelser. Enkelt,
          effektivt och fritt från trafikens bojor. När maten landar i dina
          händer, har framtiden redan kommit till ditt dörrsteg.
        </p>
        <img src="Drone.jpg" alt="Drone image" className="drone-image" />
      </div>
    </div>
  );
}

export default Hem;
