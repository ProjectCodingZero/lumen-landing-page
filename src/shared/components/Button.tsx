import { type JSX, type ComponentProps } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' ;
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends ComponentProps<'button'>  {
    variant?: ButtonVariant;
    size?: ButtonSize;
}
//Estilo basico para todos los botones
const BASE_BUTTON_CLASSES = 'font-bold py-2 px-4 rounded transition-colors duration-300';
//Estilos para cada variante de botón
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-[#F48F0B] text-white hover:bg-[#007b7f] hover:text-black",
  secondary: "bg-violet-500 text-gray-800 hover:bg-yellow-500 hover:text-black ",
  outline: "border-2 border-[#009ba4] text-[#009ba4] hover:bg-[#009ba4] hover:text-white",
  danger: "bg-red-600 text-white hover:bg-red-700",
};
//Estilos para cada tamaño de botón
const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};
function Button({ size = 'md', variant = 'primary', children, title, className = '', ...props }: ButtonProps) : JSX.Element {

    return (
        <button
            className={` ${BASE_BUTTON_CLASSES} ${className} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]}`}
            title={title}
            {...props}
        >
        {children}
        </button>
  );
}
export {Button};
