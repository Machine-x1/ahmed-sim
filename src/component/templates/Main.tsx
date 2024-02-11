import type { ReactNode } from 'react';

import Footer from '../modules/Footer';
import Header from '../modules/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="mx-auto w-full max-w-[1920px] overflow-hidden bg-bodyColor">
    {props.meta}
    <div className="bg-hoverTextColor">
      <Header />
    </div>
    <div className=" mt-16  ">{props.children}</div>
    <Footer />
  </div>
);

export { Main };
