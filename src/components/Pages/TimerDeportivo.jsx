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



  return <></>;
}
