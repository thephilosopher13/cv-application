export default function Input({ type, id, labelName, value, onChange, className, "data-key": dataKey}) {
    return (
      <div className={className}>
        <label
        htmlFor={id}>
        {labelName}{' '}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          data-key={dataKey}
        />
      </div>
    );
  }