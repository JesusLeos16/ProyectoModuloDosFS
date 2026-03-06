export default function BotonInicio({texto, onClick}){
    return(
        <button
        onClick={onClick}
        >{texto}</button>
    )
}