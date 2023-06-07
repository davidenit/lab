import { Col, Radio, Row } from "antd";
import { FC } from "react";
import styles from "./radio.module.css";

interface IRadioItem {
  id: number;
  label: string | React.ReactNode;
  value: number;
}
interface RadioProps {
  data?: IRadioItem[];
}

const RadioCpn: FC<RadioProps> = (props) => {
  const dataOption = [
    {
      id: 1,
      label: (
        <div>
          <p>Delivery</p>
          <span>Normal | 10.00 SGD</span>
        </div>
      ),
      value: 1,
    },
    {
      id: 2,
      label: (
        <div>
          <p>Store Pickup</p>
          <span>Store Pickup with Locator | 0.00 SGD</span>
        </div>
      ),
      value: 2,
    },
  ];
  return (
    <Radio.Group style={{ width: "100%" }}>
      <Row gutter={32}>
        {dataOption.map((item) => (
          <Col key={item.id} span={24 / dataOption.length}>
            <Radio value={item.value} className={styles.radioCustom}>
              {item.label}
            </Radio>
          </Col>
        ))}
      </Row>
    </Radio.Group>
  );
};

export default RadioCpn;
