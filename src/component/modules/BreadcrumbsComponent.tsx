import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const BreadcrumbsComponent = ({
  product,
  lang,
}: {
  product: any;
  lang: string;
}) => {
  const { t } = useTranslation('common');

  return (
    <Breadcrumbs isDisabled>
      <BreadcrumbItem>{t(`Home`)}</BreadcrumbItem>
      <BreadcrumbItem>{t(`Product`)}</BreadcrumbItem>
      <BreadcrumbItem> {product?.name[lang]}</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
