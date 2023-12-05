/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { Suspense } from 'react';

import Container from '@/component/modules/Container';
import ProductPage from '@/component/modules/ProductPage';

const index = () => {
  return (
    <div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductPage />
        </Suspense>
        <div className="w-full">
          {/* <ProductTrending msg="check another products" /> */}
        </div>
      </Container>
    </div>
  );
};
export default index;

// export async function getStaticPaths() {
//   return {
//     props: {},
//   };
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
// }
