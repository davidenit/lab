import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import {
  SearchIcon,
  CartIcon,
  UserMediumIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronRegularDownIcon,
} from '../../app/assets/images/svg/icons';
import { Button } from '@mui/material';
import Image from 'next/image';
import ImgaeHoverNavbar from '../../app/assets/images/png/Rectangle.png';
import MiniCart from '../MiniCart';

const dataNavbar = [
  {
    id: 1,
    text: 'Home',
  },
  {
    id: 2,
    text: 'Menu',
    children: [
      {
        id: 1,
        text: 'Kueh',
      },
      {
        id: 2,
        text: 'Signature Range',
      },
      {
        id: 3,
        text: 'In-House Specialities',
      },
      {
        id: 4,
        text: 'Non-Cream Cakes & Rolls',
        children: [
          {
            id: 1,
            text: 'Disney pixar cars',
          },
          {
            id: 2,
            text: 'Disney pixar cars',
          },
          {
            id: 3,
            text: 'Disney pixar cars',
          },
          {
            id: 4,
            text: 'Disney pixar cars',
          },
          {
            id: 5,
            text: 'Disney pixar cars',
          },
          {
            id: 6,
            text: 'Disney pixar cars',
          },
          {
            id: 7,
            text: 'Disney pixar cars',
          },
          {
            id: 8,
            text: 'Disney pixar cars',
          },
          {
            id: 9,
            text: 'Disney pixar cars',
          },
          {
            id: 10,
            text: 'Disney pixar cars',
          },
          {
            id: 11,
            text: 'Disney pixar cars',
          },
          {
            id: 12,
            text: 'Disney pixar cars',
          },
          {
            id: 13,
            text: 'Disney pixar cars',
          },
          {
            id: 14,
            text: 'Disney pixar cars',
          },
          {
            id: 15,
            text: 'Disney pixar cars',
          },
          {
            id: 16,
            text: 'Disney pixar cars',
          },
          {
            id: 17,
            text: 'Disney pixar cars',
          },
          {
            id: 18,
            text: 'Disney pixar cars',
          },
        ],
      },
      {
        id: 5,
        text: 'Baby 1st Month Packages',
      },
      {
        id: 6,
        text: 'Character Cakes',
      },
      {
        id: 7,
        text: 'Explorer all Product',
      },
    ],
  },
  {
    id: 3,
    text: 'Outlet',
  },
  {
    id: 4,
    text: 'About',
  },
  {
    id: 5,
    text: 'Contact',
  },
];

function Navbar() {
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenChildren, setIsOpenChildren] = useState<boolean>(false);
  const [isHandleOpenNavbar, setIsHandleOpenNavbar] = useState<boolean>(false);

  // handle show background
  useEffect(() => {
    const handleScroll = () => {
      const shoulShowBackground = window.scrollY > 0;
      setShowBackground(shoulShowBackground);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflowY = !isHandleOpenNavbar ? 'auto' : 'hidden';
    }
  }, [isHandleOpenNavbar]);

  // handle show search input
  const handleSearch = () => {
    setShowSearchInput((prev) => !prev);
  };

  const handleOpenNavbar = () => {
    setIsHandleOpenNavbar((prev) => !prev);
  };

  const handleOpenNavMobile = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpenNavMobileChildren = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsOpenChildren((prev) => !prev);
  };

  return (
    <div className="tw-relative">
      <div>
        <div
          className={` tw-flex ${
            isHandleOpenNavbar ? 'tw-p-6 tw-pb-8' : 'tw-pr-5 tw-pl-4 tw-py-2'
          }  tw-w-full tw-fixed sm:tw-h-16 md:tw-h-24 tw-top-0 tw-left-0 tw-bg-[white] md:tw-bg-[transparent]  md:tw-py-0 md:tw-px-0 tw-justify-between md:tw-justify-around tw-items-center tw-z-10 tw-transition-all tw-duration-300 tw-ease-linear  ${
            showBackground ? 'md:tw-bg-[white] ' : ''
          }`}
        >
          <div
            className={` tw-flex tw-items-center tw-transition-all tw-duration-300 tw-ease-linear`}
          >
            <HamburgerIcon
              fontSize={24}
              className={`md:tw-hidden tw-mr-2 tw-cursor-pointer ${
                isHandleOpenNavbar ? 'tw-hidden' : 'tw-block'
              }`}
              onClick={handleOpenNavbar}
            />
            <div
              className={`tw-w-[190px] tw-h-[50px] lg:tw-w-[240px] lg:tw-h-[64px] tw-z-50 ${
                styles.logo
              } ${showBackground ? styles.logoRed : styles.logo}`}
            ></div>
          </div>

          <div className="tw-flex tw-justify-between tw-items-center">
            <nav
              className={`${
                isHandleOpenNavbar ? 'tw-left-0' : 'tw-left-[-1250px]'
              } tw-transition-all tw-duration-500 tw-ease-linear ${styles.nav}`}
            >
              <ul className={`${styles.ul} tw-flex tw-relative `}>
                {dataNavbar.map((item) => (
                  <li
                    key={item.id}
                    className={`tw-list-none md:tw-py-10 md:tw-pb-[2rem] tw-cursor-pointer ${styles.liParents} ${styles.hoverUnderline}`}
                    onClick={item.children && handleOpenNavMobile}
                  >
                    <a
                      className={`md:tw-mr-8 tw-cursor-pointer tw-absolute tw-flex tw-justify-between tw-w-full ${
                        showBackground
                          ? 'md:tw-text-[black]'
                          : 'md:tw-text-[white]'
                      }  ${styles.underlineNavbar} ${styles.underlineMobile}`}
                    >
                      {item.text}
                      {item.children && (
                        <ChevronRegularDownIcon
                          fontSize={24}
                          className={`md:tw-hidden tw-cursor-pointer tw-transition-all tw-duration-300 tw-ease-linear ${
                            isOpen && 'tw-rotate-180'
                          }`}
                        />
                      )}
                    </a>
                    {item.children && (
                      <div
                        className={`tw-absolute md:tw-bg-[--colorBgDefault] lg:tw-w-[1066px] md:tw-w-[702px] lg:tw-h-[468px] md:tw-h-[618px] tw-top-full lg:tw-left-[-477px] ${styles.responParents} `}
                      >
                        <div
                          className={`lg:tw-px-14 md:tw-px-8 tw-py-8 tw-h-full tw-flex tw-flex-col tw-justify-between `}
                        >
                          <ul className={`tw-pl-0 ${styles.hoverChildNav}`}>
                            {item.children?.map((item) => (
                              <li
                                key={item.id}
                                className="tw-list-none xl:tw-pr-14 tw-pr-12 last:tw-text-[blue] last:tw-underline"
                              >
                                <a
                                  href=""
                                  className="tw-no-underline tw-mb-[18px] tw-inline-block tw-text-[--colorText] hover:tw-text-[--colorPrimary]"
                                >
                                  {item.text}
                                  {item.children && (
                                    <div
                                      className={`tw-absolute tw-top-0 lg:tw-right-[-288%] lg:tw-pl-14 tw-pl-8 ${styles.responRight} `}
                                    >
                                      <ul className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-w-max tw-pl-0">
                                        {item.children?.map((item) => (
                                          <li
                                            key={item.id}
                                            className="tw-list-none tw-mr-16 tw-w-[150px] tw-mb-[18px]"
                                          >
                                            <a
                                              className="tw-no-underline tw-text-[--colorText] tw-capitalize tw-font-[390] hover:tw-text-[--colorPrimary] "
                                              href="#"
                                            >
                                              {item.text}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                      <div>
                                        <Image
                                          src={ImgaeHoverNavbar}
                                          alt="ImageHoverNavbar"
                                          className={styles.ImageHoverNavbar}
                                        />
                                      </div>
                                    </div>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                          <a
                            href="#"
                            className={`tw-text-[--colorLink] tw-mb-9 ${styles.linkNavbar}`}
                          >
                            Explorer all Product
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="tw-mt-8 md:tw-hidden">
                      {isOpen && (
                        <ul className="tw-p-0 ">
                          {item.children?.map((item) => (
                            <li
                              key={item.id}
                              className="tw-list-none last:tw-text-[blue] last:tw-underline last:tw-pb-2"
                              onClick={
                                item.children && handleOpenNavMobileChildren
                              }
                            >
                              <a
                                className={`tw-m-0 tw-mb-6 tw-no-underline tw-flex tw-justify-between tw-text-yellow-500 ${
                                  isOpenChildren &&
                                  item.children &&
                                  'tw-text-[red] tw-mb-4'
                                }`}
                              >
                                {item.text}
                                {item.children && (
                                  <ChevronRegularDownIcon
                                    fontSize={24}
                                    className={`md:tw-hidden tw-cursor-pointer tw-transition-all tw-duration-300 tw-ease-linear ${
                                      isOpenChildren && 'tw-rotate-180'
                                    }`}
                                  />
                                )}
                              </a>
                              <div className="tw-mb-6">
                                {isOpenChildren && (
                                  <ul className="tw-pl-[30px]">
                                    {item.children?.map((item) => (
                                      <li
                                        key={item.id}
                                        className="tw-list-none tw-mb-4"
                                      >
                                        <a
                                          href=""
                                          className="tw-no-underline tw-text-[black] "
                                        >
                                          {item.text}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="tw-cursor-pointer tw-flex tw-mt-0 ">
              <CloseIcon
                fontSize={24}
                className={`${
                  isHandleOpenNavbar ? 'tw-block' : 'tw-hidden'
                } md:tw-hidden tw-cursor-pointer`}
                onClick={handleOpenNavbar}
              />

              <>
                <SearchIcon
                  fontSize={24}
                  className={`tw-mr-1 md:tw-mr-5 tw-ml-2 ${
                    showBackground
                      ? 'md:tw-stroke-[--colorText]'
                      : 'md:tw-stroke-[white]'
                  }  hover:tw-stroke-primary tw-transition-all tw-duration-300 tw-ease-linear md:tw-block tw-stroke-[black]  ${
                    isHandleOpenNavbar && 'tw-hidden'
                  }`}
                  onClick={handleSearch}
                />
                <MiniCart
                  isHandleOpenNavbar={isHandleOpenNavbar}
                  showBackground={showBackground}
                />
                <UserMediumIcon
                  fontSize={24}
                  className={`tw-mr-1 ${
                    showBackground
                      ? 'md:tw-stroke-[--colorText]'
                      : 'md:tw-stroke-[white]'
                  }  hover:tw-stroke-primary tw-transition-all tw-duration-300 md:tw-block tw-ease-linear tw-stroke-[black]  ${
                    isHandleOpenNavbar && 'tw-hidden'
                  }`}
                />
              </>
            </div>

            {/* Search Input */}
            <div
              className={`tw-top-16 md:tw-top-24 tw-absolute tw-border-0 tw-bg-[white] tw-w-full tw-right-0 tw-transition-all tw-duration-300 tw-ease-linear ${
                showSearchInput
                  ? 'md:tw-h-20 tw-h-16 tw-border-t-[1px]  tw-border-solid tw-border-t-[#a4a4a4] '
                  : 'tw-h-0'
              } tw-overflow-hidden`}
            >
              <form className="tw-flex tw-justify-between md:tw-justify-evenly tw-items-center tw-pt-3  md:tw-pt-4 xl:tw-px-52 md:tw-px-8 tw-px-4">
                <div className="tw-flex tw-justify-between tw-items-end tw-px-5 tw-border-0 tw-pb-3 sm:tw-w-[289px]  md:tw-w-[600px] tw-border-b-[1px] tw-border-solid tw-border-b-[black]">
                  <input
                    type="text"
                    className={`tw-outline-none tw-text-lg tw-border-0 ${styles.placeholder}`}
                    placeholder="Search your products"
                  />
                  <SearchIcon
                    fontSize={24}
                    className=" tw-stroke-[--colorText] "
                  />
                </div>
                <div>
                  <CloseIcon
                    fontSize={24}
                    className="tw-cursor-pointer"
                    onClick={handleSearch}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='tw-bg-[black] tw-opacity-70'> */}
      <div className={`${styles.home}`}>
        <div className="tw-flex tw-flex-col tw-items-center tw-pt-[156px] md:tw-pt-[128px]">
          <h1 className="tw-text-[white] tw-text-[28px] md:tw-text-[40px] tw-font-normal tw-leading-[120%] tw-mb-2 md:tw-w-[70%]  lg:tw-w-[40%] tw-text-center">
            OLD FAVOURITES TO SASTIFY YOUR NOSTALGIA
          </h1>
          <p className="tw-text-[white] tw-text-[16px] md:tw-text-[20px] tw-font-[390] tw-leading-[24px] md:tw-w-[60%] lg:tw-w-[30%]  tw-mb-8 tw-mt-0 tw-text-center">
            What began as a home kitchen, has grown into a widely popular brand.
          </p>
          <Button variant="contained" sx={{ px: 5 }}>
            Discover
          </Button>
        </div>
      </div>
      {/* </div> */}

      <div className="tw-h-[100vh]"></div>
    </div>
  );
}

export default Navbar;
