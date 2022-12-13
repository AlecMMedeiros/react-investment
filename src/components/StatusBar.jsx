export default function StatusBar({ fund, Result }) {
  return (
    <section className="h-14 flex flex-col mb-5 justify-center items-center bg-slate-600 text-slate-100 font-semibold">
      <div>{fund}</div>
      <div>R$ {Intl.NumberFormat('pr-BR').format(Result.toFixed(2))}</div>
    </section>
  );
}
