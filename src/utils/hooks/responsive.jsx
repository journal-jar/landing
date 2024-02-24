import React, { createContext, useContext, useEffect, useState } from 'react';

export const ResponsiveContext = createContext();

const DEFAULT = {
  orientation: 'landscape',
  breakpoint: 'desktop',
};

const BREAKPOINTS = {
  mobile: 768,
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
};

const ResponsiveProvider = (props) => {
  const { children } = props;
  const [responsive, setResponsive] = useState(DEFAULT);
  useEffect(() => {
    const updateResponsive = () => {
      const { innerHeight, innerWidth } = window;
      const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait';
      let breakpoint = null;

      if (innerWidth < BREAKPOINTS.mobile) {
        breakpoint = 'mobile';
      } else if (
        innerWidth >= BREAKPOINTS.tablet &&
        innerWidth < BREAKPOINTS.desktop
      ) {
        breakpoint = 'tablet';
      } else if (
        innerWidth >= BREAKPOINTS.desktop &&
        innerWidth < BREAKPOINTS.widescreen
      ) {
        breakpoint = 'desktop';
      } else if (
        innerWidth >= BREAKPOINTS.widescreen &&
        innerWidth < BREAKPOINTS.fullhd
      ) {
        breakpoint = 'widescreen';
      } else if (innerWidth >= BREAKPOINTS.fullhd) {
        breakpoint = 'fullhd';
      }
      setResponsive({
        orientation,
        breakpoint,
      });
    };
    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);
  return (
    <ResponsiveContext.Provider value={{ responsive }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsive = () => useContext(ResponsiveContext);
export { useResponsive };
export default ResponsiveProvider;
