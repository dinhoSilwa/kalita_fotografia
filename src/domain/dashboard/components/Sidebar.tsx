
import Image from "next/image";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { MenuDashboardButton } from "./MenuDashboardButton";
import { sidebarLinks } from "./sidebar.contents";

export function  Sidebar({ children }: { children: React.ReactNode }) {

  function Navbar() {
    return (
      <nav className="hidden md:block md:mt-14">
        <h2 className="mb-6 text-kalita-brown-dark font-semibold text-lg">Gerenciamento</h2>

        <div className="flex flex-col gap-4 items-start">
          {sidebarLinks.map(({ href, label, icon }) => (
            <Link key={label} href={href} className="inline-flex items-center gap-3 text-base font-normal">
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <aside
        className='flex flex-col justify-between bg-white md:w-[25%] min-w-[260px] py-10 h-[100px] md:h-screen md:items-center'
      >
        <div className="px-8">
          <header className="flex justify-between items-center gap-1">

            <div className="hidden md:block">
              <Image
                src='/kalita-logo.svg'
                alt='Logo da kalita'
                width={90}
                height={90}
                priority
              />
            </div>

            <div className="md:hidden">
              <MenuDashboardButton />
            </div>

            <h1 className="text-kalita-brown-dark text-lg font-semibold">Área Administrativa</h1>
          </header>

          <div>
            <Navbar />
          </div>
        </div>

        <div className="hidden md:block border-t border-kalita-bg-light-brown w-full pt-6 px-8">
          <button className="flex items-center gap-2 text-[15px] cursor-pointer text-base text-kalita-brown-dark font-bold">
            <MdLogout />
            Sair
          </button>
        </div>
      </aside>

      <main className="bg-red-300 flex-1">
        {children}
      </main>
    </div>
  )
}