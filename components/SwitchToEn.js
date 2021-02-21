import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SwitchToEn() {
  let router = useRouter();
  return (
    <div>
      <Link href={router.asPath} locale="en">
        <a className="fixed block right-7 z-70 " style={{ bottom: '196px' }}>
          <span className="block w-8 h-8 bg-center bg-cover border-2 rounded-full border-nord4 elevation-5 z-70 dark:border-nord3 bg-en"></span>
        </a>
      </Link>
    </div>
  );
}
