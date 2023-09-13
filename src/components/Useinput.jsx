import { useState } from 'react';

export default function Useinput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => setValue(e.target.value);
    return [value, handleChange];
  }