import React, { useState } from 'react';
import Input from './input/Input';
import Useinput  from './input/Useinput'

export default function PersonalDetailsForm() {
  // Use the custom hook for each input field
  const [name, setName] = Useinput('');
  const [email, setEmail] = Useinput('');
  const [number, setNumber] = Useinput('');
  const [address, setAddress] = Useinput('');

  return (
    <div className="personal-form">
      <h1></h1>
      <Input type="text" id="personal-name" labelName="Name" value={name} onChange={setName} className="personal-input" data-key="name" />
      <Input type="email" id="personal-email" labelName="Email" value={email} onChange={setEmail} className="personal-input" data-key="email" />
      <Input type="number" id="personal-number" labelName="number" value={number} onChange={setNumber} className="personal-input" data-key="phoneNumber" />
      <Input type="text" id="personal-address" labelName="Address" value={address} onChange={setAddress} className="personal-input" data-key="address" />
    </div>
  );
}