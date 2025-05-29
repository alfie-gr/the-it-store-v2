import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function KioskHome() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-centerrelative w-full min-h-screen inset-0 -z-10 size-full items-center ">
      <h2 className="text-xl">Welcome to The iT Store</h2>
      <button
      className="mt-4 bg-[#FF8300] text-white p-2"
      onClick={() => {
         
          navigate("/kioskNewCustomer");
        }}
      >
        New Customer

      </button>
      <button
        className="mt-4 bg-red-500 text-white p-2"
        onClick={() => {
          signOut(auth);
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}