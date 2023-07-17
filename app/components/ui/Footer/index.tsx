import { FooterLogo } from '@/app/assets/images/svg/FooterLogo';
import useResize from '@/lib/hook/useResize';
import React from 'react';

const Footer = () => {
  const { isMobileView } = useResize();
  return (
    <>
      <div className="tw-bg-text tw-text-white">
        <div className="tw-text-center md:tw-text-left md:tw-flex md:tw-flex-row-reverse md:tw-justify-between">
          <FooterLogo />
          <div className="tw-gap-8 tw-flex tw-flex-col tw-mt-10 md:tw-flex-row md:tw-mt-0 md:tw-gap-16">
            <div className="tw-text-base md:tw-w-[220px]">
              <div className="tw-font-semibold tw-mb-2 md:tw-mb-4">
                PRODUCTS
              </div>
              {isMobileView ? null : (
                <div className="tw-font-normal tw-flex tw-flex-col tw-leading-[19px] tw-gap-2 md:tw-gap-4">
                  <a>
                    <span>Kueh</span>
                  </a>
                  <a>
                    <span>Singnature Range</span>
                  </a>
                  <a>
                    <span>In-house specialities</span>
                  </a>
                  <a>
                    <span>Non-cream cakes & rolls</span>
                  </a>
                  <a>
                    <span>Character Cakes</span>
                  </a>
                  <a>
                    <span>Baby 1st month packages</span>
                  </a>
                </div>
              )}
            </div>
            <div className="tw-text-base md:tw-w-[186px]">
              <div className="tw-font-semibold tw-mb-2 md:tw-mb-4">COMPANY</div>
              <div className="tw-font-normal tw-flex tw-flex-col tw-leading-[19px] tw-gap-2 md:tw-gap-4">
                <a>
                  <span>About</span>
                </a>
                <a>
                  <span>Contact</span>
                </a>
                <a>
                  <span>Outlet Locations</span>
                </a>
              </div>
            </div>
            <div className="tw-text-base md:tw-w-[186px]">
              <div className="tw-font-semibold tw-mb-2 md:tw-mb-4">LEGAL</div>
              <div className="tw-font-normal tw-flex tw-flex-col tw-leading-[19px] tw-gap-2 md:tw-gap-4">
                <a>
                  <span>Privacy Policy</span>
                </a>
                <a>
                  <span>Terms of Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-border tw-mt-8 tw-border-white tw-w-full tw-border-solid md:tw-mt-12" />
        <div className="tw-mt-6 tw-text-sm tw-font-normal tw-leading-4 tw-text-center md:tw-mt-4 md:tw-text-end">
          Copyright © 2021 Bengawan Solo Pte Ltd All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
