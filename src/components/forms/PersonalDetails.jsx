
import Input from '../input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonalInfoItemAction } from './actions';


export default function PersonalDetailsForm() {
  // Use the custom hook for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  

  function personalClearFields() {
    setName('')
    setEmail('')
    setNumber('')
    setAddress('')
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addPersonalInfoItemAction(name, email, address, number));
    personalClearFields()
  };
  


  return (
    <div className="personal-form" id='personal-div'>
      <h2>Personal Details</h2>
      <form onSubmit={(e) => handleAddItem(e)}>
      <Input type="text" id="personal-name" labelName="Name" value={name} onChange={e => setName(e.target.value)} className="personal-input" data-key="name" />
      <Input type="email" id="personal-email" labelName="Email" value={email} onChange={e => setEmail(e.target.value)} className="personal-input" data-key="email" />
      <Input type="number" id="personal-number" labelName="number" value={number} onChange={e => setNumber(e.target.value)} className="personal-input" data-key="phoneNumber" />
      <Input type="text" id="personal-address" labelName="Address" value={address} onChange={e => setAddress(e.target.value)} className="personal-input" data-key="address" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}