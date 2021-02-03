import { useState, useEffect } from 'react';
import CardFolio from './../components/CardFolio';
import CardHeader from './../components/CardHeader';
import '@fortawesome/fontawesome-free';
import ContactSocialLinksGroup from './../components/ContactSocialLinksGroup';
import AllPagesLayout from './../layouts/allPagesLayout';
import ContactForm from './../components/ContactForm';
import useTranslation from 'next-translate/useTranslation';

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

          <div className="flex w-full h-full p-10 mx-auto rounded lg:h-auto lg:w-2/4 dark:bg-nord2 border-nord2 elevation-2 bg-nord9 place-items-center">
            {/* Form */}
            <ContactForm />
          </div>
          {/* <div className="flex h-full mt-7">
            <ContactSocialLinksGroup cls=" sm:hidden flex flex-wrap flex-auto justify-evenly content-center " />
          </div> */}
        </div>
      </CardFolio>
    </div>
    // <CardFolio classes="w-screen h-screen">
  );
};
contact.Layout = AllPagesLayout;

export function getServerSideProps() {
  return { props: {} };
}

export default contact;
