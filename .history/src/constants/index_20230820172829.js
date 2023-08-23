import { first, second, third  } from "../assets";

export const features = [
  {
    id: "feature-1",
    icon: first,
    title: "How to install",
    content: [
      "Install mobile app",
      "Install desktop app",
      "Scan desktop qr code to connect both"]
  },
  {
    id: "feature-2",
    icon: second,
    title: "How to add data",
    content:
      ["Desktop add data, submit",
      "Data saved on cloud"]
  },
  {
    id: "feature-3",
    icon: third,
    title: "How to read data",
    content:
      ["Desktop click data",
      "Mobile unlock and allow (auth)",
      "Destop receive decrypted data"]
  },
];