import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SwitchToEn() {
  let router = useRouter();
  return (
    <div>
      <Link href={router.asPath} locale="en">
        <a className="fixed block right-5 z-70 top-64">
          <span
            className="block w-10 h-10 bg-center bg-cover border-2 rounded-full border-nord4 elevation-5 z-70 dark:border-nord3"
            style={{ backgroundImage: `url("/images/flags/GB.png")` }}
          ></span>
        </a>
      </Link>
    </div>
  );
}
