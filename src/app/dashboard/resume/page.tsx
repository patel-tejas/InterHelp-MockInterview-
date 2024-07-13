import React from 'react';
import UploadForm from './_components/UploadForm';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className='text-xl md:text-3xl my-5 text-center font-bold text-blue-800'>Resume Application Tracking System(ATS)</h1>
      <UploadForm />
    </div>
  );
};

export default Home;
