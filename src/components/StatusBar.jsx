export default function StatusBar({
  fund,
  Result,
}) {
 
  return (
    <section
      className={`flex flex-col justify-center items-center
                  mb-5 h-16 w-screen  bg-[#393E46]
                  text-[#EEEEEE] font-semibold`}
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
    >
      <div className='text-center'>
        <span className='mx-2'>{fund}:</span>
        <span>R$ {Intl.NumberFormat('pr-BR').format(Result.toFixed(2))}</span>
      </div>
    </section>
  );
}
