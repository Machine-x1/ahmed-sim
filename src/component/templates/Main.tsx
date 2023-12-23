import type { ReactNode } from 'react';

import Footer from '../modules/Footer';
import Header from '../modules/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="overflow-hidden bg-bodyColor  ">
    {props.meta}
    <Header />
    <div className=" mt-16  ">{props.children}</div>
    <Footer />
  </div>
);

export { Main };
