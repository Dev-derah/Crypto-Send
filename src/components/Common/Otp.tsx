import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string>(''); // Ensure to specify the type for OTP

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handleVerification = () => {
    alert(`Entered OTP: ${otp}`);
  };

  return (
    <div>
      <h1>OTP Verification</h1>
      <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={true}
      renderInput={(props) => <input {...props} />}
    />
      <button onClick={handleVerification}>Verify</button>
    </div>
  );
};

export default OTPVerification;
