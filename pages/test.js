import CardFolio from './../components/CardFolio2';
import CardHeader from './../components/CardHeader';
import '@fortawesome/fontawesome-free';
import SpeechNavigation from './../components/SpeechNavigation';
// import Redirect from './../components/Redirect';

const test = ({ children }) => {
  return (
    <CardFolio classes="w-screen h-screen">
      <CardHeader icon="fas fa-user-circle" title="test" />
      <div className="flex flex-col justify-around w-full h-full place-items-center">
        <SpeechNavigation />
      </div>
    </CardFolio>
  );
};

export default test;
