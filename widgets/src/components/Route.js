import { useEffect, useState  } from 'react';

const Route = ({ path, children }) => {
  const [currentPathname, setCurrentPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPathname(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return currentPathname === path
    ? children
    : null;
};

export default Route;