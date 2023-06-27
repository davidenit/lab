import { FC, useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { PlusIcon, MinusIcon } from '@/app/assets/images/svg/icons';

interface ShippingAccordionProps {
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  shipping: any;
  nameAccordion: string;
  panel: string;
}

const ShippingAccordion: FC<ShippingAccordionProps> = ({
  expanded,
  handleChange,
  shipping,
  nameAccordion,
  panel,
}) => {
  return (
    <Accordion
      expanded={expanded === panel}
      onChange={handleChange(panel)}
      sx={{
        boxShadow: 'none',
        margin: '0!important',
      }}
    >
      <AccordionSummary
        expandIcon={expanded === panel ? <MinusIcon /> : <PlusIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        sx={{
          margin: '0!important',
          borderBottom: '1px solid var(--colorBorder)',
          '& .Mui-expanded': {
            minHeight: '0px!important',
            margin: '0',
          },
        }}
        className="!tw-bg-lightGrey tw-text-text body2"
      >
        {nameAccordion}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingTop: '0px!important',
          paddingBottom: '0px!important',
        }}
      >
        <Box className="tw-mt-3">
          <Box className="tw-flex">
            <Typography className=" tw-text-text notification !tw-font-390">
              {shipping.availableDay?.title}
            </Typography>
            <Typography className=" tw-text-text notification">
              {shipping.availableDay?.amount}
            </Typography>
          </Box>
          <Box className="tw-mt-4">
            <Typography className=" tw-text-text notification !tw-font-390">
              {shipping.availableTime.title}
            </Typography>
            <ul>
              {shipping.availableTime.timeslot.map((time: string) => (
                <li key={time} className="tw-text-text notification">
                  {time}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ShippingAccordion;
