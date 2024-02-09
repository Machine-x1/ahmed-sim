import type { GetServerSidePropsContext } from 'next';
import React from 'react';

import { Meta } from '@/component/layouts/Meta';
import Container from '@/component/modules/Container';
import FailedModal from '@/component/modules/FailedModal';
import ModalPop from '@/component/modules/SuccefulModalPop';
import { Main } from '@/component/templates/Main';

const Status = ({ isValid }: { isValid: boolean }) => {
  return (
    <Main meta={<Meta />}>
      <Container className="mx-auto mt-12 h-full min-h-screen w-full   max-w-[1920px] ">
        {isValid ? <ModalPop /> : <FailedModal />}
      </Container>
    </Main>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const isValid = query.is_valid === 'true'; // Assuming the value is a string representation of boolean

  return {
    props: {
      isValid,
    },
  };
}

export default Status;
