import Pt from './SpeechRecognitionPt';
import Nl from './SpeechRecognitionNl';
import En from './SpeechReacognitionEn';
import { useRouter } from 'next/router';

const SpeechNavigation = () => {
  let locale = useRouter().locale;

  return <>{locale === 'en' ? <En /> : locale === 'pt' ? <Pt /> : <Nl />}</>;
};

export default SpeechNavigation;
