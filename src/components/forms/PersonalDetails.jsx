
import Input from '../input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonalInfoItemAction } from '../actions/actions';


export default function PersonalDetailsForm() {
  // Use the custom hook for each input field
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  

  function personalClearFields() {
    setFullName('')
    setEmail('')
    setNumber('')
    setAddress('')
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addPersonalInfoItemAction({
      fullname: fullname, 
      email: email, 
      address: address, 
      number: number
    }));
    personalClearFields()
  };
  


  return (
    <div className="personal-form" id='personal-div'>
      <h2 className='text-2xl'>Personal Details</h2>
      <form onSubmit={(e) => handleAddItem(e)} className='flex flex-col gap-2 mt-2'>
      <Input type="text" id="personal-fullname" labelName="Name" value={fullname} onChange={e => setFullName(e.target.value)} data-key="fullname" />
      <Input type="email" id="personal-email" labelName="Email" value={email} onChange={e => setEmail(e.target.value)} data-key="email" />
      <Input type="number" id="personal-number" labelName="Number" value={number} onChange={e => setNumber(e.target.value)} data-key="phoneNumber" />
      <Input type="text" id="personal-address" labelName="Address" value={address} onChange={e => setAddress(e.target.value)} data-key="address" />
      <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">Submit</button>
      </form>
    </div>
  );
}