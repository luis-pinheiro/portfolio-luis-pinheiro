import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SwitchToNl() {
  let router = useRouter();
  return (
    <div>
      <Link href={router.asPath} locale="nl">
        <a className="fixed block right-7 z-70 " style={{ bottom: '233px' }}>
          <span
            className="block w-8 h-8 bg-center bg-cover border-2 rounded-full border-nord4 elevation-5 z-70 dark:border-nord3"
            style={{ backgroundImage: `url("/images/flags/NL.png")` }}
          ></span>
        </a>
      </Link>
    </div>
  );
}
