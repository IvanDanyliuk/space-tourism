import { useState, useEffect } from 'react';
import { WindowDimentions } from '../types';


const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
      width: undefined,
      height: undefined,
  });
  useEffect(() => {
      function handleResize(): void {
          setWindowDimensions({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;