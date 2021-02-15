import { useState, useEffect } from 'react';
import CardFolio from './../components/CardFolio';
import CardHeader from './../components/CardHeader';
import '@fortawesome/fontawesome-free';
import ContactSocialLinksGroup from './../components/ContactSocialLinksGroup';
import AllPagesLayout from './../layouts/allPagesLayout';
import useTranslation from 'next-translate/useTranslation';
import ContactFormVercel from '../components/ContactFormVercel';

const contact = (props) => {
  const [success, setSuccess] = useState(false);

  let { t } = useTranslation();

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <CardHeader icon="fas fa-envelope" title={t('common:pages.contact')} />
      <CardFolio classes="">
        <div className="flex flex-col items-center flex-auto h-full sm:flex-row ">
          <div
            className="hidden w-1/6 h-full rounded bg-nord7 dark:bg-nord2 elevation-2 border-nord2 sm:block "
            style={{ minWidth: '200px' }}
          >
            <ContactSocialLinksGroup cls="flex flex-col justify-center h-full rounded" />
          </div>

          <div className="flex w-full h-full xl:p-10  mx-auto rounded lg:h-auto lg:w-2/4 dark:bg-nord2 border-nord2 elevation-2 bg-nord9 place-items-center">
            {/* Form */}
            <ContactFormVercel
              email={t('contact:email')}
              message={t('contact:message')}
              send={t('contact:send')}
              sending={t('contact:sending')}
              submitted={t('contact:submitted')}
              successMesage={t('contact:successMesage')}
              error={t('contact:error')}
            />

          </div>

        </div>
      </CardFolio>
    </div>
  );
};
contact.Layout = AllPagesLayout;

export function getStaticProps() {
  return { props: {} };
}

export default contact;
