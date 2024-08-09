import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
function AccordPage() {
    const faq = [
        {
            "question": "text",
            "answer": "answer"
        }
    ];
    return (
        <div className="flex justify-center items-center">
            <main className="w-[500px] p-4">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>what do you mean by accordion?</AccordionTrigger>
                        <AccordionContent>
                        The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    );
}
export default AccordPage;