import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { getUserEmail } from "../utils/getUserEmail";
import { useUserEmail } from "./UserEmailContext";
import { openLoginPopup } from "../utils/openLoginPopup";
import { useWarningModal } from "./WarningContext";
import { PHI_WARNING } from "../configs/shared";

const PHI_WARNING_COOLDOWN_MS = 180 * 1000;

type PhiEnabledContextType = {
  phiEnabled: boolean;
  setPhiEnabled: Dispatch<SetStateAction<boolean>>;
};

const PhiEnabledContext = createContext<PhiEnabledContextType | undefined>(
  undefined
);

export function PhiEnabledProvider({ children }: { children: ReactNode }) {
  const [phiEnabled, setPhiEnabled] = useState<boolean>(false);
  const { userEmail, setUserEmail } = useUserEmail();
  const { setWarningModalContent } = useWarningModal();
  const lastWarningTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!userEmail) {
      lastWarningTimeRef.current = null;
    }
  }, [userEmail]);

  useEffect(() => {
    async function handleLogin(event: MessageEvent) {
      if (event.data !== "success") return;
      setUserEmail(await getUserEmail());
      setWarningModalContent(PHI_WARNING);
      lastWarningTimeRef.current = Date.now();
    }
    if (phiEnabled) {
      window.addEventListener("message", handleLogin);
      if (!userEmail) {
        openLoginPopup();
      } else {
        const now = Date.now();
        const lastWarningTime = lastWarningTimeRef.current;
        if (
          lastWarningTime === null ||
          now - lastWarningTime > PHI_WARNING_COOLDOWN_MS
        ) {
          setWarningModalContent(PHI_WARNING);
          lastWarningTimeRef.current = now;
        }
      }
      return () => {
        window.removeEventListener("message", handleLogin);
      };
    }
  }, [phiEnabled, userEmail, setUserEmail, setWarningModalContent]);

  return (
    <PhiEnabledContext.Provider value={{ phiEnabled, setPhiEnabled }}>
      {children}
    </PhiEnabledContext.Provider>
  );
}

export function usePhiEnabled(): PhiEnabledContextType {
  const phiEnabledContext = useContext(PhiEnabledContext);
  if (!phiEnabledContext) {
    throw new Error(
      "usePhiEnabled hook must be used within a PhiEnabledProvider component"
    );
  }
  return phiEnabledContext;
}
