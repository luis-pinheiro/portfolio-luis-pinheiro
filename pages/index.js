import Head from 'next/head';
import CardFolio from './../components/CardFolio';
import IconLink from '../components/IconLink';
import SocialLinks from './../components/SocialLinks';
import '@fortawesome/fontawesome-free/css/all.css';
import AllPagesLayout from './../layouts/allPagesLayout';
// import './../textScrambler';

// if (typeof window !== 'undefined') {
//   require('../textScrambler');
// }

export default function Index() {
  // let language = window.navigator.userLanguage || window.navigator.language;
  // alert(language);
  return (
    <div className="place-self-center">
      <Head>
        <title>Luis Pinheiro | Portfolio</title>
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>

      <div className="grid mx-auto -mb-20 place-items-center">
        <img
          src="/images/profile.jpg"
          alt="Picture of the author"
          className="z-50 border-8 border-opacity-75 rounded-full profile-img border-nord4 dark:border-nord0 "
        />
      </div>
      {/* <CardFolio vh="70vh" classes="place-self-center container"> */}
      <CardFolio classes="">
        <div className="flex flex-col w-full h-full justify-evenly">
          <div className="grid w-full h-full mx-auto place-items-center">
            <div className="mt-24 ">
              <h1 className="flex text-6xl text-center transition-colors text-nord3 dark:text-nord6 dark:text-shadow lg:text-9xl tangerine ">
                Luis Pinheiro
              </h1>

              <div
                id="scramble"
                className="text-xl font-semibold text-center dark:text-nord6 dark:text-shadow text-nord3 my-7 code"
              ></div>
            </div>
            <div className="flex flex-row flex-wrap content-around justify-center w-full px-5 text-2xl">
              <IconLink to="/about" icon="fas fa-user-circle" title={'About'}></IconLink>
              <IconLink to="/work" icon="fas fa-briefcase" title={'Work'} />
              <IconLink to="/services" icon="fab fa-whmcs" title={'Services'} />
              <IconLink to="/contact" icon="fas fa-envelope" title={'Contact'} />
            </div>
            <div id="social-links " className="w-full mt-10 sm:max-w-md">
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
        </div>
      </CardFolio>
    </div>
  );
}

Index.Layout = AllPagesLayout;
