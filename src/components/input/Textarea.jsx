import PropTypes from 'prop-types';

function Textarea({ type, id, labelName, value, onChange, labelClass, rows, cols, "data-key": dataKey }) {
  return (
    <div className='flex justify-between'>
      <label htmlFor={id} className={labelClass}>
        {labelName}{' '}
      </label>
      <textarea
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        data-key={dataKey}
        rows={rows}
        cols={cols}
      />
    </div>
  );
}

Textarea.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    labelClass: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string,
    "data-key": PropTypes.string,
  };

  export default Textarea;