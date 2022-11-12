interface IProps {
  title: string;
  price: string;
  details: string;
}

const SousPlat = ({ title, price, details }: IProps) => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-col pl-8'>
        <h4 className='tracking-wide text-sm'>{title}</h4>
        {details != '' && (
          <h5 className='text-xs font-semibold mb-2'>{details}</h5>
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
