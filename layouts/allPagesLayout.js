import React from 'react';
import { useRouter } from 'next/router';
import SpeechNavigation from './../components/SpeechNavigation';
import Link from 'next/link';

export default function AllPagesLayout({ children }) {
  let router = useRouter();
  return (
    <div>
      <SpeechNavigation />
      {children}
      <div className="flex justify-center align-middle ">
        <ul className="flex flex-row">
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a className="px-4 py-2 mx-2 uppercase bg-blue-500 rounded elevation-2">{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
