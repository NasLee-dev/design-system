import { PropsWithChildren } from "react"

export const ToastProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      {children}
      <div>토스트</div>
    </div>
  )
}