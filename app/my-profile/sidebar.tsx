'use client';
import clsx from 'clsx';
import { useState } from 'react';
import {
  ShopingBagIcon,
  BookIcon,
  CreaditCardIcon,
  HamburgerIcon,
  HeartIcon,
  MailOpenIcon,
  UserMediumIcon,
} from '../assets/images/svg/icons';
import styles from './sideBar.module.css';
import { Box } from '@mui/material';
import Link from 'next/link';

interface ISideBar {
  id: number;
  title: string;
  icon: React.ReactNode;
  url?: string;
}

const SideBar = () => {
  const [active, setActive] = useState<number>(1);
  const SideBarData: ISideBar[] = [
    {
      id: 1,
      title: 'Account Dashboard',
      icon: <HamburgerIcon fontSize={24} />,
      url: 'my-profile',
    },
    {
      id: 2,
      title: 'My Orders',
      icon: <ShopingBagIcon fontSize={24} />,
      url: 'my-profile/my-orders',
    },
    {
      id: 3,
      title: 'My Wish List',
      icon: <HeartIcon fontSize={24} />,
    },
    {
      id: 4,
      title: 'Address Book',
      icon: <BookIcon fontSize={24} />,
    },
    {
      id: 5,
      title: 'Account Information',
      icon: <UserMediumIcon fontSize={24} />,
    },
    {
      id: 6,
      title: 'Newletter Subscriptions',
      icon: <MailOpenIcon fontSize={24} />,
    },
    {
      id: 7,
      title: 'My Payment Methods',
      icon: <CreaditCardIcon fontSize={24} />,
    },
  ];
  return (
    <Box className="tw-min-w-[256px]">
      <div className="tw-h-full tw-py-[25px] tw-border-[1.5px] tw-border-[#F5F4F3] tw-border-solid tw-rounded-lg">
        <ul className="tw-space-y-[22px] tw-font-medium tw-list-none tw-m-0 tw-p-0">
          {SideBarData &&
            SideBarData.map((item: ISideBar) => (
              <li
                className={clsx('tw-px-[24px]', {
                  [styles.active]: active === item.id,
                })}
                key={item.id}
                onClick={() => setActive(item.id)}
              >
                <Link
                  href={item?.url || '#'}
                  className="tw-transition tw-ease-in-out tw-delay-150 tw-flex tw-items-center tw-text-text hover:tw-text-primary tw-font-330 hover:tw-font-normal tw-text-lg tw-leading-[120%]"
                >
                  {item.icon}
                  <span className="tw-ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Box>
  );
};
export default SideBar;
