import CardFolio from '../components/CardFolio';
import CardHeader from '../components/CardHeader';
import '@fortawesome/fontawesome-free';
import SocialLinks from '../components/SocialLinks';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import AllPagesLayout from '../layouts/allPagesLayout';
import Image from 'next/image';
import Certifications from './../components/Certifications';

const about = (props) => {
  let { t } = useTranslation('about');
  return (
    <div>
      <Head>
        <title>Luis Pinheiro | Portfolio</title>
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>
      <CardHeader icon="fas fa-user-circle" title={t('common:pages.about')} />
      <div className="grid mx-auto mt-20 -mb-20 place-items-center">
        <Image
          src="/images/profile.jpg"
          alt="Picture of the author"
          className="z-50 border-8 rounded-full border-opacity-90 profile-img border-nord4 dark:border-nord0"
          width={150}
          height={150}
        />
      </div>
      <CardFolio classes="">
        <div className="flex flex-col justify-around w-full h-full place-items-center">
          <div className="flex flex-col w-full ">
            <div className=" place-items-center">
              <h1 className="text-6xl text-center text-nord3 dark:text-nord6 dark:text-shadow lg:text-9xl my-7 tangerine">
                Luis Pinheiro
              </h1>
            </div>
            <div className="place-self-center">
              <h4 className="text-2xl text-center dark:text-nord6 dark:text-shadow text-nord3 px-7 lg:px-10 ">
                {t('about:description')}
              </h4>
            </div>
          </div>

          <div className="flex flex-col pt-2 mt-10 space-y-2">
            <div className="py-5 text-xl text-center dark:text-nord6 dark:text-shadow text-nord3 px-7 lg:px-10">
              <h4 className="font-semibold capitalize ">{t('about:languages.languages')}</h4>
              <ul className="flex flex-row justify-center mt-4 space-x-5 text-lg capitalize">
                <li className="capitalize">{t('about:languages.pt')}</li>
                <li className="capitalize">{t('about:languages.en')}</li>
                <li className="capitalize">{t('about:languages.nl')}</li>
              </ul>
            </div>
            <div className="py-5 text-xl text-center dark:text-nord6 dark:text-shadow text-nord3 px-7 lg:px-10">
              <h4 className="font-semibold capitalize">{t('about:tools')}</h4>
              <ul className="flex flex-wrap justify-center mt-4 space-x-5 text-lg align-middle">
                <li>Electron</li>
                <li>React</li>
                <li>NextJs</li>
                <li>TailwindCss</li>
                <li>Bootstrap</li>
                <li>Visual Studio Code</li>
                <li>Gulp</li>
                <li>Photoshop</li>
                <li>Sass</li>
                <li>MaterializeCss</li>
                <li>jQuery</li>
                <li>npm</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          {/* <div className="py-5 text-xl text-center dark:text-nord6 dark:text-shadow text-nord3 px-7 lg:px-10">
            <h4 className="font-semibold capitalize">{t('about:certificates')}</h4>
            <div>
              <Certifications
                title="front end libraries"
                source="/images/certifications/front-end-libraries.png"
                link="https://www.freecodecamp.org/certification/luis-pinheiro/front-end-libraries"
              />
            </div>
          </div> */}

          <div id="social-links " className="w-full pb-5 mt-10 sm:max-w-md">
            <ul className="flex flex-wrap justify-around place-content-center">
              <li>
                <SocialLinks className="" icon="fab fa-linkedin" url="https://www.linkedin.com/in/luis-pinheiro" />
              </li>
              <li>
                <SocialLinks className="" icon="fab fa-dev" url="https://dev.to/luispinheiro" />
              </li>
              <li>
                <SocialLinks
                  className=""
                  icon="fab fa-free-code-camp"
                  url="https://www.freecodecamp.org/luis-pinheiro"
                />
              </li>

              <li>
                <SocialLinks className="" icon="fab fa-github" url="https://github.com/luis-pinheiro" />
              </li>
            </ul>
          </div>
        </div>
      </CardFolio>
    </div>
  );
};

about.Layout = AllPagesLayout;

export function getStaticProps() {
  return { props: {} };
}

export default about;
