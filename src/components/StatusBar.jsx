export default function StatusBar({
  fund,
  Result,
  HandletoggleGraph,
  toggleGraph,
}) {
  const childHandleToggleGraph = () => {
    HandletoggleGraph(!toggleGraph);
    console.log(toggleGraph);
  };
  return (
    <section className='h-14 w-screen flex flex-col mb-5 justify-center items-center bg-slate-600 text-slate-100 font-semibold'>
      <div className='text-center'>
        <span className="mx-2">{fund}:</span>      
        <span>R$ {Intl.NumberFormat('pr-BR').format(Result.toFixed(2))}</span>
      </div>
      <button className='bg-[#ef476f] hover:bg-[#f45b69] rounded-lg flex justify-self-start text-sm px-2' onClick={childHandleToggleGraph}>
        {toggleGraph ? 'Yeld' : 'Value Per Month'}
      </button>
    </section>
  );
}
