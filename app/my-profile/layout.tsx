'use client';
import { Box, Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import SideBar from './sidebar';

interface IMyProfileLayout extends PropsWithChildren {}

const MyProfileLayout: FC<IMyProfileLayout> = (props) => {
  return (
    <Container>
      <Box className="tw-flex tw-flex-1 tw-justify-start tw-gap-[32px] tw-w-full tw-pt-[80px] tw-pb-[6opx]">
        <SideBar />
        {props.children}
      </Box>
    </Container>
  );
};

export default MyProfileLayout;
