import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1>This text is same to all pages !</h1>
      {children}
    </div>
  );
}
