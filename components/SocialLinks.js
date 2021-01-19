const SocialLinks = ({ className, icon, url }) => {
  return (
    <a
      className={`${className} text-nord3 dark:text-nord6 dark:hover:text-nord5 dark:text-shadow  text-2xl`}
      href={url}
      target="_blank"
    >
      <i className={`${icon} text-nord3 dark:text-nord6 dark:hover:text-nord5 dark:text-shadow `}></i>
    </a>
  );
};

export default SocialLinks;
