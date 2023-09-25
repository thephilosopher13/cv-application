import { useState } from 'react';

export default function Useinput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      if (e) {
        setValue(e.target.value); // Pass the event object to setValue
      } else {
        setValue('')
      }
    };
    return [value, handleChange];
  }