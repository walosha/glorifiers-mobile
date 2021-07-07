import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export default function useNetInfo() {
  const [isConnected, setIsconnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ type, isConnected }) => {
      setIsconnected(isConnected);
    });

    // To unsubscribe to these update, just use:
    return unsubscribe();
  }, [isConnected]);

  return isConnected;
}
