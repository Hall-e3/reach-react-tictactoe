import React from "react";
const initialData = {
  name: "",
  address: "",
};
export default function useForm() {
  const [person, setPerson] = React.useState(initialData);
  return {
    person,
    setPerson,
  };
}
