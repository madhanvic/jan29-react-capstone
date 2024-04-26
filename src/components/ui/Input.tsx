interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  setValue: (options: { key: string; value: string }) => void;
  error: null | string;
}
const Input = ({
  type,
  placeholder,
  name,
  value,
  setValue,
  error,
}: InputProps) => {
  const inputHandler = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (type === "number" && /^\d*$/.test(e.target.value)) {
      setValue({ key: key, value: e.target.value });
      return;
    }
    if (type !== "number") {
      setValue({ key: key, value: e.target.value });
      return;
    }
    setValue({ key: key, value: value });
  };
  return (
    <div className="form__group">
      <input
        type={type === "email" ? type : "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={inputHandler.bind(null, name)}
        className={`${error !== null ? "error" : ""}`}
      />
      {error !== null && <small className="error__msg">{error}</small>}
    </div>
  );
};

export default Input;
