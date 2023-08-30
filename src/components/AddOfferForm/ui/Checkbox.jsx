import { useField } from "formik";

export default function Checkbox({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <input
          {...props}
          {...field}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>Acepto los términos y condiciones del BDT.</span>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}
