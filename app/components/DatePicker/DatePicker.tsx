import { DatePicker, DatePickerProps } from "antd";

import dayjs, { Dayjs } from "dayjs";
import React, { FC, useState } from "react";
import styles from "./datePicker.module.css";

const DatePickerCpn: FC<DatePickerProps> = (props) => {
  const currentDate = new Date();
  const dateFormat = "DD/MM/YYYY";

  const [value, setValue] = useState<Dayjs>();

  const handleOnChange = (
    value: DatePickerProps["value"],
    dateString: string
  ) => {
    value && setValue(value);
  };

  return (
    <DatePicker
      format={dateFormat}
      dateRender={(current, today) => {
        const style: React.CSSProperties = {};
        if (
          current.date() === currentDate.getDate() &&
          current.month() === currentDate.getMonth() &&
          dayjs(value).format("DD/MM/YYYY") !==
            dayjs(today).format("DD/MM/YYYY")
        ) {
          style.border = "0";
          style.color = "#E03155";
        }

        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
      // panelRender={()}
      {...props}
      value={value}
      onChange={handleOnChange}
      className={styles.wrapDatePicker}
    />
  );
};
export default DatePickerCpn;
