import { useField } from "formik";

// eslint-disable-next-line react/prop-types
export default function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input
        {...props}
        {...field}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error" style={{ fontSize: "12px", color: '#d50000' }}>{meta.error}</div>}
    </>
  );
}
