import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mt-4">Home Page</h1>
      <p>Welcome to my website!</p>
    </div>
  );
}

