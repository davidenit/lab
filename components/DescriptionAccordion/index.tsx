import { FC } from 'react';
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { PlusIcon, MinusIcon } from '@/app/assets/images/svg/icons';
interface DescriptionAccordionProps {
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  description: any[];
  panel: string;
}

const DescriptionAccordion: FC<DescriptionAccordionProps> = ({
  expanded,
  handleChange,
  description,
  panel,
}) => {
  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      className="tw-shadow-none !tw-m-0"
    >
      <AccordionSummary
        expandIcon={expanded === 'panel1' ? <MinusIcon /> : <PlusIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          borderBottom: '1px solid var(--colorBorder)',
          '&.Mui-expanded': {
            minHeight: '0px!important',
            margin: '0!important',
          },
        }}
        className="!tw-bg-lightGrey tw-text-text body2"
      >
        Description
      </AccordionSummary>
      <AccordionDetails className="!tw-pt-0">
        {description?.map((description, index) => (
          <Box key={index}>
            <p className=" tw-text-text tw-mb-0 tw-mt-4 notification !tw-font-390">
              {description.question}
            </p>
            <p className="tw-mt-2 tw-mb-0 tw-text-text notification">
              {description.answer}
            </p>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DescriptionAccordion;
