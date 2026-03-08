export default function BotonInicio({ texto, onClick }) {
  return (
    <button className="bg-amber-300 active:scale-95 text-white rounded-4xl p-4 transition-all duration-300 hover:shadow-white hover:shadow-lg" onClick={onClick}>
      {texto}
    </button>
  );
}
