/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import Container from '@/component/modules/Container';
import ProductPage from '@/component/modules/ProductPage';
import ProductTrending from '@/component/modules/ProductTrending';

interface ServerSidePropsParams {
  params: {
    slug: string;
  };
}

const index = (data: any) => {
  return (
    <div>
      <Container>
        <ProductPage data={data} />
        <div className="w-full">
          <ProductTrending msg="check another products" />
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
export async function getServerSideProps({ params }: ServerSidePropsParams) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/products/${params.slug}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
