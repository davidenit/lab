import { FC } from 'react';
import {
  Box,
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
      className="tw-shadow-none !tw-m-0"
    >
      <AccordionSummary
        expandIcon={expanded === panel ? <MinusIcon /> : <PlusIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        sx={{
          borderBottom: '1px solid var(--colorBorder)',
          '& .Mui-expanded': {
            minHeight: '0px!important',
            margin: '0',
          },
          '& .MuiAccordionSummary-content': {
            margin: '0!important',
            height: 'fit-content',
          },
        }}
        className="!tw-bg-lightGrey tw-text-text body2 !tw-px-6 !tw-m-0"
      >
        {nameAccordion}
      </AccordionSummary>
      <AccordionDetails className="!tw-py-0">
        <Box className="">
          <Box className="tw-flex">
            <p className=" tw-text-text notification tw-mb-0 tw-mt-4 !tw-font-390">
              {shipping.availableDay?.title}
            </p>
            <p className=" tw-text-text tw-mb-0 tw-mt-4 notification">
              {shipping.availableDay?.amount}
            </p>
          </Box>
          <Box className="tw-mt-4">
            <p className=" tw-text-text notification tw-mb-0 tw-mt-4 !tw-font-390">
              {shipping.availableTime.title}
            </p>
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
