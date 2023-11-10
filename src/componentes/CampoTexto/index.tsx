import "./campo.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio: boolean;
  type: string;
}

const CampoTexto = ({
  type = "text",
  placeholder,
  label,
  valor,
  obrigatorio,
  aoAlterado,
}: CampoTextoProps) => {
  const placeHolderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeHolderModificada}
      />
    </div>
  );
};

export default CampoTexto;
