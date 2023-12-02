import Header from "@/components/ui/Header";
import ListItem from "@/components/ListItem";
import ToasterNotif from "@/components/ui/ToasterNotif";
import Link from "next/link";

function Home() {
 return (
  <div className="bg-neutral-900 md:rounded-lg h-full w-full overflow-hidden overflow-y-auto">
   <ToasterNotif />
   <Header className="">
    <div className="mb-2">
     <h1 className="text-white text-3xl font-semibold">Welcome to Playfy</h1>
     <p className="text-neutral-300 text-xs m-1">
      Songs make you life complete
     </p>
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
      <ListItem image="/img/liked.png" name="Favorit Songs" href="fav" />
     </div>
    </div>
   </Header>
   <div className="mb-8 mt-2 px-6">
    <div className="flex jutify-between items-center">
     <h1 className="text-white text-2xl font-bold">Recently Songs</h1>
    </div>
    <div className="">List of Song!</div>
   </div>
  </div>
 );
}

export default Home;
