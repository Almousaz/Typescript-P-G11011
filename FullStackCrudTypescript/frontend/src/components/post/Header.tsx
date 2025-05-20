import React, { FC } from 'react';

const Header: FC = () => {
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
  };

  return (

    
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <p>Post (2)</p>
      </div>



      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='search'
            className='input input-bordered input-sm w-24 md:w-auto'
            onChange={onChangeSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
