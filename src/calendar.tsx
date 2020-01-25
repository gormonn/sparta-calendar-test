import * as React from "react";
import { Calendar, Select, Radio, Col, Row } from "antd/es";
import moment from "moment";
import "moment/locale/ru";

const { Group, Button } = Radio;

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const Cal = props => (
  <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
    <Calendar
      value={props.value}
      fullscreen={false}
      onPanelChange={onPanelChange}
      headerRender={() => (
        <div style={{ padding: 10 }}>
          <div style={{ marginBottom: "10px" }}>{props.month}</div>
        </div>
      )}
    />
  </div>
);

const months = moment.months();
export default () => {
  return (
    <>
      {months.map((month, i) => {
        const date = moment().month(month);
        return <Cal key={i} month={month} value={date} />;
      })}
    </>
  );
};
