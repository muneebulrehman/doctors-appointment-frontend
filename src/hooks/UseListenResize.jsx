import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import config from '../config';
import { setMobileMode } from '../features/layout/layoutSlice';

export default function UseListenResize() {
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= config.mobileBreakPoint) {
        dispatch(setMobileMode(false));
      } else {
        dispatch(setMobileMode(true));
      }
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      dispatch(setMobileMode(true));
    };
  }, []);
}
