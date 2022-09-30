import { useEffect, useState } from 'react';
import styles from './Wallets.module.css';
import { ProductCard } from '../../Products/ProductCard';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Wallets() {
  const [productsWallet, setProductsWallet] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/api/products?wallets=true')
      .then((res) => res.json())
      .then((data) => setProductsWallet(data));
  }, []);
  if (!productsWallet) {
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
        {productsWallet
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
