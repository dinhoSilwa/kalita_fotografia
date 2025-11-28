
import { HeroBanner } from "./_components/Hero/HeroBanner";
import { HeaderHeadings } from "../shared/ui/home/HeaderHeadings";
import { Testimony } from "./_components/testimony/Testimony";
import PortfolioManagement from "@/domain/portfolio_management/PortfolioManagement";


//ARQUIVO DE ROTAS
export default function Home() {
  return (
   <main className="">

    <PortfolioManagement/>
    
   </main>
  );
}
