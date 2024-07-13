import * as React from "react";
import { ToastPayload } from "."

export type ToastConfigProps = {
  payload: ToastPayload
  duration?: number
};

export type ToastContextType = {
  toast: (toastProps: ToastConfigProps) => void
};

export const ToastContext = React.createContext<ToastContextType>({
  toast: () => {
    
  }
});
