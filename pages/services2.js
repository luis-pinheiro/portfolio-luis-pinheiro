import '@fortawesome/fontawesome-free';
import CardFolio from './../components/CardFolio2';
import CardHeader from './../components/CardHeader';
import AllPagesLayout from './../layouts/allPagesLayout';

const services = () => {
  return (
    <CardFolio classes="w-screen h-screen">
      <CardHeader icon="fab fa-whmcs" title="services" />
      <div className="container flex flex-row flex-wrap content-around flex-1 h-full pt-20 mx-auto ">
        <div className="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            <i className="mr-2 fas fa-layer-group"></i>Graphic Design
          </h4>
          <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
            I will analise websites running similar business and check for new tech trends to make a good looking design
            for your business.
          </p>
        </div>
        <div className="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            <i className="mr-2 fas fa-mobile-alt"></i>Responsive WebDesign
          </h4>
          <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
            I will create web pages that render's well on a variety of devices and window or screen sizes and compatible
            with diferent web browsers.
          </p>
        </div>
        <div className="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            {/* <i className="fab fa-wordpress"></i> */}
            {/* <i className="fab fa-joomla"></i> */}
            <i className="mr-2 fas fa-code"></i>Custom WordPress and Joomla Themes
          </h4>
          <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
            I create responsive websites that convert in both WordPress and Joomla
          </p>
        </div>
        <div className="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            <i className="mr-2 fas fa-magic"></i>Website Optimization
          </h4>
          <p className="pt-2 pl-4 text-nord3 dark:text-nord6 dark:text-shadow ">
            Is your WebSite loading slow and or you want to get a new modern look, i can do that.
          </p>
        </div>
      </div>
    </CardFolio>
  );
};
services.Layout = AllPagesLayout;

export default services;
