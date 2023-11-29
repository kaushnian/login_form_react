import './TextField.css';

export default function TextField({
  value,
  onChange,
  label,
  name,
  type = 'text',
  error,
  required,
}) {
  return (
    <div className="TextField">
      <label htmlFor={name} className="TextField-label">
        {label}
      </label>

      <div className="TextField-input-wrapper">
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          className="TextField-input"
          required={required}
        />

        {error && <div className="TextField-error">{error}</div>}
      </div>
    </div>
  );
}
