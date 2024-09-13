import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth(); //context se user le rhe hain
  const handleLogout = () => {
    try {
      setAuthUser({ //setAuthUser ke state ko change kar rhe hain
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users"); //logout karte hi localstorage se hatana hoga user ko
      toast.success("Logout successfully"); //message print karoge

      setTimeout(() => {
        window.location.reload(); //jaise hi logout ho automatically reload ho jaye , refresh na karna pade
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-teal-700 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
