import CardFolio from '../components/CardFolio';
import CardHeader from '../components/CardHeader';
import '@fortawesome/fontawesome-free';
// import CardWork from '../components/CardWork';
import CardWork from '../components/CardWork2';
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
        <div className="container grid w-full h-full px-5 mx-auto mb-28 gap-7 lg:pt-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-auto">
          {/* <CardWork
            img="/images/portfolio/apostagratis.png"
            title="Aposta Gratis"
            description="WordPress Theme"
            tags="WordPress TailwindCss Gulp node php"
            link="https://apostagratis.pt/"
            linkCode="https://github.com/luis-pinheiro/casinos-7"
            linkDeployed=""
            codepenLink=""
          /> */}

          <CardWork
            img="/images/portfolio/next-portfolio.png"
            title="Next-Portfolio"
            description="Website"
            tags="ReactJs NextJs TailwindCss Nord framer-motion next-translate postcss react-speech-recognition use-dencrypt-effect"
            link=""
            linkCode="https://github.com/luis-pinheiro/portfolio-nextjs"
            linkDeployed=""
            codepenLink=""
          />

          <CardWork
            img="/images/portfolio/profitcreations.png"
            title={t('work:oldPortfolio.title')}
            description={t('work:oldPortfolio.description')}
            tags="BOOTSTRAP JQUERY SASS gulp materialize-css t-scroll"
            link="https://luis-pinheiro.github.io/"
            linkCode="https://github.com/luis-pinheiro/luis-pinheiro.github.io"
            linkDeployed=""
            codepenLink=""
          />
          {/* Markdown*/}
          <CardWork
            img="/images/portfolio/markdown.png"
            title="Markdown Previewer"
            description="App made in ReactJs"
            tags="React bootstrap marked freecodecamp"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="https://codepen.io/ProfitCreations/full/JjRoyoz"
          />
          {/* Drum machine */}
          <CardWork
            img="/images/portfolio/drum.png"
            title="Drum machine"
            description="Drum machine app made in reactJs"
            tags="React bootstrap freecodecamp"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="https://codepen.io/ProfitCreations/full/GRjZXbV"
          />

          {/* Simon Game */}
          <CardWork
            img="/images/portfolio/simon.png"
            title="Simon Game"
            description="Game in JavaScript"
            tags="Html5 CSS3 Javascript Bootstrap AnimateCss jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="http://codepen.io/ProfitCreations/full/aWjMRa/"
          />
          {/* Javascript Calculator */}
          <CardWork
            img="/images/portfolio/Calculator.png"
            title="Javascript Calculator"
            description="Responsive Calculator made with JavaScript"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="http://codepen.io/ProfitCreations/full/VbwmRZ/"
          />

          {/* Pomodoro Clock */}
          <CardWork
            img="/images/portfolio/Pomodoro.png"
            title="Pomodoro Clock"
            description="Pomodoro Clock made in Javascript"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="https://codepen.io/ProfitCreations/full/YVWYOm/"
          />

          {/* Tic Tac Toe */}
          <CardWork
            img="/images/portfolio/TicTacToe.png"
            title="TicTacToe Game"
            description="TicTacToe game made in JavaScript"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="http://codepen.io/ProfitCreations/full/vmXVxE/"
          />

          {/* TwichTV Api*/}
          <CardWork
            img="/images/portfolio/twitchtv.png"
            title="TwitchTv api"
            description="FreeCodeCamp Project"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="http://codepen.io/ProfitCreations/full/apaJyd/"
          />
          {/* Random Quotes */}
          <CardWork
            img="/images/portfolio/random-quotes.png"
            title="Random Quotes"
            description="FreeCodeCamp Project"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="http://codepen.io/ProfitCreations/full/dNdmJd/"
          />
          {/*  wikipedia viewer */}
          <CardWork
            img="/images/portfolio/wiki.png"
            title="Wikipedia Viewer"
            description="FreeCodeCamp Project"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Sass"
            link=""
            linkCode=""
            linkDeployed=""
            codepenLink="https://codepen.io/ProfitCreations/full/pRVWMO/"
          />

          <CardWork
            img="/images/portfolio/latuta.png"
            title="Latuta"
            description="WordPress Theme"
            tags="MATERIALIZECSS WORDPRESS SASS sage gulp"
            link=""
            linkCode="https://github.com/luis-pinheiro/Latuta"
            linkDeployed=""
            codepenLink=""
          />
          <CardWork
            img="/images/portfolio/nc-customs.png"
            title="NC-Customs"
            description="WordPress Theme"
            tags="MATERIALIZECSS WORDPRESS SASS php"
            link=""
            linkCode="https://bitbucket.org/ProfitCreations/nccustoms-wp/src/master/"
            linkDeployed=""
            codepenLink=""
          />

          <CardWork
            img="/images/portfolio/vastgoedjunior.png"
            title="VastGoedJunior"
            description="Joomla Theme"
            tags="BOOTSTRAP JQUERY JOOMLA LESS php"
            link=""
            linkCode="https://github.com/luis-pinheiro/VastGoedJunior"
            linkDeployed=""
            codepenLink=""
          />
          <CardWork
            img="/images/portfolio/teetopup.png"
            title="TeeTopUp"
            description="PSD to Html5, CSS3, Javascript"
            tags="Html5 CSS3 Javascript Bootstrap jQuery Gulp Npm Coffeescript Sass"
            link=""
            linkDeployed="https://teetopup-profitcreations.vercel.app/"
            codepenLink=""
            linkCode="https://github.com/luis-pinheiro/teetopup"
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
