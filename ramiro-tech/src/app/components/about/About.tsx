function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background_light text-text py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
            About
          </h2>
          <p className="mt-2 text-center text-sm text-primary">
            This is a project from the frontend module 4 of the Soy Henry
            bootcamp.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <p className="text-center text-sm text-primary">
            Our application is a technology ecommerce that offers a wide variety
            of products. We have worked hard to provide a smooth and
            user-friendly experience.
          </p>
          <p className="text-center text-sm text-primary">
            Users can create an account to track their orders and save their
            favorite products. Our goal is to make technology shopping
            accessible and straightforward for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
