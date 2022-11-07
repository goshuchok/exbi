import React, { FC, useRef } from 'react';

import Filter from '../../assets/img/filter.png';
import Dandruff from '../../assets/img/dandruff.png';
import Data from '../../assets/img/data.png';
import styles from './Search.module.scss';

type SearchProps = {
  wordEntered: string;
  setWordEntered: React.Dispatch<React.SetStateAction<string>>;
};

export const Search: FC<SearchProps> = ({ wordEntered, setWordEntered }) => {
  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  window.addEventListener('load', () => inputRef.current?.focus());

  return (
    <div className={styles.header}>
      <h1>Orders</h1>
      <div className={styles.right}>
        <div className={styles.search}>
          <img className={styles.icon} src={Dandruff} alt="dandruff" />
          <input
            type="text"
            placeholder="Search orders"
            className={styles.input}
            ref={inputRef}
            value={wordEntered}
            onChange={(e) => setWordEntered(e.target.value)}
          />
        </div>
        <form className={styles.form}>
          <img className={styles.data} src={Data} alt="data" />
          <select className={styles.select} name="select">
            <option value="value1">Значение 1</option>
            <option value="value2" selected>
              Значение 2
            </option>
            <option value="value3">Значение 3</option>
          </select>
        </form>
        <img className={styles.filter} src={Filter} alt="filter" />
      </div>
    </div>
  );
};
