import { createContext, useState, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext({});
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
