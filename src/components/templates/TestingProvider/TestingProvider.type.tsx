import React from "react";
import { History } from "history";

export interface IProps {
  children: React.ReactNode;
  history: History<unknown>;
}
