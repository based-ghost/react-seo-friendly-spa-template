
import { useLocation } from 'react-router-dom';
import useUpdateEffect from './useUpdateEffect';

const useScrollToTop = (): void => {
  const location = useLocation();

  useUpdateEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollToTop;
