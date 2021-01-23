const CardWork2 = ({ img, title, description, tags, link, linkCode }) => {
  let website = true;
  if (link === '') {
    website = false;
  }

  let code = true;
  if (linkCode === '') {
    code = false;
  }
  return (
    <div className="place-self-center">
      <div className="overflow-hidden border-transparent rounded-lg bg-nord6 dark:bg-nord1 elevation-2">
        <img className="object-cover object-center w-full " src={img} alt={title} />
        <div className="h-full">
          <div className="grid px-5 pt-5 pb-2">
            {/* <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">CATEGORY</h2> */}
            <h1 className="mb-3 text-xl font-medium text-nord0 dark:text-nord6 dark:text-shadow title-font ">
              {title}
            </h1>
            <p className="mb-3 leading-relaxed text-nord1 dark:text-nord5 dark:text-shadow ">{description}</p>
            <div className="flex flex-wrap">
              {tags.split(' ').map((tag) => {
                return (
                  <span
                    key={tag}
                    className="px-2 py-1 mb-1 ml-1 text-xs rounded bg-nord4 dark:elevation-1 dark:text-shadow dark:text-nord4 dark:bg-nord3 text-nord3 caps-all-small"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-wrap content-end h-full ">
              {website && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener"
                  title={`Visit ${title}`}
                  className="flex flex-col items-center justify-center flex-1 w-full py-4 mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg hover:text-shadow text-nord3"
                >
                  <i className="w-full h-5 fas fa-globe"></i>
                  <p>Visit Website</p>
                </a>
              )}

              {code && (
                <a
                  href={linkCode}
                  target="_blank"
                  rel="noopener"
                  title="View Source Code"
                  className="flex flex-col items-center justify-center flex-1 w-full py-4 mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg hover:text-shadow text-nord3"
                >
                  <i className="w-full h-5 fas fa-code"></i>
                  <p>Source Code</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWork2;
