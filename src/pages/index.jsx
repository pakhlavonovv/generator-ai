import { lazy, Suspense } from 'react';
import Loading from '../components/loading';

const Home = lazy(() => import('./home'));
const Why = lazy(() => import('./why'));
const Contact = lazy(() => import('./contact'));
const NotFound = lazy(() => import('./not-found'));


const LazyHome = () => (
  <Suspense fallback={<Loading/>}>
    <Home />
  </Suspense>
);
const LazyContact = () => (
  <Suspense fallback={<Loading/>}>
    <Contact />
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
export { LazyHome, LazyContact, LazyWhy, LazyNotFound }
