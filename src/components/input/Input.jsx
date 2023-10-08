import PropTypes from 'prop-types';

function Input({ type, id, labelName, value, onChange, labelClass, "data-key": dataKey }) {
  return (
    <div className='flex justify-between'>
      <label htmlFor={id} className={labelClass}>
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

// Define prop types for your Input component
Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  "data-key": PropTypes.string,
};

export default Input;