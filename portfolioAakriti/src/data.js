import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "Works",
    links: [
      { label: "Javascript", icon: <FaCreditCard />, url: "/Works" },
      { label: "React", icon: <FaCreditCard />, url: "/Works" },
      // { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: "About",
    links: [
      { label: "services", icon: <FaBook />, url: "/about" },
      { label: "Resume", icon: <FaBook />, url: "/about" },
      { label: "help", icon: <FaBook />, url: "/about" },
      // { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: "Contact",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
