//todo el merequetengue
import { useState, useEffect } from "react";
export default function TimerDeportivo() {
  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [fase, setFase] = useState("bg-yellow-200 text-black");
  useEffect(() => {
    let interval;
    if (corriendo) {
      interval = setInterval(() => {
        setTiempo((segundos) => segundos - 1);
      }, 1000);
      
    }
    return () => clearInterval(interval);
  }, [corriendo]);
  const amarillo = () => {
    setFase("bg-yellow-400");
  };
  const alto = () => {
    setFase("bg-red-500 text-white");
  };
  const verde = () => {
    setFase("bg-emerald-500");
  };

  const reinicio = () => {
    setCorriendo(false);
    setTiempo(20);
  };
  const parar = () => {
    setCorriendo(false);
  };
  const iniciar = () => {
    setCorriendo(true);
  };

  return (
    <>
      <div className={`$${fase} flex justify-center items-center h-screen flex-col ${corriendo ? "bg-amber-700" : "bg-blue-600"}`}>
        <h1 className="text-9xl font-bold">{tiempo}</h1>

        <div className="flex gap-3 m-4 ">
            {/* botnoes de prueba */}
            <button onClick={iniciar} className="p-2 bg-emerald-200 rounded-lg shadow-lg hover:bg-emerald-400 hover:text-white">INICIAR</button>
            <button onClick={parar} className="p-2 bg-red-300 rounded-lg shadow-lg hover:bg-red-600 hover:text-white">PARAR</button>
            <button onClick={reinicio} className="p-2 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-800 hover:text-white">REINICIAR</button>
        </div>
      </div>
    </>
  );
}
