"use client";
import {
  Button,
  ConfigProvider,
  Layout,
  Select,
  Space,
  Typography,
} from "antd";
import "antd/dist/reset.css";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import React from "react";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";

import COLORS from "./assets/theme/colors";
import "./global.css";
import { DatePicker } from "./components/DatePicker";
import RadioCpn from "./components/Radio/Radio";

const { Option } = Select;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.colorPrimary,
          colorText: COLORS.colorText,
          colorBorder: COLORS.colorBorder,
          colorPrimaryHover: COLORS.colorPrimaryHover,
          colorTextPlaceholder: COLORS.colorTextPlaceholder,
          colorSuccess: COLORS.colorSuccess,
          colorWarning: COLORS.colorWarning,
          colorTextDisabled: COLORS.colorTextDisabled,
          colorError: COLORS.colorError,
          colorLink: COLORS.colorLink,
          fontFamily: 'Brandon',
        },
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Sider style={siderStyle}>Sider</Sider>
          <Layout>
            <Button type="primary" htmlType="button">
              Drawer
            </Button>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Typography.Title level={1}>Test tailwind</Typography.Title>
              <Title level={2}>Input Sb</Title>
              <Input placeholder="Input with clear icon" />
              <Title level={2}>Textarea Sb</Title>
              <TextArea placeholder="defaultValue" />
              <Title level={2}>Select Sb</Title>
              <Select
                allowClear
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
              <Title level={2}>DatePicker Sb</Title>
              <DatePicker suffixIcon={null} showToday={false} />
              <Title level={2}>Radio Sb</Title>
              <RadioCpn />
            </Space>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Space>
    </ConfigProvider>
  );
}
