'use client';
// import { Metadata } from 'next';
import { Suspense, useState, FC } from 'react';
import Loading from './loading';
import Container from '@mui/material/Container';
import ViewDetailProduct from '@/components/ProductDetailModal/ViewDetailProduct';
import ProductInfor from '@/components/ProductDetailModal/ProductInfor';
import { Button, Box, Typography } from '@mui/material';
import CounterNumberProduct from '@/components/CounterNumberProduct';
import FilterType from '@/components/FilterType';
import ProductOptions from '@/components/ProductOptions';
import InputMessage from '@/components/InputMessage';
import AttributeTitle from '@/components/AttributeTitle';
import DescriptionBox from '@/components/DescriptionBox';

import clsx from 'clsx';
import { useWindowSize } from 'react-use';

import CustomeNumberInput from '../components/ui/CustomeNumberInput';

// export const metadata: Metadata = {
//   title: 'Product page',
//   description: 'Product page',
// };

const ProductPage: FC = () => {
  const [candles, setCandles] = useState<number>(0);
  const { width } = useWindowSize();

  const attributes = [
    {
      type: 'filter',
      title: 'Select Cream',
      options: ['fresh', 'chocolate', 'vanilla'],
    },
    { type: 'select', title: 'Select weight', options: ['1kg', '2kg', '3kg'] },
    {
      type: 'filter',
      title: 'select filling',
      options: [
        'black forest',
        'chocolate',
        'strawberry',
        'vanilla',
        'blueberry',
        'cheese',
        'lemon',
        'mango',
        'orange',
        'pineapple',
      ],
    },
  ];

  const description = [
    {
      question: " What's the big idea",
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun lore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      question: 'What are the benefits?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun lore magna aliqua. ',
    },
    {
      question: 'Great for...',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun lore magna aliqua.',
    },
  ];
  const delivery = {
    availableDay: {
      title: 'Available for delivery:',
      amount: '2 days',
    },
    availableTime: {
      title: 'Available timeslot:',
      timeslot: ['1:00 PM - 4:00 PM', '3:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'],
    },
  };
  const storePickUp = {
    availableDay: {
      title: 'Available for pickup:',
      amount: '2 days',
    },
    availableTime: {
      title: 'Available timeslot:',
      timeslot: ['1:00 PM - 4:00 PM', '3:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'],
    },
  };
  const filterTypes = attributes.filter((att) => att.type === 'filter');
  const selectTypes = attributes.filter((att) => att.type === 'select');

  return (
    <Suspense fallback={<Loading />}>
      <Container
        maxWidth="lg"
        className={clsx(
          'tw-bg-[#fff] sm:tw-px-1 tw-py-4 !tw-px-1 tw-box-border tw-relative tw-flex tw-gap-10'
        )}
      >
        <Box
          className={clsx(
            'tw-bg-[#fff] tw-w-full tw-h-full tw-box-border tw-relative tw-flex tw-gap-10 tw-overflow-y-auto'
          )}
        >
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-10">
            <ViewDetailProduct />
            <Box className="tw-box-border md:tw-pr-10 tw-pr-2">
              <ProductInfor />
              {filterTypes.map((filterType) => (
                <FilterType
                  key={filterType.title}
                  filterType={filterType.title}
                  options={filterType.options}
                />
              ))}
              {selectTypes.map((selectType) => (
                <ProductOptions
                  key={selectType.title}
                  attributeTitle={selectType.title}
                  options={selectType.options}
                />
              ))}
              <InputMessage />
              <AttributeTitle filterType="Pick your candles" />
              <Box className="tw-flex tw-gap-4">
                <Box className="tw-flex tw-flex-col">
                  <p className="tw-mb-4 notification">Small Candles</p>
                  <CustomeNumberInput
                    unit="pcs"
                    value={candles}
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Candle.jpg/800px-Candle.jpg"
                    setValue={(value) => setCandles(value)}
                  />
                </Box>
                <Box className="tw-flex tw-flex-col">
                  <p className="tw-mb-4 notification">Small Candles</p>
                  <CustomeNumberInput
                    unit="pcs"
                    value={candles}
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Candle.jpg/800px-Candle.jpg"
                    setValue={(value) => setCandles(value)}
                  />
                </Box>
              </Box>
              <CounterNumberProduct />
              <Button
                variant="contained"
                className="tw-uppercase hover:tw-text-primary notification hover:!tw-bg-white hover:!tw-shadow-none !tw-mt-6 !tw-px-[90px] !tw-py-[12.5px] tw-flex tw-items-center tw-justify-center !tw-font-[450] tw-overflow-hidden sm:tw-w-auto tw-w-full"
              >
                add to basket
              </Button>
              {/* <Typography className="tw-font-[300] notification !tw-mt-4">
                Egg Tart is available insets of 1
              </Typography> */}
              {width < 480 && (
                <DescriptionBox
                  description={description}
                  delivery={delivery}
                  storePickUp={storePickUp}
                />
              )}
            </Box>
          </div>
        </Box>
      </Container>
    </Suspense>
  );
};

export default ProductPage;
