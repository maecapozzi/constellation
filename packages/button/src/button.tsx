import * as React from "react";
import { Button as RKButton, ButtonProps } from "reakit/Button";

export interface CButtonProps extends ButtonProps {}

export const Button: React.FC<CButtonProps> = ({ children, ...rest }) => (
  <RKButton className="c-button" {...rest}>
    {children}
  </RKButton>
);
