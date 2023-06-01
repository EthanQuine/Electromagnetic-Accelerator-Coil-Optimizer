import styles from "../styles/SelectItem.module.css";

export default function SelectItem({ label, items, value, onChange }) {
  return (
    <span className={styles.container}>
      <label>{label}</label>
      <select
        name={label}
        id={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </span>
  );
}
