import * as React from "react";

export const Button = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => <button onClick={handleClick}>{children}</button>;
