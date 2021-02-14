import React, { useContext } from 'react';
import Head from 'next/head';
import { PlayContext } from './_app';
import CardFolio from './../components/CardFolio';
import IconLink from '../components/IconLink';
import SocialLinks from './../components/SocialLinks';
import '@fortawesome/fontawesome-free/css/all.css';
import AllPagesLayout from './../layouts/allPagesLayout';
import useTranslation from 'next-translate/useTranslation';
import Dencrypt from './../components/Dencrypt';

const index = () => {
  const isPlaying = useContext(PlayContext);
  let playing = isPlaying.isPlaying;

  let { t } = useTranslation();

  const values = [
    t('common:dencrypt.1'),
    t('common:dencrypt.2'),
    t('common:dencrypt.3'),
    t('common:dencrypt.4'),
    t('common:dencrypt.5'),
  ];

  return (
    <div className="place-self-center">
      <Head>
        <title>Luis Pinheiro | Portfolio</title>
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>

      <div className="grid mx-auto -mb-20 place-items-center">
        <img
          src="/images/profile1.png"
          alt="Picture of the author"
          className={`${
            playing ? 'animate__animated animate__headShake animate__infinite ' : ''
          } z-50 border-8 rounded-full border-opacity-90 profile-img border-nord4 dark:border-nord0 `}
        />
      </div>
      <CardFolio classes="">
        <div className="flex flex-col w-full h-full justify-evenly">
          <div className="grid w-full h-full mx-auto place-items-center">
            <div className="mt-24 ">
              <h1
                className={`flex text-7xl sm:text-8xl text-center transition-colors  ${
                  playing ? 'animate__animated animate__rubberBand animate__infinite animate__delay-2s ' : ''
                } text-nord3 dark:text-nord6 dark:text-shadow  tangerine `}
              >
                {t('common:greeting')}
              </h1>
            </div>

            <Dencrypt values={values} />

            <div className="flex flex-row flex-wrap content-around justify-center w-full px-5 text-2xl">
              <IconLink
                delay="animate__delay-4s"
                to="/about"
                icon="fas fa-user-circle"
                title={t('common:pages.about')}
              ></IconLink>
              <IconLink delay="animate__delay-1s" to="/work" icon="fas fa-briefcase" title={t('common:pages.work')} />

              <IconLink
                delay="animate__delay-3s"
                to="/contact"
                icon="fas fa-envelope"
                title={t('common:pages.contact')}
              />
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
};

index.Layout = AllPagesLayout;

export default index;
