import Image from 'next/image';

const CardWork = ({ img, alt, title, description, tags, link, linkCode }) => {
  return (
    <div className="">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md sm:h-36 sm:flex sm:flex-row sm:place-self-center elevation-2 hover:elevation-4">
        <div
          className="self-center object-cover w-full border-2 border-green-700 h-72 sm:h-full sm:w-64 sm:items-center sm:flex-wrap justify-items-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
          }}
        >
          {/* <img className="object-center w-full mx-auto h-36 sm:object-contain md:max-w-none" src={img} alt={alt} /> */}
        </div>

        <div className="flex flex-col justify-around flex-grow p-2 ">
          <h4 className="pl-4 text-lg font-semibold text-left sm:text-center">{title}</h4>
          <p className="text-center">{description}</p>
          <div className="text-right sm:text-center ">
            <span className="px-2 py-1 text-xs align-middle bg-gray-400 rounded-full ">{tags}</span>
          </div>
        </div>
        <div className="flex mx-auto border-l border-gray-300 sm:w-32 sm:flex-col">
          {if (link !== '') {
 <a
            href={link}
            target="_blank"
            rel="noopener"
            title={`Visit ${title}`}
            className="flex flex-col items-center justify-center flex-1 w-full py-4 mx-auto text-center hover:elevation-1 hover:bg-gray-300"
          >
            <i className="w-full h-5 fas fa-globe"></i>
            <p>Visit Website</p>
          </a>
          }}

          <a
            href={linkCode}
            target="_blank"
            rel="noopener"
            title="View Source Code"
            className="flex flex-col items-center justify-center flex-1 w-full py-4 mx-auto text-center hover:elevation-1 hover:bg-gray-300"
          >
            <i className="w-full h-5 fas fa-code"></i>
            <p>Source Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
