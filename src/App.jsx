import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App (){
  return (
    <main className="min-h-svh bg-offwhitebg  py-28 px-6 ">
      <section>
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="icone dos carros sedan" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white" >Sedans</h2>
          <p className="font-lexend mb-7">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros/estoque" target="_blank">Ver mais</a>
        </div>
      <div className="bg-green p-12 ">
        <img src={iconSuvs} alt="icone dos carros SUV" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">SUVs</h2>
        <p className="font-lexend mb-7" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-lexend" href="https://www.webmotors.com.br/carros/estoque" target="_blank">Ver mais</a>
      </div>

      <div className="bg-dark-green p-12 rounded-b-lg">
        <img src={iconLuxury} alt="" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl fold-bold text-white">Luxurys</h2>
        <p className="font-lexend mb-7">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo"target="_blank">Ver mais</a>
      </div>

      </section>
    </main>

    )

}