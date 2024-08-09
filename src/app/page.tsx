import MixtureComponent from "@/components/mixture";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const names = ["Aman", "Aadarsha", "khfdsldfsh", "fjlksdfhfdsl", "fsdlsdfhk", "sfdhlfdsh"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1> ShadCN </h1>
       <Button>Aadarsha</Button>
       <Button>Aman</Button>
       <MixtureComponent names={names}/>
    </main>
  );
}
