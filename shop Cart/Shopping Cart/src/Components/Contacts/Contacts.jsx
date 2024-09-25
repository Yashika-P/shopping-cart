import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    console.log("Mounting Contacts Component");
    return () => {
      console.log("Unmounting Contacts Component");
  };
}, []);
  return (
    <div className="h-full container mx-auto">
      <div className=" flex justify-center items-center h-full">
        <h1 className="text-3xl font-bold">Welcome to the Contacts Page</h1>
      </div>
    </div>
  );
}

export default Contacts;