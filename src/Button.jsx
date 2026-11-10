import { memo } from "react";

const Button = ({ onClick }) => {
  console.log("In Button!");
  return <button onClick={onClick}>Reservar!</button>;
};

export default memo(Button);
