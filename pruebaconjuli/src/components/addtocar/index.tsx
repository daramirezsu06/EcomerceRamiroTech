"use client";

const AddToCar: React.FC<{ children: React.ReactNode; id: number }> = ({
  children,
  id,
}): React.ReactElement => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    const arraycar = JSON.parse(localStorage.getItem("car") || "[]");

    



    arraycar.push(id);
    localStorage.setItem("car", JSON.stringify(arraycar));
    console.log(arraycar);
  };
  return (
    <button
      role="button"
      className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
      id={String(id)}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default AddToCar;
