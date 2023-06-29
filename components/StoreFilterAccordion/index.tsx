import { FC, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { PlusIcon, MinusIcon } from '@/app/assets/images/svg/icons';
import StoreInfor from '../StoreInfor';
import clsx from 'clsx';
import styles from './styles.module.css';
import { StoreInfor as Store } from '../StoreLocation';

interface StoreFilterAccordionProps {
  storeInfor: Store[];
  handlePickStore: (store: Store) => void;
}

const StoreFilterAccordion: FC<StoreFilterAccordionProps> = ({
  storeInfor,
  handlePickStore,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      className={clsx('!tw-shadow-none !tw-m-0 tw-rounded-none', {
        '!tw-border-none': expanded,
      })}
      sx={{
        borderBottom: '1px solid var(--colorBorder)',
        borderRadius: '0!important',
      }}
    >
      <AccordionSummary
        expandIcon={expanded === 'panel1' ? <MinusIcon /> : <PlusIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className=" tw-text-text body2 !tw-border-none !tw-shadow-none"
      >
        Filter
      </AccordionSummary>
      <AccordionDetails
        className={clsx(
          styles.scrollBar,
          '!tw-pt-0 tw-overflow-y-scroll tw-h-[300px] tw-flex tw-flex-col !tw-gap-6'
        )}
      >
        {storeInfor.map((store, index) => (
          <div key={index}>
            <StoreInfor store={store} handlePickStore={handlePickStore} />
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default StoreFilterAccordion;
