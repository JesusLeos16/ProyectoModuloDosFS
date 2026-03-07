import { Circle } from "lucide-react";
import {PlayCircleIcon,MinusCircleIcon} from "lucide-react";
export default function PanelControl({titulo,valor, Suma, Resta, Tiempo}){
    return(
        <div>
            <span>{titulo}</span>
            <div>
                <button onClick={Resta}>
                    <MinusCircleIcon/>
                </button>
                <span>
                    {valor}{Tiempo?'s':''}
                </span>
                <button
                onClick={Suma}>
                    <PlayCircleIcon/>
                </button>
            </div>
        </div>
    )
}

