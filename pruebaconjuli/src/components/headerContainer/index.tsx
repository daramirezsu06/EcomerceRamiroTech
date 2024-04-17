"use client";

export const HeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <>
      <header className="bg-gradient-to-b from-red-600 to-red-300 h-32 sticky w-full transition-all duration-1000">
        <div className="md:w-3/4  md:m-auto mx-4 flex-col content-around h-full">
          {children}
        </div>
      </header>
    </>
  );
};
