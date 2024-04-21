import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <main className="flex items-center justify-center bg-background_light min-h-screen sm:py-32 lg:px-8 h-full">
        <div className="text-center">
          <p className="text-3xl font-semibold text-error">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-primary">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/Home"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-background_light shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-primary">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
