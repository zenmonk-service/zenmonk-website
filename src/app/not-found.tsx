import Link from "next/link";
import styles from "./not-found.module.scss";
import NotFound from "@/assets/not-found";

export default function NotFoundPage() {
  return (
    <div className={`not-found-page ${styles.notFoundWrapper}`}>
      <div className={styles.notFoundCard}>
        <div className={styles.contentWrapper}>
          <div className={styles.iconWrapper}>
            <NotFound.Icon404 className={styles.icon} aria-hidden="true" />
          </div>
          <div className={styles.textWrapper}>
            <div style={{ gap: "12px" }}>
              <h1 className={styles.title}>Page not found</h1>
              <p className={styles.description}>
                The page you are looking for doesn&#39;t exist or
                <br />
                has been moved.
              </p>
            </div>
            <Link href="/" className={styles.homeButton} prefetch={true}>
              GO TO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
