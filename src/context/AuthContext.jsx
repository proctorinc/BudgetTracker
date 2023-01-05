import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingScreen } from "@/components/Misc";
import { useLoginAndFetchProfile } from "@/features/auth/hooks/useLoginAndFetchProfile";
import { useUserProfile } from "@/features/auth/hooks/useUserProfile";
import { useLogout } from "@/features/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const loginAndFetchProfileMutation = useLoginAndFetchProfile();
  const userProfileMutation = useUserProfile();
  const logoutMutation = useLogout();

  useEffect(() => {
    if (!user) {
      userProfileMutation
        .mutateAsync()
        .then((response) => {
          if (response.user) {
            setUser(response.user);
          } else {
            navigate("/login");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    await loginAndFetchProfileMutation
      .mutateAsync({ email, password })
      .then((response) => {
        console.log(response);
        if (response.user) {
          setUser(response.user);
        }
      })
      .catch((error) => console.log(`Error logging in: ${error}`))
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    setIsLoading(true);
    logoutMutation
      .mutateAsync()
      .catch((err) => console.log(err))
      .finally(() => {
        setUser(null);
        navigate("/login");
        setIsLoading(false);
      });
  };

  const contextData = {
    isLoading,
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
