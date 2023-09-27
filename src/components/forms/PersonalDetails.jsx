
import Input from '../../input/Input';
import Useinput  from '../../input/Useinput'
import SubmitPersonalInfo from '../input/SubmitPersonalInfo';

export default function PersonalDetailsForm() {
  // Use the custom hook for each input field
  const [name, setName] = Useinput('');
  const [email, setEmail] = Useinput('');
  const [number, setNumber] = Useinput('');
  const [address, setAddress] = Useinput('');

  function personalClearFields() {
    setName('')
    setEmail('')
    setNumber('')
    setAddress('')
  }
  


  return (
    <div className="personal-form" id='personal-div'>
      <h2>Personal Details</h2>
      <form onSubmit={(e) => {
        SubmitPersonalInfo(e, name, email, address, number, () => personalClearFields())
      }}>
      <Input type="text" id="personal-name" labelName="Name" value={name} onChange={setName} className="personal-input" data-key="name" />
      <Input type="email" id="personal-email" labelName="Email" value={email} onChange={setEmail} className="personal-input" data-key="email" />
      <Input type="number" id="personal-number" labelName="number" value={number} onChange={setNumber} className="personal-input" data-key="phoneNumber" />
      <Input type="text" id="personal-address" labelName="Address" value={address} onChange={setAddress} className="personal-input" data-key="address" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}