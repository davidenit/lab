import { FC } from 'react';
import AttributeTitle from '../AttributeTitle';
import { Box } from '@mui/material';
interface InputMessageProps {}

const InputMessage: FC<InputMessageProps> = ({}) => {
  return (
    <Box>
      <AttributeTitle filterType="Input your message" />
      <textarea
        className="tw-w-full tw-h-[7rem] tw-border tw-border-border focus:tw-outline-none tw-rounded-[6px] tw-px-4 tw-py-[13px] text"
        placeholder="Message"
        maxLength={30}
      ></textarea>
      <p className="!tw-text-xs tw-mb-0 tw-text-grey tw-font-[330]">
        <span>* </span>Maximum 30 characters
      </p>
    </Box>
  );
};

export default InputMessage;
