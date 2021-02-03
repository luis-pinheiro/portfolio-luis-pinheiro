import useTranslation from 'next-translate/useTranslation';

export default function ContactForm(props) {
  let { t } = useTranslation();

  return (
    <form name="contact" action="/success" method="POST" data-netlify="true" className="w-full mx-auto p-7">
      <div className="grid grid-cols-1 gap-6">
        <input type="hidden" name="form-name" value="contact" />
        <div className="block">
          <label htmlFor="yourname" className="capitalize text-nord6 dark:text-shadow">
            {props.name}
          </label>{' '}
          <br />
          <input
            type="text"
            name="name"
            id="yourname"
            required
            className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50"
          />
        </div>
        <div className="block">
          <label htmlFor="youremail" className="capitalize text-nord6 dark:text-shadow">
            {props.email}
          </label>{' '}
          <br />
          <input
            type="email"
            name="email"
            id="youremail"
            required
            className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50"
          />
        </div>
        <div className="block">
          <label htmlFor="yourmessage" className="capitalize text-nord6 dark:text-shadow">
            {props.message}
          </label>{' '}
          <br />
          <textarea
            name="message"
            id="yourmessage"
            required
            className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div className="block">
          <button
            type="submit"
            className="block w-full max-w-md px-4 py-2 mx-auto text-xs font-bold uppercase align-middle rounded outline-none text-nord1 bg-nord14 elevation-1 hover:bg-nord7 hover:elevation-2 "
            style={{ transition: 'all .15s ease' }}
          >
            {props.send}
          </button>
        </div>
      </div>
    </form>
  );
}

export function getServerSideProps() {
  return { props: {} };
}
