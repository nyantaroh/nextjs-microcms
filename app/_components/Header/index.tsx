import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image src="/logo.svg" width={348} height={133} className={styles.logo} alt="SIMPLE" priority />
      </Link>
      <Menu />
    </header>
  );
}
