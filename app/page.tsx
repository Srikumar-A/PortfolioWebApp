import Image from "next/image";
import '@/app/ui/globals.css';
import PageTranistion from "@/components/PageTransition";
import TypedText from "@/components/TypedText";

export default function Home() {
  return (
    <>
    <PageTranistion>
      <div className="flex min-h-screen min-w-screen flex-row items-center justify-between py-32 px-10 bg-white dark:bg-black sm:items-start overflow-y-hidden overflow-x-hidden">
        <div className="flex-1 space-y-6 text-center md:text-left mt-35 ml-30">
          <div className="text-xl font-semibold">I am Srikumar Arivalagan.</div>
          <TypedText/>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
          src="/default_user.png"
          alt="Srikumar Arivalagan"
          width={400}
          height={400}
          className="rounded-full object-cover"/>
        </div>
      </div>
      </PageTranistion>
      </>
  );
}
