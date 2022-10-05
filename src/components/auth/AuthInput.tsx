interface IAuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  type?: "text" | "password" | "email";
  valueChange: (newValue: any) => void;
}

export const AuthInput = (props: IAuthInputProps) => {
  return (
      <div className={`flex flex-col`}>
      <label>{props.label}</label>
          <input
              autoComplete="off"
              type={props.type ?? "text"}
              value={props.value}
              onChange={(e) => props.valueChange?.(e.target.value)}
              required={props.required}
              className={`
              px-4 py-3 rounded-lg mb-3
                focus:outline-none bg-gray-100
              `}
      />
    </div>
  );
};
