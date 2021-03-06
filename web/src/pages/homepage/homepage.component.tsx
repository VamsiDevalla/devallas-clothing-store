import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const Homepage = (): JSX.Element => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default Homepage;
