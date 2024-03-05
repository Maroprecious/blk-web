import { createContext, useState, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext({});
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, SetAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, SetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
