"use client";
const userInfo = () => {
  const info = JSON.parse(localStorage.getItem("user") || "{}");
  const { id, name, email, address, phone, role, orders } = info;

  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{address}</h1>
      <h1>{phone}</h1>
      <h1>{role}</h1>
      <div>
        {orders.map(({ id, status, date }:{id:number, status:string, date:string}) => {
          return (
            <div key={id} className="border-2 border-red-500 rounded-md ">
              <p>{id}</p>
              <p>{status}</p>
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default userInfo;