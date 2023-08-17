import React, { useState } from 'react';
import { login } from '../api/authetification';
import { MuiTelInput } from 'mui-tel-input'
import OTP from './OTP';




const Before_Click = () => {
    const [showConfimationCode, setshowConfimationCode] = useState(false);
  
    const handleButtonClick = () => {
      setshowConfimationCode(!showConfimationCode);
    };
  
    return (
      <div className='flex flex-col justify-items h-64 justify-center gap-4'>
        {showConfimationCode ? (
          <div className='flex flex-col gap-4'>
            <div className="flex justify-center h-12">
              <OTP />
            </div>
          <div className="flex justify-center">
              <button className='mb-2 bg-black text-white rounded-full text-base w-1/2 h-8 text-md'>Confirm</button>
          </div>
          </div>

        ) : (
          <div className="flex flex-col gap-10">
        <div className="flex justify-center h-12">
        <Phone></Phone>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center">
          <button className='mb-2 bg-black text-white rounded-full text-base w-1/2 h-8 text-md' onClick={handleButtonClick}>Sign In</button>
          </div>
          <div className="flex justify-center">
            <a className='text-sm font-bold' href='#'>Create Account</a>
          </div>
        
        </div>

        </div>
        )}
      </div>
    );
  };

  
const Phone = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return <MuiTelInput value={value} onChange={handleChange} />
}


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const success = await login(username, password);

    if (success) {
      // Redirect to the authenticated page or update the UI accordingly
    } else {
      // Handle login failure
    }
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className="w-96 h-auto">

        <div className="flex flex-col m-12">
        <div className="flex justify-center">
        <h1 className='font-bold text-3xl'>Sign In</h1>
        </div>
        <Before_Click/>
        

        </div>

      </div>

    </div>
  );
};

export default Login;
