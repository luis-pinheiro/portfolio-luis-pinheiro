import Image from 'next/image';
import CardFolio from './../components/CardFolio2';
import CardHeader from './../components/CardHeader';
import '@fortawesome/fontawesome-free';
import SocialLinks from './../components/SocialLinks';
import AllPagesLayout from './../layouts/allPagesLayout';

const about = ({ children }) => {
  return (
    <CardFolio classes="w-screen h-screen">
      {}
      <CardHeader icon="fas fa-user-circle" title="About" />
      <div className="flex flex-col justify-around w-full h-full place-items-center">
        <div className="flex flex-col w-full mt-20 ">
          <div className=" place-items-center">
            <div className="grid mx-auto place-items-center profile-img-about">
              <Image
                className="z-10 self-center block mx-auto mb-16 "
                src="/images/profile.jpg"
                alt="Picture of the author"
                layout="intrinsic"
                width="150px"
                height="150px"
              />
            </div>

            <h1 className="text-6xl text-center text-nord3 dark:text-nord6 dark:text-shadow lg:text-9xl my-7 tangerine">
              Luis Pinheiro
            </h1>
          </div>
          <div className="place-self-center">
            <h4 className="text-2xl text-center dark:text-nord6 dark:text-shadow text-nord3 px-7 lg:px-10 ">
              I'm a Portuguese enthusiast self-taught Fullstack-developer evolving in the JavaScript ecosystem. <br /> I
              like to learn new stuffs concerning Web technologies.
            </h4>
          </div>
        </div>
        <div id="social-links " className="w-full pb-5 mt-10 sm:max-w-md">
          <ul className="flex flex-wrap justify-around place-content-center">
            <li>
              <SocialLinks className="" icon="fab fa-linkedin" url="https://www.linkedin.com/in/luis-pinheiro" />
            </li>
            <li>
              <SocialLinks className="" icon="fab fa-dev" url="https://dev.to/luispinheiro" />
            </li>
            <li>
              <SocialLinks className="" icon="fab fa-free-code-camp" url="https://www.freecodecamp.org/luis-pinheiro" />
            </li>

            <li>
              <SocialLinks className="" icon="fab fa-github" url="https://github.com/luis-pinheiro" />
            </li>
          </ul>
        </div>
      </div>
    </CardFolio>
  );
};

about.Layout = AllPagesLayout;

export default about;
