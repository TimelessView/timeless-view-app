import { ChangeEvent } from 'react';

interface SelectType {
  required?: boolean;
  name: string;
  options: { value: string; label: string }[];
  label: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  // children: ReactNode;
}

function Select({
                  required = true,
                  name,
                  options,
                  label,
                  onChange
                }: SelectType) {
  return (
    <>
      <div className="group flex flex-col gap-3">
        <select
          onChange={onChange}
          required={required}
          name={name}
          id={name}
          className={`sm:text-3xl text-2xl bg-zinc-950 pb-6 border-b border-zinc-200 w-full
                    transition-all duration-200 focus:border-amber-400 focus:placeholder-amber-400
                    focus:text-amber-400`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={name}
          className={`uppercase transition-all text-sm duration-200 group-focus-within:text-amber-400
        group-focus-within:font-semibold`}
        >
          {label}
        </label>
      </div>
    </>
  );
}

export default Select;
