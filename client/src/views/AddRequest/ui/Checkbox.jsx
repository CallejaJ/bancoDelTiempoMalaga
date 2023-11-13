import { grey } from "@mui/material/colors";
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
        <span style={{ fontSize: "12px", color: grey[800] }}>Acepto los términos y condiciones del BDT.</span>
      </div>
      {meta.touched && meta.error && <div className="error" style={{ fontSize: "12px", color: '#d50000' }}>{meta.error}</div>}
    </>
  );
}
