import { Meta } from '@/component/layouts/Meta';
import AboutUs from '@/component/modules/AboutUs';
import Banner from '@/component/modules/Banner';
import Categories from '@/component/modules/Categories';
import ContactForm from '@/component/modules/ContactForm';
import ProductFeatures from '@/component/modules/ProductFeatures';
import ReviewsSection from '@/component/modules/ReviewsSection';
import { Main } from '@/component/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <main id="home" className="mx-auto w-full max-w-[1920px] ">
        {/* <NavLinks /> */}
        <Banner />
        <Categories />
        <ProductFeatures />
        {/* <ProductTrending msg="Featured Products" /> */}
        <ReviewsSection />
        <AboutUs />
        <ContactForm />
      </main>
    </Main>
  );
};

export default Index;
