import { FC } from 'react';
import {
  Box,
  Typography,
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
      sx={{
        boxShadow: 'none',
        margin: '0!important',
      }}
    >
      <AccordionSummary
        expandIcon={expanded === 'panel1' ? <MinusIcon /> : <PlusIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          margin: '0!important',
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
      <AccordionDetails
        sx={{
          paddingTop: '0px!important',
        }}
      >
        {description?.map((description, index) => (
          <Box key={index}>
            <Typography className=" tw-text-text !tw-mt-4 notification !tw-font-390">
              {description.question}
            </Typography>
            <Typography className="!tw-mt-2 tw-text-text notification">
              {description.answer}
            </Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DescriptionAccordion;
