//todo el merequetengue
import { useState, useEffect } from "react";
import PanelControl from "../molecules/PanelControl";
import BotonInicio from "../atoms/BotonInicio";
import MensajeTexto from "../atoms/MensajeTexto";
import { BeakerIcon,Play} from "lucide-react";
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

  const pausarEntrenamiento = () => {
    setCorriendo(false);

  };
  const reanudarEntrenamiento = () => {
    setCorriendo(true);
  };

  const mensajillo = () => {
    if(corriendo == false && fase !="configurando"){
      return "ENTRENAMIENTO PAUSADO"
    }

    switch (fase) {
      case "configurando":
        return "CONFIGURA TU RUTINA!!";
        break;
      case "entrenando":
        return "ENTRENANDO!!!";
        break;
      case "preparacion":
        return "PREPARATE!!";
        break;
      default:
        return "";
    }
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
  }, [corriendo, tiempo, fase, rondaActual, rondasTotales, tiempoRonda]);

  if (fase == "configurando") {
    return (
      
      <div>
        <MensajeTexto mensaje={mensajillo()} />
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
        <MensajeTexto
          mensaje={corriendo ? `${mensajillo()}` : "REANUDA EL ENTRENAMIENTO HUEVON"}
        />
        <h1>{tiempo}</h1>
        <h2>Ronda: {rondaActual}</h2>
        <button onClick={cancelarEntrenamiento}>Cancelar</button>
        <BotonInicio
          texto={corriendo ? "PAUSAR" : "CONTINUAR"}
          onClick={corriendo ? pausarEntrenamiento : reanudarEntrenamiento}
        />
      </div>
    </>
  );
}
