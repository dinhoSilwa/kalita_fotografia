import { Link } from "react-router-dom";

type ButtonProps = {
    variant?: 'primary'| 'mobile' | 'secondary' // prop opcional, para diferenciar entre mobile e desktop
    size?: 'mobile'| 'desktop'
    children: React.ReactNode
    path: string; // caminho para o link
}

export function Button({ children, variant = 'primary', size = 'desktop', path}: ButtonProps) {

    const defaultVariant = 'h-[42px] py-3 px-6 rounded-[48px] flex items-center justify-center text-md font-lato font-bold cursor-pointer  transform transition duration-300' 
    const variantPrimary = variant === 'primary' && 'bg-fundo text-primary hover:bg-secondary hover:text-tertiary'
    const variantSecondary = variant === 'secondary' && 'bg-secondary text-tertiary hover:bg-[#886a49]'
    const variantSize = size === 'mobile' && 'w-full h-[50px]'

    const buttonStyles = `${defaultVariant} ${variantPrimary} ${variantSecondary} ${variantSize}`
    return (
        <button 
            type="button"
            className= {buttonStyles}
            >
            <Link to={path}>
                {children}
            </Link>
        </button>   
    )
}