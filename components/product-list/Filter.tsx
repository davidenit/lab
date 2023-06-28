'use client';

import FilterTree from '../FilterTree/FilterTree';

const nodes = [
  {
    value: 'mars',
    label: 'Mars',
    children: [
      { value: 'phobos', label: 'Phobos' },
      { value: 'deimos', label: 'Deimos' },
    ],
  },
  {
    value: 'earth',
    label: 'Earth',
    children: [
      {
        value: 'USA',
        label: 'USA',
        children: [
          { value: 'newyork', label: 'New' },
          { value: 'sanfran', label: 'San' },
          { value: 'cali', label: 'California' },
        ],
      },
      { value: 'China', label: 'China' },
    ],
  },
];

const Filter = () => {
  const onChecked = (checkedList: string[]) => {
    console.log('checkedList Home', checkedList);
  };

  return (
    <div>
      <FilterTree nodes={nodes} onChecked={onChecked} />
    </div>
  );
};
export default Filter;
