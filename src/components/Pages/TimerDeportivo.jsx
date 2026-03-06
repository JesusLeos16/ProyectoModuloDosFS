//todo el merequetengue
import { useState, useEffect } from "react";
//Funcion temporal de como deberia funcionar este timer, es para hacer pruebas tambien, mas adelante ya vamos a mandar
//parametros, amonos por partes.
export default function TimerDeportivo() {
  const [rondasTotales, setRondasTotales] = useState(3);
  const [tiempoRonda, setTiempoRonda] = useState(60);

  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [rondaActual, setRondaActual] = useState(1);

  const [fase, setFase] = useState("configurando");

  const iniciarEntrenamiento = () => {
    setFase("Preparacion");
    setTiempo(5);
    setRondaActual(1);
    setCorriendo(true);
  };

  const cancelarEntrenamiento = () => {
    setCorriendo(false);
    setFase("configuracion");
  };

  if (fase == "configurando") {
    return (
      <div className="flex flex-col h-screen justify-center items-center bg-white-700 text-2xl font-sans">
        <div className="bg-white text-black p-6  flex flex-col gap-10 rounded-lg ">
          <h1 className="font-semibold">CONFIGURAR LA RUTINA</h1>
          <div className=" p-4 rounded-lg shadow-sm shadow-amber-300 flex justify-between">
            <p>Rondas </p>
            <p>{rondasTotales}</p>
          </div>
         <div className=" p-4 rounded-lg shadow-sm shadow-amber-300 flex justify-between">
            <p>Tiempo/ronda </p>
            <p>{tiempoRonda}s</p>
          </div>
          <button onClick={iniciarEntrenamiento} className="bg-amber-300 text-white font-bold p-3 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">EMPEZAR ENTRENAMIENTO</button>
        </div>
      </div>
    );
  }

  return <></>;
}
