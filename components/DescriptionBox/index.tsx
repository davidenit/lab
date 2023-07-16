'use client';
import { FC, useState } from 'react';
import { Box, GlobalStyles } from '@mui/material';
import clsx from 'clsx';
import DescriptionAccordion from '../DescriptionAccordion';
import ShippingAccordion from '../ShippingAccordion';
import { Description, Shipping } from '../ProductDetailModal/ViewDetailProduct';

interface DescriptionBoxProps {
  description: Description[];
  delivery: Shipping;
  storePickUp: Shipping;
}

const DescriptionBox: FC<DescriptionBoxProps> = ({
  description,
  delivery,
  storePickUp,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        border: '1px solid var(--colorBorder)',
        borderTop: 'none',
      }}
      className={clsx('tw-mt-10 tw-w-full')}
    >
      <GlobalStyles
        styles={{
          '.Mui-expanded': {
            margin: '0!important',
            minHeight: 'auto',
            height: 'fit',
            // padding: '8px 0',
          },
          '.MuiAccordionSummary-root': {
            height: 'auto',
          },
        }}
      />
      <DescriptionAccordion
        expanded={expanded}
        handleChange={handleChange}
        description={description}
        panel="panel1"
      />
      <ShippingAccordion
        expanded={expanded}
        handleChange={handleChange}
        shipping={delivery}
        nameAccordion="Delivery"
        panel="panel2"
      />
      <ShippingAccordion
        expanded={expanded}
        handleChange={handleChange}
        shipping={storePickUp}
        nameAccordion="Store Pick Up"
        panel="panel3"
      />
    </Box>
  );
};

export default DescriptionBox;
