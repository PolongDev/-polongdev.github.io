import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pages_interface } from "../utils/interfaces";
import {
  faFacebook,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { ReactNode } from "react";

interface input_interface {
  placeholder: string;
  type: string;
  minLength: number;
  className: string | unknown;
}

interface linking_interface {
  icon: IconDefinition;
  url: string;
  children: string | ReactNode;
}

const Linking = (props: linking_interface) => {
  return (
    <a href={props.url} className="cursor-pointer" target="_blank">
      <FontAwesomeIcon icon={props.icon} />
      <label className="pl-2 hidden lg:inline cursor-pointer">
        {props.children}
      </label>
    </a>
  );
};

const Input = (props: input_interface) => {
  return (
    <label className={`${props.className} custom-input`}>
      <input
        type={props.type}
        placeholder=" "
        minLength={props.minLength}
        required
      />
      <span>{props.placeholder}</span>
    </label>
  );
};

export default function Contact(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className} p-2 gap-10 `}>
      <h1 className="text-base lg:text-2xl">Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjxzDv5unUTIRIA8INDiazlQ&key="
        title="Location"
        loading="lazy"
        allowFullScreen={false}
        className="h-1/3 w-full dark:grayscale dark:invert transition ease-in delay-100"
      />
      <form
        action="https://formsubmit.co/polongdev@gmail.com"
        method="POST"
        className="flex flex-col w-full box-border gap-2"
      >
        <div className="flex flex-row gap-2 w-full box-border">
          <Input
            className={`w-full rounded dark:border-white`}
            type="name"
            minLength={20}
            placeholder="Hello"
          />
          <Input
            className={`w-full rounded dark:border-white`}
            type="email"
            minLength={10}
            placeholder="Email Address"
          />
        </div>
        <textarea
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          placeholder="Enter your message"
          minLength={20}
          required
          className="resize-none p-2 outline-none rounded h-20 bg-transparent border-black dark:border-white"
        ></textarea>
        <div className="flex justify-between px-4">
          <div className="flex box-border pl-4 gap-5">
            <Linking icon={faGithub} url="https://github.com/polongdev">
              PolongDev
            </Linking>
            <Linking icon={faFacebook} url="https://fb.me/iampolongdev">
              Hello World
            </Linking>
          </div>
          <input
            style={{ borderWidth: "1px", borderStyle: "solid" }}
            className="rounded px-2 border-black dark:border-white"
            type="submit"
            value="Send email"
          />
        </div>
      </form>
    </div>
  );
}
