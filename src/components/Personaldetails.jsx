import React, { useState } from 'react';
import Input from './Input';
import Useinput  from './Useinput'

export default function Personaldetailsform() {
  // Use the custom hook for each input field
  const [name, setName] = Useinput('');
  const [email, setEmail] = Useinput('');
  const [number, setNumber] = Useinput('');
  const [address, setAddress] = Useinput('');

  return (
    <div>
      <Input type="text" name="Name" value={name} onChange={setName} className="personal-input"/>
      <Input type="text" name="Email" value={email} onChange={setEmail} className="personal-input" />
      <Input type="text" name="Value" value={number} onChange={setNumber} className="personal-input" />
      <Input type="text" name="Address" value={address} onChange={setAddress} className="personal-input" />
    </div>
  );
}