//todo el merequetengue
import { useState, useEffect } from "react";
export default function TimerDeportivo() {
  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [fase, setFase] = useState("bg-yellow-200 text-black");
useEffect(() => {
    let intervalo;
    if (corriendo) {
      intervalo = setIntervalo(() => {
        setTiempo((segundos) => segundos + 1);
      }, 1000);
    }

    

    // Limpieza del intervalo
    return () => clearInterval(intervalo);
  }, [corriendo]);
  const amarillo = () => {
      setColor("bg-yellow-400");
    };
    const alto = () => {
      setFase("bg-red-500 text-white");
    };
    const verde = () => {
      setFase("bg-emerald-500");
    };

  const reinicio = () => {
    setCorriendo(false);
    setTime(0);
  };
  const parar = () => { 
    setCorriendo(false);
  };
  const iniciar = () => {
    setCorriendo(true);
  };



}
