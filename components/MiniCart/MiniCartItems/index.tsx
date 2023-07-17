import React, { useState } from 'react';
import { EditCartIcon, BinIcon } from '@/app/assets/images/svg/icons';
import InputNumber from '@/app/components/ui/InputNumber';

const MiniCartItems = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-6 tw-border-t tw-border-b-0 tw-border-x-0 tw-border-solid tw-py-6 tw-cursor-pointer">
      <div
        style={{
          backgroundImage: "url('/default-test.png')",
        }}
        className="tw-w-[123px] tw-h-[123px]"
      ></div>
      <div className="tw-col-span-2">
        <div className="tw-flex tw-gap-2">
          <div className="tw-text-xl tw-font-semibold tw-text-[--colorText]">
            Signature Pineapple Tarts - Regular (Tray)
          </div>
          <div className="tw-flex tw-gap-3 tw-pt-1">
            <EditCartIcon className="tw-fill-[black] hover:tw-fill-primary tw-transition-all tw-duration-300 tw-ease-linear" />
            <BinIcon className="tw-fill-[black] hover:tw-fill-primary tw-transition-all tw-duration-300 tw-ease-linear" />
          </div>
        </div>
        <div className="tw-text-base tw-font-medium tw-text-[--colorText] tw-mt-1">
          23.00 SGD
        </div>
        <div className="tw-w-[120px] tw-h-10 tw-mt-6">
          <InputNumber value={value} setValue={setValue} />
        </div>
      </div>
    </div>
  );
};

export default MiniCartItems;
