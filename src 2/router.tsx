/* ============================================================================
   A very small router — about 60 lines, no dependencies.

   Why not react-router-dom: this source is applied to the Lovable repo by
   uploading files through GitHub's web interface, which cannot run
   `npm install`. Depending on nothing outside React means the upload works
   with no changes to package.json at all.

   It does what this site needs and nothing more: pushState navigation,
   back/forward, and an active-link flag. If you later want react-router-dom,
   swap this file's exports for theirs — the call sites use the same names
   (`Link`, `useLocation`).
   ========================================================================== */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type RouterValue = {
  pathname: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterValue>({
  pathname: '/',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    window.history.pushState({}, '', to);
    setPathname(to);
  }, []);

  const value = useMemo(() => ({ pathname, navigate }), [pathname, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useLocation() {
  return useContext(RouterContext);
}

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  'aria-current'?: 'page' | undefined;
};

export function Link({ to, children, ...rest }: LinkProps) {
  const { navigate } = useContext(RouterContext);
  return (
    <a
      href={to}
      {...rest}
      onClick={(e) => {
        // Let modified clicks (new tab, download, etc.) behave normally.
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
          return;
        }
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
