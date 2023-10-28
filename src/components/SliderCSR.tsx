"use client";
import Slider from "react-slick";

import { ReactNode } from "react";

import { settingsSlider } from "@/helpers";

export const SliderCSR = ({ children }: { children: ReactNode }) => {
  return <Slider {...settingsSlider}>{children}</Slider>;
};
