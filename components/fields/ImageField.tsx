"use client";

import React from "react";
import { MdImage } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, Input, Form, FormControl, FormItem, FormMessage, FormField } from "../../components/ui/form";
import { FormElement, FormElementInstance, ElementsType } from "../../components/FormElements";
import useDesigner from "../hooks/useDesigner";

const type: ElementsType = "ImageField";

const extraAttributes = {
    imageSrc: "",
};

const propertiesSchema = z.object({
    imageSrc: z.string().url().optional(),
});

export const ImageFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes,
    }),
    designerBtnElement: {
        icon: MdImage,
        label: "Image Field",
    },
    designerComponent: DesignerComponent,
    formComponent: FormComponent,
    propertiesComponent: PropertiesComponent,
    validate: () => true,
};

type CustomInstance = FormElementInstance & {
    extraAttributes: typeof extraAttributes;
};

function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CustomInstance;
    const { imageSrc } = element.extraAttributes;
    return (
        <div className="flex flex-col gap-2 w-full p-4">
            {imageSrc ? (
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-72">
                    <img src={imageSrc} alt="Selected" className="max-w-full max-h-full object-contain" />
                </div>
            ) : (
                <p className="text-gray-500 text-sm">No image selected</p>
            )}
        </div>
    );
}

function FormComponent({
    elementInstance,
    submitValue,
}: {
    elementInstance: FormElementInstance;
    submitValue?: (id: string, value: string) => void;
}) {
    const element = elementInstance as CustomInstance;
    const { imageSrc } = element.extraAttributes;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                if (submitValue && reader.result) {
                    submitValue(element.id, reader.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full h-full border border-gray-700 p-4">
            <Label>Images</Label>
            {/* <Input type="file" accept="image/*" onChange={handleFileChange} /> */}
            {imageSrc && (
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-72 mt-2">
                    <img src={imageSrc} alt="Selected" className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    );
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;
function PropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CustomInstance;
    const { updateElement } = useDesigner();
    const form = useForm<propertiesFormSchemaType>({
        resolver: zodResolver(propertiesSchema),
        mode: "onBlur",
        defaultValues: {
            imageSrc: element.extraAttributes.imageSrc,
        },
    });

    function applyChanges(values: propertiesFormSchemaType) {
        const { imageSrc } = values;
        updateElement(element.id, {
            ...element,
            extraAttributes: {
                imageSrc,
            },
        });
    }

    return (
        <Form {...form}>
            <form
                onBlur={form.handleSubmit(applyChanges)}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="space-y-3"
            >
                <FormField
                    control={form.control}
                    name="imageSrc"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Image URL"
                                    onKeyDown={(e: { key: string; currentTarget: { blur: () => void; }; }) => {
                                        if (e.key === "Enter") e.currentTarget.blur();
                                    }}
                                    className="border-gray-300"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}