import dynamic from 'next/dynamic';

import React from 'react';

const DynamicMusic = dynamic(() => import('./Music'), { ssr: false });

export default DynamicMusic;
