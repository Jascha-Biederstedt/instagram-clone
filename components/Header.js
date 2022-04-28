import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      <div className="w-24 h-24 relative cursor-pointer hidden lg:inline-grid">
        <Image
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
