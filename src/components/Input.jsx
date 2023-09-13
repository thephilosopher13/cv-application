export default function Input({ type, name, value, onChange }) {
    return (
      <label
      for={name}>
        {name}{' '}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }