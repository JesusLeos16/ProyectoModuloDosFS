import {PlusIcon,MinusIcon, Plus} from "lucide-react";
export default function PanelControl({titulo,valor, Suma, Resta, Tiempo}){
    return(
            <div className="flex gap-2 shadow-lg rounded-lg p-3   w-80">
                <span className=" pl-2 pr-30">{titulo}</span>
                <button onClick={Resta} >
                    <MinusIcon
                    className=" bg-amber-100 rounded-2xl   text-amber-400 hover:bg-amber-00 active:scale-95 transition-all duration-200hover:shadow-md hover:text-amber-50 hover:bg-amber-400"/>
                </button>   
                <span>
                    {valor}{Tiempo?'s':''}
                </span>
                <button 
                onClick={Suma}>
                    <PlusIcon
                    className="bg-amber-100 rounded-2xl text-amber-400 active:scale-95 transition-all duration-200 hover:shadow-md hover:bg-amber-00  hover:text-amber-50 hover:bg-amber-400"/>
                </button>
            </div>
    )
}

