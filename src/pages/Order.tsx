import React, { FC } from 'react';

import { Orders } from '../components';

import data from '../data.json';

export const Order: FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <Orders data={data} />
    </div>
  );
};
