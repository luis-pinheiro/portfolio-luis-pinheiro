import { useState, useEffect } from 'react';
import CardFolio from './../components/CardFolio';
import CardHeader from './../components/CardHeader';
import '@fortawesome/fontawesome-free';
import ContactSocialLinksGroup from './../components/ContactSocialLinksGroup';
import AllPagesLayout from './../layouts/allPagesLayout';

const contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <CardHeader icon="fas fa-envelope" title="Contact" />
      <CardFolio classes="">
        <div className="flex flex-col items-center flex-auto h-full sm:flex-row ">
          <div
            className="hidden w-1/6 h-full rounded bg-nord7 dark:bg-nord2 elevation-2 border-nord2 sm:block "
            style={{ minWidth: '200px' }}
          >
            <ContactSocialLinksGroup cls="flex flex-col justify-center h-full rounded" />
          </div>

          <div className="flex w-full h-full p-10 mx-auto rounded lg:h-auto lg:w-2/4 dark:bg-nord2 border-nord2 elevation-2 bg-nord9 place-items-center">
            {/* Form */}
            <form
              name="contact"
              method="POST"
              className="w-full mx-auto p-7"
              data-netlify="true"
              action="/?success=true"
            >
              {success && <p className="text-green-700">Successfully submitted form!</p>}
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-nord6 dark:text-shadow">Full name</span>
                  <input
                    type="text"
                    className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50"
                    placeholder=""
                  />
                </label>
                <label className="block">
                  <span className="text-nord6 dark:text-shadow">Email address</span>
                  <input
                    type="email"
                    className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50"
                    placeholder="john@example.com"
                  />
                </label>

                <label className="block ">
                  <span className="text-nord6 dark:text-shadow">Additional details</span>
                  <textarea
                    className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50 "
                    rows="3"
                  ></textarea>
                </label>
                <div className="block">
                  <button
                    className="block w-full max-w-md px-4 py-2 mx-auto text-xs font-bold uppercase align-middle rounded outline-none text-nord1 bg-nord14 elevation-1 hover:bg-nord7 hover:elevation-2 "
                    style={{ transition: 'all .15s ease' }}
                    type="submit"
                  >
                    <i className="mr-2 fas fa-paper-plane"></i> Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="flex h-full mt-7">
            <ContactSocialLinksGroup cls=" sm:hidden flex flex-wrap flex-auto justify-evenly content-center " />
          </div> */}
        </div>
      </CardFolio>
    </div>
    // <CardFolio classes="w-screen h-screen">
  );
};
contact.Layout = AllPagesLayout;
export default contact;
