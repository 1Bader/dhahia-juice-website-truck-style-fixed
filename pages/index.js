
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhahia Juice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={styles.header}>
        <Image src="/assets/logo.png" alt="Dhahia Juice Logo" width={160} height={80} />
      </header>

      <section className={styles.hero}>
        <Image src="/assets/hero.jpg" alt="Hero" layout="fill" objectFit="cover" />
      </section>

      <section className={styles.about}>
        <div className={styles.aboutImage}>
          <Image src="/assets/about.jpg" alt="About" width={600} height={600} />
        </div>
        <div className={styles.aboutText}>
          <h2>Our Story</h2>
          <p><strong>IT ALL STARTED ON A TRUCK IN 1978.</strong></p>
          <p>From Dhahiat Abdullah A1 Salem in Kuwait to Saudi Arabia.</p>
          <p>Most of the juice recipes are created and named by anonymous customers, many of which are the best sellers today.</p>
        </div>
      </section>
    </div>
  );
}
