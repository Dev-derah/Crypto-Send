import React from 'react'

type FormFieldProps = {
  type: string;
  disabled: boolean;
  label?: string;
  placeholder: string;
  value?: string | number;
  optional?: boolean;
  autoFocus?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({type,disabled = false,label,placeholder,value,optional=false,autoFocus=false}) => {
  return (
    <div className='flex-1'>
    {label && <label className='text-neutral-8'>{label} {optional && <span className='text-neutral-6 text-base'>&#40;Optional&#41; </span>}</label>}
      <input type={type} disabled={disabled} autoFocus={autoFocus} className='bg-white border border-backgroundElevation rounded-lg p-3 w-full mt-2 disabled:bg-neutral-4 focus:outline-primary-800' placeholder={placeholder} value={value}/>
    </div>
  );
};

export default FormField