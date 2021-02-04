import '@fortawesome/fontawesome-free';
import AllPagesLayout from '../layouts/allPagesLayout';
import useTranslation from 'next-translate/useTranslation';
import CardFolio from '../components/CardFolio';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Custom404() {
  let { t } = useTranslation('common');

  return (
    <CardFolio>
      <h1 className="m-20 text-center text-7xl text-nord2 dark:text-nord6 dark:text-shadow">Oops...</h1>
      <h4 className="m-20 text-2xl text-center text-nord2 dark:text-nord6 dark:text-shadow">{t('common:404')}</h4>
      <Link href="/">
        <div className="flex items-center justify-center align-middle">
          <button
            type="button"
            className="px-4 py-2 text-base font-semibold text-center transition duration-200 ease-in rounded-full shadow-md dark:bg-nord4 dark:hover:bg-nord3 text-nord1 bg-nord8 dark:hover:text-shadow elevation-1 dark:hover:text-nord6 hover:bg-nord7 hover:elevation-2 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <i className="mr-2 text-lg fas fa-arrow-left"></i> {t('common:goBackButton')}
          </button>
        </div>
      </Link>
    </CardFolio>
  );
}

Custom404.Layout = AllPagesLayout;
