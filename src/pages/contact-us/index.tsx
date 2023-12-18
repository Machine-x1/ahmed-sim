import React from 'react';

import { Meta } from '@/component/layouts/Meta';
import ContactUs from '@/component/modules/ContactUs';
import Container from '@/component/modules/Container';
import { Main } from '@/component/templates/Main';

const index = () => {
  return (
    <Main meta={<Meta />}>
      <div>
        <Container className="w-full">
          <ContactUs />
        </Container>
      </div>
    </Main>
  );
};

export default index;
