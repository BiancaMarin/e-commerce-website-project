import { OClocks } from '../../components/Clocks/OClocks';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { OSquare } from '../../components/Osquare/OSquare';
import { Reviews } from '../../components/Reviews/Reviews';
import { Trending } from '../../components/Trending/Trending';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <Nav />
      <section className={styles['landing-page']}>
        <div className={styles['content']}>
          <h1>Make your style with O bag</h1>
        </div>
        <div className={styles['btn']}>
          <a href="/products">
            <button>Discover now</button>
          </a>
        </div>
      </section>
      <Trending />
      <OClocks />
      <OSquare />
      <Reviews />
      <Footer />
    </>
  );
}
