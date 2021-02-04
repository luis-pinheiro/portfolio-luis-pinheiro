import '@fortawesome/fontawesome-free';
import CardFolio from '../components/CardFolio';
import CardHeader from '../components/CardHeader';
import AllPagesLayout from '../layouts/allPagesLayout';
import useTranslation from 'next-translate/useTranslation';

const services = (props) => {
  let { t } = useTranslation();
  return (
    // <CardFolio classes="w-screen h-screen">
    <div>
      <CardHeader icon="fab fa-whmcs" title={t('common:pages.services')} />
      <CardFolio classes="">
        <div className="container flex flex-row flex-wrap content-around flex-1 h-full mx-auto ">
          <div className="lg:w-2/4 p-7">
            <h4 className="text-2xl capitalize text-nord3 dark:text-nord6 dark:text-shadow">
              <i className="mr-2 fas fa-layer-group"></i>
              {t('services:graphicDesign.title')}
            </h4>
            <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
              {t('services:graphicDesign.description')}
            </p>
          </div>
          <div className="lg:w-2/4 p-7">
            <h4 className="text-2xl capitalize text-nord3 dark:text-nord6 dark:text-shadow">
              <i className="mr-2 fas fa-mobile-alt"></i>
              {t('services:responsiveDesign.title')}
            </h4>
            <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
              {t('services:responsiveDesign.description')}
            </p>
          </div>
          <div className="lg:w-2/4 p-7">
            <h4 className="text-2xl capitalize text-nord3 dark:text-nord6 dark:text-shadow">
              <i className="mr-2 fas fa-code"></i>
              {t('services:themes.title')}
            </h4>
            <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">{t('services:themes.description')}</p>
          </div>
          <div className="lg:w-2/4 p-7">
            <h4 className="text-2xl capitalize text-nord3 dark:text-nord6 dark:text-shadow">
              <i className="mr-2 fas fa-magic"></i>
              {t('services:optimization.title')}
            </h4>
            <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
              {t('services:optimization.description')}
            </p>
          </div>
        </div>
      </CardFolio>
    </div>
  );
};
services.Layout = AllPagesLayout;

export function getStaticProps() {
  return { props: {} };
}

export default services;
