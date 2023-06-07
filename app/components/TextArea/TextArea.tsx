import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { FC } from "react";
import styles from "./textArea.module.css";

const { TextArea } = Input;

const TextAreaComponent: FC<TextAreaProps> = (props) => {
  return <TextArea {...props} className={styles.wrapInput} />;
};

export default TextAreaComponent;
