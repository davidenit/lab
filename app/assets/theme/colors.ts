import tailwindConfig from "@/tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const COLORS = {
	colorPrimary: String(fullConfig.theme?.colors?.primary) || "#E03155",
	colorText: String(fullConfig.theme?.colors?.text) || "#191817",
	colorBorder: String(fullConfig.theme?.colors?.text) || "#A4A4A4",
	colorPrimaryHover: "#375EAB",
	colorTextPlaceholder: "#7E7E7E",
	colorSuccess: "#2DB763",
	colorWarning: "#F47D23",
	colorTextDisabled: "#B1B1B1",
	colorError: "#E03155",
	colorTagBg: "#F3CCC5",
	colorBgDefault: "#F5F4F3",
	colorLink: "#375EAB",
};

export default COLORS;
