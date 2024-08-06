import { GetFormStats, GetForms } from "@/actions/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/CreateFormBtn";
import { Form } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container p-3">
      <h2 className="text-4xl font-bold col-span-2 hover:cursor-pointer font-sans">Sites </h2>
      <p className="font-sans"> View and manage all your websites in one place.</p>
      <Separator className="my-6" />
      <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}

function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
}

async function FormCards() {
  const forms = await GetForms();
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

function FormCard({ form }: { form: Form }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold hover:cursor-pointer text-2xl">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={"default"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button asChild className="w-full mt-2 text-md gap-4">
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button asChild variant={"secondary"} className="w-full mt-2 text-md gap-4">
            <Link href={`/builder/${form.id}`}>
              Edit Template <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
