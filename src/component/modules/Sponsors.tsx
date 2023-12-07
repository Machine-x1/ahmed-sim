import Image from 'next/image';

const Sponsors = () => (
  <div className="border-collapse">
    <div className="flex items-center justify-center">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <Image
          src="/assets/images/clerk.png"
          alt="Clerk – Authentication & User Management for Next.js"
          width={260}
          height={224}
        />
      </a>
      <a href="https://turso.tech/?utm_source=nextjsstarterbp">
        <Image
          src="/assets/images/turso.png"
          alt="SQLite Developer Experience"
          width={260}
          height={224}
        />
      </a>
    </div>
  </div>
);

export default Sponsors;
