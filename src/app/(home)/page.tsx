interface HomeProps {
 children: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
 return (
  <div className="flex w-full justify-center text-white items-center">
   <h1>Playfy Content</h1>
  </div>
 );
}
