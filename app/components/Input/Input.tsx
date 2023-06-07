import { Input, InputProps } from "antd";
import { FC } from "react";
import styles from "./input.module.css";

const InputComponent: FC<InputProps> = (props) => {
  return <Input size="large" {...props} className={styles.wrapInput} />;
};

export default InputComponent;
