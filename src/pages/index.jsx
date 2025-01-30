import { lazy, Suspense } from 'react';
import Loading from '../components/loading';

const Home = lazy(() => import('./home'));
const Why = lazy(() => import('./why'));
const NotFound = lazy(() => import('./not-found'));


const LazyHome = () => (
  <Suspense fallback={<Loading/>}>
    <Home />
  </Suspense>
);
const LazyWhy = () => (
  <Suspense fallback={<Loading/>}>
    <Why />
  </Suspense>
);
const LazyNotFound = () => (
  <Suspense fallback={<Loading/>}>
    <NotFound />
  </Suspense>
);
export { LazyHome, LazyWhy, LazyNotFound }
