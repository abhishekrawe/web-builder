import React from "react";
import { Button } from "./ui/button";
import { MdPreview } from "react-icons/md";
import useDesigner from "./hooks/useDesigner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { FormElements } from "./FormElements";

function PreviewDialogBtn() {
    const { elements } = useDesigner();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className="gap-2">
                    <MdPreview className="h-6 w-6" />
                    Preview
                </Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col p-0">
                <div className="px-4 py-2 border-b">
                    <p className="text-lg font-bold text-muted-foreground">Site Preview</p>
                    <p className="text-sm text-muted-foreground">This is how your site will look like to your users.</p>
                </div>
                <div className="flex flex-col flex-grow items-center justify-center p-4 bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] overflow-y-auto">
                    <div className="max-w-full md:max-w-full w-full h-full flex flex-col gap-4 bg-background rounded-2xl p-8 overflow-y-auto">
                        {elements.map((element) => {
                            const FormComponent = FormElements[element.type].formComponent;
                            return <FormComponent key={element.id} elementInstance={element} />;
                        })}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default PreviewDialogBtn;
