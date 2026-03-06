export default function PanelControl({titulo,valor, Suma, Resta, Tiempo}){
    return(
        <div>
            <span>{titulo}</span>
            <div>
                <button onClick={Resta}>
                    -
                </button>
                <span>
                    {valor}{Tiempo?'s':''}
                </span>
                <button
                onClick={Suma}>
                    +
                </button>
            </div>
        </div>
    )
}

