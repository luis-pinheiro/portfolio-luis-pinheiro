import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';
import useTranslation from 'next-translate/useTranslation';

const CardHeader = ({ icon, title }) => {
  let { t } = useTranslation();
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-nord10 dark:bg-nord2 elevation-5 ">
      <div className="container flex items-center flex-1 p-2 mx-auto mt-0 lg:p-5 ">
        <div className="inline-flex justify-start ml-0">
          <Link href="/">
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-center transition duration-200 ease-in rounded-full shadow-md dark:bg-nord4 dark:hover:bg-nord3 text-nord1 bg-nord8 dark:hover:text-shadow elevation-1 dark:hover:text-nord6 hover:bg-nord7 hover:elevation-2 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <i className="mr-2 text-lg fas fa-arrow-left"></i> {t('common:goBackButton')}
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-1 font-medium lg:w-1/5 title-font md:mb-0">
          <p className="inline-block my-auto text-2xl text-white uppercase align-middle transform dark:text-nord6 dark:text-shadow">
            <i className={`${icon} mr-2 my-auto `}></i>

            {title}
          </p>
        </div>
      </div>
    </header>
  );
};

export function getServerSideProps() {
  return { props: {} };
}

export default CardHeader;
