import Header from "@/components/Header";

interface HomeProps {
 children: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
 return (
  <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
   <Header className="">
    <div></div>
   </Header>
  </div>
 );
}
