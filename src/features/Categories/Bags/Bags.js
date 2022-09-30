import { useEffect, useState } from 'react';
import styles from './Bags.module.css';
import { ProductCard } from '../../Products/ProductCard';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Bags() {
  const [productsBag, setProductsBag] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/api/products?bags=true')
      .then((res) => res.json())
      .then((data) => setProductsBag(data));
  }, []);
  if (!productsBag) {
    return <strong>Loading products...</strong>;
  }

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className={styles['search-bar']}>
        <form>
          <input
            className={styles['search-input']}
            type="text"
            placeholder="Search..."
            onChange={handleSearchTerm}
          />
          <button type="submit" className={styles['btn']}>
            <FontAwesomeIcon icon={solid('magnifying-glass')} />{' '}
          </button>
        </form>
      </div>
      <div className={styles['products-list']}>
        {productsBag
          .filter((product) => {
            if (searchTerm === '') {
              return product;
            } else if (
              product.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
