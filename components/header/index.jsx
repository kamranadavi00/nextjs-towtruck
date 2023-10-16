"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillHouseFill, BsFillTelephoneOutboundFill } from "react-icons/bs";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white  ">
      <Navbar.Brand className="flex justify-end pt-6 px-2" href="/">
        امداد{" "}
        <span style={{ color: "red", textShadow: "2px 2px 4px red" }}>
          خودرو
        </span>
        غرب‌{" "}
        <span style={{ color: "yellow", textShadow: "2px 2px 4px yellow" }}>
          تهران
        </span>
      </Navbar.Brand>

      {/* <p className="flex justify-end pt-6 px-2">09160769784</p> */}
      <Nav
        className="flex justify-center text-right pb-5 gap-4 "
        collapseOnSelect
      >
        <Link className=" gap-4 text-white text-right " href="/">
          خانه
        </Link>
        <a className="flex justify-between " href="tel:09126988310">
          تماس‌ باما
        </a>
        <Link className=" " href="/about">
          درباره‌ما
        </Link>
      </Nav>
    </header>
  );
};
export default Header;
