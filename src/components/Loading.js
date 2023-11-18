import { Oval } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='spinner'>
      <Oval
        ariaLabel='loading-indicator'
        height={40}
        width={40}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color='white'
        secondaryColor='gray'
      />
    </div>
  );
};
