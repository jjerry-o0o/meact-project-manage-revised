import {forwardRef} from 'react';

const Input = forwardRef(function Input({label, textarea, ...props}, ref) {
  const inputStyle = "w-full p-1 border-b-2 rounded-sm border-neutral-300 bg-neutral-200 text-neutral-600 focus:outline-none focus:border-neutral-600";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold uppercase text-neutral-500">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={inputStyle} {...props}/>
        ) : (
        <input ref={ref} className={inputStyle} {...props} />
        )}
    </div>
  )
});

export default Input;