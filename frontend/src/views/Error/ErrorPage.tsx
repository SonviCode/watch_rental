import { Link } from "react-router-dom";
import NavBar from "@/components/Layout/General/NavBar/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col h-dvh justify-center items-center gap-10">
        <h2 className="font-bold">Oups!</h2>
        <h1 className="text-xl">Une erreur est survenue.</h1>
        <Link
          to="/"
          className="gradient-btn p-4 rounded-lg text-center my-0 mx-auto block w-fit transition hover:scale-125 delay-100 duration-300 ease-in-out"
        >
          Retour à l'accueil
        </Link>
      </main>
    </>
  );
};

export default ErrorPage;
