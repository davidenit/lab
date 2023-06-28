import { FC } from 'react';

interface TagsProps {
  tagConent: string;
}

const Tags: FC<TagsProps> = ({ tagConent }) => {
  return (
    <div className="tw-flex">
      <p className="tw-mb-0 notification">Tag:</p>
      <p className="tw-mb-0 tw-ml-2 tw-text-primary notification">
        {tagConent}
      </p>
    </div>
  );
};

export default Tags;
