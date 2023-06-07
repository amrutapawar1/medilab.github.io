import React from 'react';
import { useEffect } from 'react';
import { Route, Routes as Switch, useLocation } from 'react-router-dom';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import { RoutePaths } from './RoutePaths';

const PageRoute = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]);

  return (
    <>
      <PageHeader />
      <Switch>
        {
          RoutePaths.map(({ component: Component, path, exact }) =>
            <Route path={path} key={path} exact={exact} element={<Component />} />
          )
        }
      </Switch>
      <PageFooter />
    </>
  )
}

export default PageRoute;