interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`${className}  mx-auto w-full max-w-screen-2xl px-4 py-5 2xl:px-0`}
    >
      {children}
    </div>
  );
};

export default Container;
