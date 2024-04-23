"use client";
const UserInfo = () => {
  const info = JSON.parse(localStorage.getItem("user") || "{}");
  const { id, name, email, address, phone, role, orders } = info;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-4">User Information</h1>
        <div className="mb-4">
          <p>
            <span className="font-semibold">ID:</span> {id}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {role}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          {orders.map(
            ({
              id,
              status,
              date,
            }: {
              id: number;
              status: string;
              date: string;
            }) => (
              <div
                key={id}
                className="border-2 border-red-500 rounded-md p-2 mb-2">
                <p>
                  <span className="font-semibold">Order ID:</span> {id}
                </p>
                <p>
                  <span className="font-semibold">Status:</span> {status}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {date}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
