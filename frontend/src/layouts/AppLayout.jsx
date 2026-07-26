export const AppLayout = ({ children }) => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">{children}</div>

      {/* Tablet/Desktop */}
      <div className="hidden md:flex min-h-screen items-center justify-center px-6">
        <div className="flex min-h-screen items-center justify-center bg-app-background px-6">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Mobile Experience Only
            </h1>

            <p className="mt-5 text-base leading-7 text-secondary">
              This application is currently optimized for smartphones.
              <br />
              Please open it on your mobile device for the best experience.
            </p>

            <div className="mx-auto my-8 h-px w-20 bg-gray-200" />

            <p className="text-sm font-medium text-brand">
              Desktop and tablet support is under development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
