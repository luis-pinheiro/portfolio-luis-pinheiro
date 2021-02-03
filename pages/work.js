import CardFolio from '../components/CardFolio';
import CardHeader from '../components/CardHeader';
import '@fortawesome/fontawesome-free';
import CardWork from '../components/CardWork';
import AllPagesLayout from '../layouts/allPagesLayout';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const work = (props) => {
  let { t } = useTranslation('work');
  return (
    <div>
      <Head>
        <title>Luis Pinheiro | Portfolio</title>
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>
      <CardHeader icon="fas fa-briefcase" title={t('common:pages.work')} />

      <CardFolio classes="">
        <div className="container grid w-full h-full px-5 mx-auto mb-5 gap-7 lg:pt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-auto">
          <CardWork
            img="/images/portfolio/profitcreations.png"
            title={t('work:oldPortfolio.title')}
            description={t('work:oldPortfolio.description')}
            tags="HTML CSS JAVASCRIPT BOOTSTRAP JQUERY GULP NPM SASS"
            link="https://luis-pinheiro.github.io/"
            linkCode="https://github.com/luis-pinheiro/luis-pinheiro.github.io"
          />
          <CardWork
            img="/images/portfolio/latuta.png"
            title="Latuta"
            description="WordPress Theme"
            tags="HTML CSS JAVASCRIPT MATERIALIZECSS JQUERY WORDPRESS GULP NPM SASS"
            link=""
            linkCode="https://github.com/luis-pinheiro/Latuta"
          />
          <CardWork
            img="/images/portfolio/nc-customs.png"
            title="NC-Customs"
            description="WordPress Theme"
            tags="HTML CSS JAVASCRIPT MATERIALIZECSS JQUERY WORDPRESS GULP NPM SASS wd_s"
            link=""
            linkCode="https://bitbucket.org/ProfitCreations/nccustoms-wp/src/master/"
          />
          <CardWork
            img="/images/portfolio/Trendytv.png"
            title="TrendyTV"
            description="Website"
            tags="HTML CSS JAVASCRIPT BOOTSTRAP JQUERY LESS"
            link=""
            linkCode=""
          />
          <CardWork
            img="/images/portfolio/vastgoedjunior.png"
            title="VastGoedJunior"
            description="Website"
            tags="HTML CSS JAVASCRIPT BOOTSTRAP JQUERY JOOMLA LESS"
            link=""
            linkCode=""
          />
          <CardWork
            img="/images/portfolio/teetopup.png"
            title="TeeTopUp"
            description="FrontEnd"
            tags="HTML CSS JAVASCRIPT BOOTSTRAP JQUERY GULP NPM COFFEESCRIPT SASS"
            link=""
            linkCode=""
          />
        </div>
      </CardFolio>
    </div>
  );
};

work.Layout = AllPagesLayout;

export function getStaticProps() {
  return { props: {} };
}

export default work;
