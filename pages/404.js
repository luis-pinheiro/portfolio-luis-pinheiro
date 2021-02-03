import '@fortawesome/fontawesome-free';
import AllPagesLayout from '../layouts/allPagesLayout';
import useTranslation from 'next-translate/useTranslation';
import CardFolio from '../components/CardFolio';

export default function Custom404() {
  let { t } = useTranslation('common');

  return (
    <CardFolio>
      <h1>{t('common:404')}</h1>;
    </CardFolio>
  );
}

Custom404.Layout = AllPagesLayout;
