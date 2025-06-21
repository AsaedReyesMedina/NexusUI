import { AccordionItemProps, AccordionProps, AccordionTriggerProps } from "../Accordion.interface"
import { AccordionContentProps } from "../Accordion.interface"
import { ChevronDown } from 'lucide-react';


export const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
    return (
        <div className={`${props.className} flex flex-col gap-1`} {...props}>
            {children}
        </div>
    )
}
export const AccordionTrigger = ({ children, withIcon = true, ...props }: AccordionTriggerProps) => {
    return (
        <div className={`${props.className} flex flex-row justify-between items-center gap-2`} {...props}>
            {children}
            {withIcon && <ChevronDown className="w-4 h-4" />}
        </div>
    )
}
export const AccordionContent = ({ children, ...props }: AccordionContentProps) => {
    return (
        <div className={`${props.className} flex flex-col gap-1`} {...props}>
            {children}
        </div>
    )
}