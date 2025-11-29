import { GrGallery } from "react-icons/gr";
import { LuMessageSquareText } from "react-icons/lu";
import { PiHouseLight, PiPackage } from "react-icons/pi";
import { RiGalleryView2 } from "react-icons/ri";

import type { SidebarLink } from "./sidebar.types";

export const ROTAS = {
  DASHBOARD: {
    VISAO_GERAL: "/dashboard/visao-geral",
    PORTFOLIO: "/dashboard/portfolio",
    FOTOS_HOME: "/dashboard/fotos-home",
    PACOTES_SAZONAIS: "/dashboard/pacotes-sazonais",
    FEEDBACKS: "/dashboard/feedbacks",
  },
} as const;



export const sidebarLinks: SidebarLink[] = [
  {
    href: ROTAS.DASHBOARD.VISAO_GERAL,
    label: "Painel",
    icon: <RiGalleryView2 />,
  },
  {
    href: ROTAS.DASHBOARD.PORTFOLIO,
    label: "Gestão do Portfólio",
    icon: <GrGallery />,
  },
  {
    href: ROTAS.DASHBOARD.FOTOS_HOME,
    label: "Fotos da Home",
    icon: <PiHouseLight />,
  },
  {
    href: ROTAS.DASHBOARD.PACOTES_SAZONAIS,
    label: "Pacotes Sazonais",
    icon: <PiPackage />,
  },
  {
    href: ROTAS.DASHBOARD.FEEDBACKS,
    label: "Feedbacks",
    icon: <LuMessageSquareText />,
  },
];
