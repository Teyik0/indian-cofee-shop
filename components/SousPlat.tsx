interface IProps {
  title: string;
  price: string;
  details: string;
}

const SousPlat = ({ title, price, details }: IProps) => {
  return (
    <div className='flex flex-row justify-between items-center mb-2'>
      <div className='flex flex-col pl-8'>
        <h4 className='tracking-wide text-sm uppercase'>{title}</h4>
        {details != '' && (
          <h5 className='text-xs font-bold mb-2 uppercase'>{details}</h5>
        )}
      </div>
      <div className='flex flex-row'>
        <p className='tracking-widest text-sm ml-8'>
          {price.length == 5 && '.'}..........
        </p>
        <span className='text-sm'>{price}</span>
      </div>
    </div>
  );
};

export default SousPlat;
