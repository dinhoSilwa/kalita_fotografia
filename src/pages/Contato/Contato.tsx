import Card from "./components/Card"


const Contato = () => {
  return (
    <section className="max-w-7xl h-[calc(100vh-7rem)] bg-quaternary flex justify-center items-center flex-col m-auto">
      <div className="w-7xl h-[50%] flex justify-center items-center flex-col gap-6 bg-[#D9D9D9]">
        <h1 className="w-[556px] text-6xl font-bold text-[#545454]">Quer agendar uma sessão?</h1>
        
        <div className="w-[556px]">
          
          <div className="text-3xl font-bold text-[#533E29] relative after:content-[''] after:w-[98px] after:h-[1px] after:bg-black after:absolute after:left-[0px] after:top-[20px] after:translate-y-[-50%]">

          </div>

          <p className="text-3xl font-bold text-[#242424] relative ml-[105px]">Entre em contato conosco</p>
        </div>
        
      </div>
      <div className="bg-black  w-full h-[50%]">
        {/* <Card />
        <Card />
        <Card /> */}
        <h1 className="text-amber-50">Cards</h1>
      </div>
    </section>
  )
}
export default Contato