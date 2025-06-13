import { AccordionProps } from "../Accordion.interface"
import { ChevronDown } from 'lucide-react';


export const AccordionItem = ({ children, ...props }: AccordionProps) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}
export const AccordionTrigger = ({ children, ...props }: AccordionProps) => {
    return (
        <div className={`${props.className} flex flex-row justify-between items-center`} {...props}>
            {children}
            <ChevronDown className="w-4 h-4" />
        </div>
    )
}
export const AccordionContent = ({ children, ...props }: AccordionProps) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}