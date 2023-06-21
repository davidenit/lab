import { useEffect, useState } from 'react';

export const BreakPoints = {
  XS: 0,
  MD: 768,
  LG: 1024,
};

const useResize = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    setIsMobileView(
      window.outerWidth < BreakPoints.MD || window.innerWidth < BreakPoints.MD
    );

    const handleResize = () => {
      setIsMobileView(
        window.outerWidth < BreakPoints.MD || window.innerWidth < BreakPoints.MD
      );
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobileView: isMobileView && window?.outerWidth < BreakPoints.MD,
  };
};

export default useResize;
