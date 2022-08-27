import React from "react";

export default function Form({ children, ...others }) {
  return <form {...others}>{children}</form>;
}
