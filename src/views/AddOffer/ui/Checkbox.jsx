import { useField } from "formik";

export default function Checkbox({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox mt-5">
        <input
          {...props}
          {...field}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span className="text-primary"> Acepto los términos y condiciones</span>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}
