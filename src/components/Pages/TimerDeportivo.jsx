//todo el merequetengue
import { useState, useEffect } from "react";
import PanelControl from "../molecules/PanelControl";
import BotonInicio from "../atoms/BotonInicio";
import MensajeTexto from "../atoms/MensajeTexto";
import FooterTimer from "../organisms/FooterTimer";
import { BeakerIcon, Play, SquareIcon, XIcon } from "lucide-react";
const sonidoBip = new Audio("/bipbip.mp3");
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
    if (corriendo == false && fase != "configurando") {
      return "ENTRENAMIENTO PAUSADO";
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
        setTiempo((tiempoAnterior) => {
          const nuevoTiempo = tiempoAnterior - 1;
          if (nuevoTiempo == 3) {
            sonidoBip.currentTime = 0;
            sonidoBip.play();
          }
          return nuevoTiempo;
        });
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
      <>
        <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
          <div className="flex flex-col items-center gap-6 md:scale-125 lg:scale-150 origin-center">
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

            <div className="flex gap-1 font-bold bg-amber-300 shadow-md text-white p-3 text-center w-75 rounded-full active:scale-95 transition-all duration-200 hover:shadow-amber-400 ">
              <Play className="w-5" />
              <button onClick={iniciarEntrenamiento}>
                COMENZAR ENTRENAMIENTO
              </button>
            </div>
          </div>
        </div>
        <FooterTimer />
      </>
    );
  }

  return (
    <>
      <MensajeTexto
        mensaje={
          corriendo ? `${mensajillo()}` : "REANUDA EL ENTRENAMIENTO HUEVON"
        }
      />
      <div
        className={`gap-10 h-screen flex justify-center items-center flex-col ${fase == "preparacion" ? "bg-amber-300" : ""} ${fase == "entrenando" ? "bg-emerald-400 text-black" : ""} 
         `}
      >
        <h1 className="text-9xl font-extrabold">{tiempo}</h1>
        <h2 className="text-3xl">
          Ronda {rondaActual}/{rondasTotales}
        </h2>
        <div className="flex gap-15">
          <button
            className="bg-red-600 active:scale-95 p-4 text-white font-bold rounded-full transition-all duration-500 shadow-lg hover:shadow-red-500"
            onClick={cancelarEntrenamiento}
          >
            <XIcon />
          </button>
          <BotonInicio
            texto={corriendo ? <SquareIcon /> : <Play />}
            onClick={corriendo ? pausarEntrenamiento : reanudarEntrenamiento}
          />
        </div>
      </div>
      <FooterTimer />
    </>
  );
}
