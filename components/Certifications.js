import { Image } from 'next/image';

const Certifications = ({ title, source, link }) => {
  return (
    <div className="border">
      <a href={link}>
        <img
          className="rounded-lg elevation-4 hover:elevation-7 "
          src={source}
          alt={title}
          width={500}
          height={'auto'}
        />
      </a>
    </div>
  );
};

export default Certifications;
