import dynamic from 'next/dynamic';

const DynamicMusic = dynamic(() => import('./Music'), { ssr: false });

export default DynamicMusic;
