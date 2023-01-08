import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LoadingScreen } from "@/components/Misc";
import { useLoginAndFetchProfile } from "@/features/auth/hooks/useLoginAndFetchProfile";
import { useUserProfile } from "@/features/auth/hooks/useUserProfile";
import { useLogout, useSignUp } from "@/features/auth";
import { useCSRFToken } from "@/features/auth/hooks/useCSRFToken";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [csrfToken, setCsrfToken] = useState();

  const useCSRFTokenMutation = useCSRFToken();
  const loginAndFetchProfileMutation = useLoginAndFetchProfile();
  const userProfileMutation = useUserProfile();
  const signUpMutation = useSignUp();
  const logoutMutation = useLogout();
  const isAuthenticated = user !== null;

  useEffect(() => {
    setError("");
  }, [location]);

  useEffect(() => {
    if (!csrfToken) {
      useCSRFTokenMutation
        .mutateAsync()
        .then((response) => {
          console.log(response.csrfToken);
          setCsrfToken(response.csrfToken);
          console.log("Got csrf token!");
        })
        .catch(() => {
          console.log("Error fetching csrf token");
        });
    }
  }, []);

  useEffect(() => {
    if (!user) {
      setIsLoading(true);
      userProfileMutation
        .mutateAsync()
        .then((response) => {
          if (response.user) {
            setUser(response.user);
          } else {
            logout();
          }
        })
        .catch((err) => console.log(`AUTH ERROR: ${err}`))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    await loginAndFetchProfileMutation
      .mutateAsync({ email, password })
      .then((response) => {
        if (response.user) {
          setUser(response.user);
        } else {
          setError("Incorrect Username or Password");
        }
      })
      .catch((error) => console.log(`Error logging in: ${error}`))
      .finally(() => setIsLoading(false));
  };

  const signUp = async ({ email, password, confirmPassword }) => {
    setIsLoading(true);
    await signUpMutation
      .mutateAsync({ email, password, confirmPassword })
      .then((response) => {
        if (response?.error) {
          setError(response.error);
        } else {
          navigate("/login");
        }
      })
      .catch((error) => console.log(`Error logging in: ${error}`))
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    setIsLoading(true);
    logoutMutation
      .mutateAsync()
      .catch((err) => console.log(`Error logging out: ${err}`))
      .finally(() => {
        setUser(null);
        if (location.pathname !== "/signup" && location.pathname !== "/") {
          navigate("/login");
        }
        setIsLoading(false);
      });
  };

  const contextData = {
    isLoading,
    login,
    logout,
    signUp,
    user,
    isAuthenticated,
    error,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
