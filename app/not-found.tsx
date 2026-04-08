import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[60vh] flex-col items-start justify-center gap-5 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan">404</p>
      <h1 className="text-4xl font-semibold text-white">Page not found</h1>
      <p className="max-w-xl text-slate-300">The page you requested does not exist or may have moved. Return to the homepage to continue exploring Nova Atlas Technologies.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </section>
  );
}
