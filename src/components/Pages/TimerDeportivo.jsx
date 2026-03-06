//todo el merequetengue
import { useState, useEffect } from "react";
import PanelControl from "../molecules/PanelControl";
export default function TimerDeportivo() {
  const [rondasTotales, setRondasTotales] = useState(3);
  const [tiempoRonda, setTiempoRonda] = useState(60);

  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [rondaActual, setRondaActual] = useState(1);

  const [fase, setFase] = useState("configurando");

  const subirRondas = () => setRondasTotales(rondasTotales + 1);
  const bajarRondas = () => {
    if (rondasTotales > 1) setRondasTotales(rondasTotales - 1);
  };
  const subirTiempo = () => setTiempoRonda(tiempoRonda + 5);
  const bajarTiempo = () => {
    if (tiempoRonda > 5) setTiempoRonda(tiempoRonda - 5);
  };

  const cancelarEntrenamiento = () => {
    setCorriendo(false);
    setFase("configurando");
  };
  const iniciarEntrenamiento = () => {
    setCorriendo(true);
    setFase("preparacion");
    setTiempo(5);
    setRondaActual(1);
  };


  useEffect(() => {
    let intervalo;
    if (corriendo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((tiempoAnterior) => tiempoAnterior - 1);
      }, 1000);
    } else if (corriendo && tiempo == 0) {
      if (fase == "preparacion") {
        setFase("entrenando");
        setTiempo(tiempoRonda);
      } else if (fase == "entrenando") {
        if (rondaActual < rondasTotales) {
          setRondaActual((ronda) => ronda + 1);
          setFase("preparacion");
          setTiempo(5);
        } else {
          setCorriendo(false);
          setFase("configurando");
        }
      }
    }
    return () => clearInterval(intervalo);
  },[corriendo,tiempo,fase,rondaActual,rondasTotales,tiempoRonda]);

  if (fase == "configurando") {
    return (
      <div>
        <h1>CONFIGURAR RUTINA</h1>
        {/* rondas */}
        <PanelControl
          titulo="Rondas"
          valor={rondasTotales}
          Suma={subirRondas}
          Resta={bajarRondas}
          Tiempo={false}
        />
        {/* tiempo */}
        <PanelControl
          titulo="Tiempo"
          valor={tiempoRonda}
          Suma={subirTiempo}
          Resta={bajarTiempo}
          Tiempo={true}
        />

        <button onClick={iniciarEntrenamiento}>COMENZAR</button>
      </div>
    );
  }

  return (
    <>
      <div
        className={`${fase == "preparacion" ? "bg-amber-300" : ""} ${fase == "entrenando" ? "bg-emerald-400 text-black" : ""}`}
      >
        <h1>{tiempo}</h1>
        <h2>{fase}</h2>
        <h2>{rondaActual}</h2>
        <button onClick={cancelarEntrenamiento}>Cancelar</button>
      </div>
    </>
  );
}
