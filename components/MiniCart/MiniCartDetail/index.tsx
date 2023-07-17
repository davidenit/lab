import React from 'react';
import MiniCartItems from '../MiniCartItems';
import styled from './MiniCartDetail.module.css';

const MiniCartDetail = () => {
  return (
    <div>
      <div className="tw-py-6 tw-px-4 tw-text-xl tw-font-normal tw-text-[--colorText]">
        1 Item(s) in Cart
      </div>
      <div
        className={`tw-gap-6 tw-px-4 tw-flex-col tw-max-h-[530px] tw-overflow-y-scroll ${styled.listItem}`}
      >
        <MiniCartItems />
        <MiniCartItems />
        <MiniCartItems />
        <MiniCartItems />
      </div>
      <div className="tw-px-4 tw-py-4">
        <div className="tw-flex tw-justify-between tw-text-lg tw-font-medium">
          <span className="tw-text-[--colorText]">TOTAL</span>
          <div className="tw-text-[--colorPrimary]">46.00 SGD</div>
        </div>
        <div className="tw-mt-4 tw-text-sm tw-font-medium">
          <div
            className={`tw-w-full tw-py-[13px] tw-text-center tw-bg-primary tw-text-white 
            tw-rounded tw-border-[2px] tw-border-solid tw-transition-all tw-duration-300 tw-ease-linear tw-border-[--colorPrimary] 
            hover:tw-bg-white hover:tw-text-primary tw-cursor-pointer`}
          >
            CHECKOUT
          </div>
          <div className="tw-text-[--colorLink] tw-w-full tw-text-center tw-underline tw-mt-4">
            <span className=" tw-cursor-pointer">VIEW CART</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCartDetail;
