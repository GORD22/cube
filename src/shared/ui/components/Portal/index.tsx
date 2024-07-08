import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type TProps = {
  place?: HTMLElement;
};

export const Portal: FC<PropsWithChildren<TProps>> = ({
  children,
  place = document.body,
}) => {
  return createPortal(children, place);
};
