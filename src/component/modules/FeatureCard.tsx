import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({
  icon,
  textKey,
}: {
  icon: ReactNode;
  textKey: string;
}) => {
  const { t } = useTranslation('common');
  return (
    <div className="inline-flex h-[230px] w-[270px] items-center justify-center  px-[35px] py-8 shadow">
      <div className="flex h-[161px] w-64 flex-col items-center justify-center gap-4 ">
        {icon}
        <p className=" text-center text-white">{t(textKey)}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
