import CardFolio from './../components/CardFolio';
import AllPagesLayout from './../layouts/allPagesLayout';
import CardHeader from './../components/CardHeader';

const success = () => {
  return (
    <div>
      <CardHeader icon="far fa-check-circle" title="Success" />
      <CardFolio>
        <div className="text-center bg-nord14 -m-14 p-14 text-nord2">
          <h1 className="text-2xl">Thank you!</h1>
          <p>Your message has been successfully sent. I will contact you very soon!</p>
        </div>
      </CardFolio>
    </div>
  );
};

success.Layout = AllPagesLayout;
export default success;
