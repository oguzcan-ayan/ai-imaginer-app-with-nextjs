import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/oguzcan-ayan" target='_blank'>
        <Image src="../../assets/icons/github.svg" width={32} height={32} alt='Github' />
      </Link>
      <Link href="https://x.com/Oguzcan_Ayan_1" target='_blank'>
        <Image src="../../assets/icons/x-social-media.svg" width={32} height={32} alt='X' />
      </Link>
      <div>
        <p>Made by <b>Oğuzcan Ayan</b></p>
        <p>and, build with <b>Next.js</b></p>
      </div>
    </footer>
  )
}

export { Footer };