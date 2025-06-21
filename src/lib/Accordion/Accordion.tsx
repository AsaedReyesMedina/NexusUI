import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from './components/AccordionComponents'
import { AccordionProps } from './Accordion.interface'

const Accordion = ({ children, ...props }: AccordionProps) => {
    return (
        <div className={`${props.className} flex flex-col`} {...props}>
            {children}
        </div>
    )
}
Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent
export default Accordion
