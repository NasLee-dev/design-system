type Props = {
  children: React.ReactNode;
}

export const MobileFirstLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-full justify-center flex min-h-screen bg-color-white dark:bg-color-black text-color-black dark:text-color-white">
      <div className="max-w-xl w-full justify-center">{children}</div>
    </div>
  );
};