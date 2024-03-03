import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";

const Landing = () => {
  return (
    <div className="flex flex-col space-y-8 justify-center h-[100vh] items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Ace your exams
      </h1>
      <Link href={"/"}>Try it?</Link>
    </div>
  )
}

export default Landing;