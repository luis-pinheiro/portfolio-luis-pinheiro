export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true" className="w-full mx-auto p-7">
      <div className="grid grid-cols-1 gap-6">
        <input type="hidden" name="form-name" value="contact" />
        <div className="block">
          <label htmlFor="yourname" className="text-nord6 dark:text-shadow">
            Your Name:
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
          <label htmlFor="youremail" className="text-nord6 dark:text-shadow">
            Your Email:
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
          <label htmlFor="yourmessage" className="text-nord6 dark:text-shadow">
            Message:
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
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
