import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex gap-10 min-h-[100vh] justify-center flex-col items-center align-middle">
      <h1 className=" text-5xl text-orange-700">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-orange-700">
        Page not found
      </p>
    </div>
  );
}