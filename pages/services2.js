import '@fortawesome/fontawesome-free';
import CardFolio from './../components/CardFolio2';
import CardHeader from './../components/CardHeader';

const services = () => {
  return (
    <CardFolio classes="w-screen h-screen">
      <CardHeader icon="fab fa-whmcs" title="services" />
      <div className="container flex flex-row flex-wrap content-around flex-1 h-full pt-20 mx-auto ">
        <div class="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            <i class="fas fa-layer-group mr-2"></i>Graphic Design
          </h4>
          <p class="text-nord3 dark:text-nord6 dark:text-shadow  pl-4 pt-2 ">
            I will analise websites running similar business and check for new tech trends to make a good looking design
            for your business.
          </p>
        </div>
        <div class="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            <i class="fas fa-mobile-alt mr-2"></i>Responsive WebDesign
          </h4>
          <p class="text-nord3 dark:text-nord6 dark:text-shadow  pl-4 pt-2 ">
            I will create web pages that render's well on a variety of devices and window or screen sizes and compatible
            with diferent web browsers.
          </p>
        </div>
        <div class="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            {/* <i class="fab fa-wordpress"></i> */}
            {/* <i class="fab fa-joomla"></i> */}
            <i class="fas fa-code mr-2"></i>Custom WordPress and Joomla Themes
          </h4>
          <p class="text-nord3 dark:text-nord6 dark:text-shadow  pl-4 pt-2 ">
            I create responsive websites that convert in both WordPress and Joomla
          </p>
        </div>
        <div class="lg:w-2/4 p-7">
          <h4 className="text-2xl text-nord3 dark:text-nord6 dark:text-shadow ">
            <i class="fas fa-magic mr-2"></i>Website Optimization
          </h4>
          <p class="text-nord3 dark:text-nord6 dark:text-shadow  pl-4 pt-2 ">
            Is your WebSite loading slow and or you want to get a new modern look, i can do that.
          </p>
        </div>
      </div>
    </CardFolio>
  );
};

export default services;
