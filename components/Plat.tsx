interface IProps {
  title: string;
  details: string;
  price: string;
}

const Plat = ({ title, details, price }: IProps) => {
  return (
    <div className='flex flex-col w-2/3 mb-2'>
      <h3 className='tracking-wide text-xl'>{title}</h3>
      <p className='text-xs font-semibold'>{details}</p>
      {price != '' && (
        <div className='flex flex-row'>
          <p className='tracking-widest'>...........</p>
          <span>{price}</span>
        </div>
      )}
    </div>
  );
};

export default Plat;
