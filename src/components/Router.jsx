import { useState, useEffect, createContext, useContext } from 'react';

const RouterContext = createContext({ path: window.location.pathname, navigate: () => {} });

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('navigate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('navigate', handleLocationChange);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    const navEvent = new Event('navigate');
    window.dispatchEvent(navEvent);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ href, children, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(href);
      window.scrollTo(0, 0); // Scroll to top on navigation
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
