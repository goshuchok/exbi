import { FC, useCallback, useState } from 'react';
import { OrderType } from '../../types/orderType';
import data from '../../data.json';
import { Search } from '../search';
import styles from './Orders.module.scss';
import Icon from '../../assets/img/Icon.svg';

type Data = typeof data;

type SortKeys = keyof Data[0];

type SortOrder = 'ascn' | 'desc';

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = [...data].sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

export const Orders: FC<{ data: OrderType[] }> = ({
  data,
}: {
  data: Data;
}): JSX.Element => {
  const [sortKey, setSortKey] = useState<SortKeys>('price');
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

  const [wordEntered, setWordEntered] = useState<string>('');

  const [active, setActive] = useState(-1);

  const headers = [
    { key: 'name', label: 'Amount' },
    { key: 'price', label: 'Value in USD' },
    { key: 'date', label: 'Date' },
    { key: 'invoice', label: 'Invoice' },
    { key: 'client', label: 'Client' },
    { key: 'network', label: 'Network' },
    { key: 'status', label: 'status' },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === 'desc' }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: any) {
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    setSortKey(key);
  }

  return (
    <>
      <Search wordEntered={wordEntered} setWordEntered={setWordEntered} />
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            {headers.map((row) => {
              return (
                <td key={row.key} onClick={() => changeSort(row.key)}>
                  {row.label}
                  <img className={styles.icon} src={Icon} alt="icon" />
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {sortedData()
            .filter(({ name }): boolean =>
              name.toLowerCase().includes(wordEntered)
            )
            .map((order: OrderType, i: any) => {
              return (
                <tr
                  key={order.id}
                  style={{
                    backgroundColor:
                      active === order.id ? '#D1D5DB' : '#E5E7EB',
                  }}
                >
                  <td className={styles.textBlack} style={{ width: '215px' }}>
                    {order.name}
                  </td>
                  <td className={styles.textGray} style={{ width: '215px' }}>
                    {order.price}
                  </td>
                  <td className={styles.textBlack} style={{ width: '195px' }}>
                    {order.date}
                  </td>
                  <td className={styles.textBlack} style={{ width: '344px' }}>
                    {order.invoice.connect}
                    <br />
                    <span className={styles.textGray}>
                      {order.invoice.content}
                    </span>
                  </td>
                  <td className={styles.textBlack} style={{ width: '256px' }}>
                    {order.client.name} <br />
                    <span className={styles.textGray}>
                      {order.client.email}
                    </span>
                  </td>
                  <td className={styles.textBlack} style={{ width: '123px' }}>
                    {order.network}
                  </td>
                  <td>
                    <button
                      className={`${
                        active === order.id
                          ? styles.button_active
                          : styles.button
                      }`}
                      onClick={() => setActive(order.id)}
                      style={{ width: '164px' }}
                    >
                      {active !== order.id ? 'Confirmed' : 'Time out'}
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
