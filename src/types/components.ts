import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export type InputProps = {
  type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  id?: string;
  value?: string | ReadonlyArray<string> | number | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export type PaginationProps = {
  onPageChange: (pageIndex: number) => any;
  pageSize: number;
  currentPage: number;
  className: string;
  disableNext: boolean;
}