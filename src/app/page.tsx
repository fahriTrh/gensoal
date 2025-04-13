import Image from "next/image";
import FormSubmit from '@/components/ui/FormSubmit'
import { Github } from 'lucide-react';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:pt-6 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">

        <div className="rounded overflow-hidden">
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <h1 className="text-xl md:text-2xl font-semibold text-slate-950 dark:text-white -mt-2">Generate Soal</h1>
        <FormSubmit />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/fahriTrh/gensoal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          Code →
        </a>
      </footer>
    </div>
  );
}
