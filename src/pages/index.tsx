import Container from '@/component/elements/Container';
import { Meta } from '@/component/layouts/Meta';
import Banner from '@/component/modules/Banner';
import Footer from '@/component/modules/Footer';
import Header from '@/component/modules/Header';
import NavLinks from '@/component/modules/NavLinks';
import { Main } from '@/component/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <Container
        className="h-screen w-screen rounded-none "
        bgColor="bg-[#00213d]"
      >
        <main id="home" className="mx-auto w-full max-w-[1920px]">
          <Header />
          <NavLinks />
          <Banner />
          {/* <Categories /> */}
          <Footer />

          {/* <ProductFeatures products={products} /> */}
          {/* <ProductTrending /> */}
          {/* <ReviewsSection /> */}
          {/* <AboutUs /> */}
          {/* <ContactForm /> */}
        </main>
      </Container>
    </Main>
  );
};

export default Index;
