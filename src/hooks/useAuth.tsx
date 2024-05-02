import { useContext } from "react";
import AuthContext from "@/context/AuhProvider";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
