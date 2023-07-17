import { CartIcon, CloseIcon } from '@/app/assets/images/svg/icons';
import {
  Button,
  ClickAwayListener,
  Fade,
  IconButton,
  Paper,
  Popper,
  Snackbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MiniCartDetail from './MiniCartDetail';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IMiniCart {
  showBackground: boolean;
  isHandleOpenNavbar: boolean;
}

const MiniCart: React.FC<IMiniCart> = (props) => {
  const { showBackground, isHandleOpenNavbar } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const isMobileView = useMediaQuery('(max-width:768px)');

  const handleOpen = (event: React.MouseEvent<Element, MouseEvent>) => {
    setOpen((prevState) => !prevState);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      {isMobileView ? (
        <div>
          <CartIcon
            fontSize={24}
            className={`md:tw-mr-6 tw-mr-1 ${
              showBackground ? 'md:tw-fill-[--colorText]' : 'md:tw-fill-[white]'
            } tw-fill-[black] hover:tw-fill-primary md:tw-block tw-transition-all tw-duration-300 tw-ease-linear ${
              isHandleOpenNavbar && 'tw-hidden'
            }`}
          />
        </div>
      ) : (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
            <div onClick={handleOpen}>
              <CartIcon
                fontSize={24}
                className={`md:tw-mr-6 tw-mr-1 ${
                  showBackground
                    ? 'md:tw-fill-[--colorText]'
                    : 'md:tw-fill-[white]'
                } tw-fill-[black] hover:tw-fill-primary md:tw-block tw-transition-all tw-duration-300 tw-ease-linear ${
                  isHandleOpenNavbar && 'tw-hidden'
                }`}
              />
            </div>
            <Popper
              open={open}
              transition
              sx={{
                zIndex: 1000,
                marginTop: '40px !important',
              }}
              placement={'bottom-end'}
              anchorEl={anchorEl}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <div className="tw-py-4 tw-px-1 tw-w-[432px] tw-relative">
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        sx={{
                          p: 0.5,
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                        }}
                        onClick={() => setOpen(false)}
                      >
                        <CloseIcon />
                      </IconButton>
                      {/* <div className="tw-h-16 tw-w-full tw-flex tw-justify-center tw-items-end">
                    <div className="tw-text-lg tw-font-normal">
                      You have no items in your shopping cart.
                    </div>
                  </div> */}
                      <MiniCartDetail />
                    </div>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        </ClickAwayListener>
      )}
    </>
  );
};

export default MiniCart;
