import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import toast from "react-hot-toast";
import { Icon } from "../..";
import { IconType, ToastPropsComponent, ToastType } from "./types";

type ThemeType = {
  [key in ToastType]: {
    border: string;
    text: string;
    bg: string;
  };
};

const themes: ThemeType = {
  success: {
    border: "border-success-500",
    text: "text-success-500",
    bg: "bg-success-500",
  },
  crema: {
    border: "border-crema-500",
    text: "text-crema-500",
    bg: "bg-crema-500",
  },
  warning: {
    border: "border-warning-500",
    text: "text-warning-500",
    bg: "bg-warning-500",
  },
  coral: {
    border: "border-coral-900",
    text: "text-coral-900",
    bg: "bg-coral-900",
  },
};

export const DefaultToast = ({
  title,
  subtitle,
  icon,
  onClose,
  visible,
  type,
}: ToastPropsComponent) => {
  let theme = themes[type];

  return (
    <Transition
      appear
      show={visible}
      as={Fragment}
      enter="transition-all duration-150"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transition-all duration-150"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
    >
      <div
        className={`shadow-lg p-4 border h-18 w-full max-w-sm rounded-lg flex justify-center bg-white ${theme.border}`}
      >
        <div
          className={`${theme.bg} top-0 absolute z-10 h-2 rounded-full w-full max-w-xs`}
        ></div>
        <div className="flex items-center w-full h-9 mt-1">
          <div>{icon}</div>
          <div className="flex-grow px-4">
            <p className={`text-sm ${theme.text} font-bold`}>{title}</p>
            <span>{subtitle}</span>
          </div>
          <button type="button" onClick={onClose}>
            <Icon.MdClose className="text-2xl transition-colors duration-300 text-gray-500 hover:text-gray-100" />
          </button>
        </div>
      </div>
    </Transition>
  );
};

export const success = (title?: string, subtitle?: string, icon?: IconType) => {
  toast.custom((t) => (
    <DefaultToast
      visible={t.visible}
      type="success"
      icon={
        icon ?? (
          <Icon.MdCheckCircleOutline className="text-2xl text-success-500" />
        )
      }
      title={title}
      subtitle={subtitle}
      onClose={() => toast.dismiss(t.id)}
    />
  ));
};

export const crema = (title?: string, subtitle?: string, icon?: IconType) => {
  toast.custom((t) => (
    <DefaultToast
      visible={t.visible}
      type="crema"
      icon={
        icon ?? (
          <Icon.MdCheckCircleOutline className="text-2xl text-crema-500" />
        )
      }
      title={title}
      subtitle={subtitle}
      onClose={() => toast.dismiss(t.id)}
    />
  ));
};

export const warning = (title?: string, subtitle?: string, icon?: IconType) => {
  toast.custom((t) => (
    <DefaultToast
      visible={t.visible}
      type="warning"
      icon={
        icon ?? <Icon.MdWarningAmber className="text-2xl text-warning-500" />
      }
      title={title}
      subtitle={subtitle}
      onClose={() => toast.dismiss(t.id)}
    />
  ));
};

export const coral = (title?: string, subtitle?: string, icon?: IconType) => {
  toast.custom((t) => (
    <DefaultToast
      visible={t.visible}
      type="coral"
      icon={
        icon ?? <Icon.MdWarningAmber className="text-2xl text-coral-500" />
      }
      title={title}
      subtitle={subtitle}
      onClose={() => toast.dismiss(t.id)}
    />
  ));
};