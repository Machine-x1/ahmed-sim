import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

const Meta = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title="Sim Racing Corner"
        titleTemplate="Sim Racing Corner"
        defaultTitle="Sim Racing Corner"
        description="Discover an extensive collection of high-performance sim racing gear and accessories at SimRacingCorner. Explore top-quality racing wheels, pedals, immersive cockpits, and more to elevate your simulated racing experience. Our comprehensive selection caters to beginners and seasoned enthusiasts alike, offering cutting-edge equipment to fuel your passion for virtual racing. Shop now and unleash the thrill of precision, speed, and adrenaline with our premium sim racing products at SimRacingCorner. Join our community of enthusiasts who are passionate about virtual racing and share their passion with others. Welcome to the world of sim racing at SimRacingCorner."
        canonical="https://www.simrckw.com/"
        openGraph={{
          title: 'Sim Racing Corner',
          description:
            'Welcome to SimRacingCorner, where speed meets precision! Explore an extensive collection of top-tier sim racing equipment and accessories. Dive into a world of immersive experiences with our premium racing wheels, high-performance pedals, realistic cockpits, and cutting-edge accessories. Fuel your passion for virtual racing with quality gear tailored for both enthusiasts and beginners. Elevate your simulated racing journey and dominate the virtual track with the finest selection at SimRacingCorner. Find your edge, embrace the thrill, and power up your sim racing adventures today!',
          url: router.route,
          locale: 'en',
          site_name: 'simrckw.com',
          images: [
            {
              url: `${router.basePath}/assets/images/sc.png`,
              width: 800,
              height: 600,
              alt: 'SimRacingCorner Background',
              type: 'image/png',
            },
          ],
          type: 'website',
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'Sim Racing Gear, Racing Wheels, Racing Pedals, Simulated Racing Cockpits, Virtual Racing Equipment, Racing Simulators, Racing Accessories, High-Performance Racing Gear, Sim Racing Enthusiast Supplies, Immersive Racing Experience, Quality Sim Racing Equipment, Virtual Motorsport Gear, Racing Simulation Hardware, Precision Racing Controls, Gaming Racing Peripherals, Competitive Sim Racing Gear, Virtual Track Accessories, Ultimate Sim Racing Setup, Customizable Racing Rigs, Professional-grade Sim Racing Equipment,',
          },
        ]}
        twitter={{
          handle: '@the_simracingcorner', // Replace with your Instagram handle
          site: '@the_simracingcorner', // Replace with your Instagram handle (optional)
        }}
      />
    </>
  );
};

export { Meta };
