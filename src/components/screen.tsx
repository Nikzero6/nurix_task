import type { ComponentProps } from "react";
import { TwoBarIcon, type IconComponent } from "../icons/tow-bar-icon";
import { SlideCard, SlideCardIcon, SlideCardTitle } from "./slide-card";
import { Button, MainDeck } from "./main-deck";

interface Slide {
  title: string;
  Icon: IconComponent;
}

const slides: Slide[] = [
  {
    title: "Smart lead capture",
    Icon: TwoBarIcon
  },
  {
    title: "Conversation Buyer Engagement",
    Icon: TwoBarIcon
  },
  {
    title: "Intent-Based Prioritization",
    Icon: TwoBarIcon
  }
];

export function Screen() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <Header title="The use case" />
      {/* layout */}
      <div className="flex flex-row gap-4">
        {/* slides */}
        <div className="flex flex-col gap-2">
          {slides.map((slide) => (
            <SlideItem
              key={slide.title}
              title={slide.title}
              Icon={slide.Icon}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {/* main deck */}
          <MainDeck />
          <Button className="bg-blue-600 text-white w-fit px-10 py-3 rounded-full mx-auto">
            schedule a custom demo..
          </Button>
        </div>
      </div>
    </div>
  );
}

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <TwoBarIcon className="h-6 w-6 text-blue-500" />
      <div className="text-xl capitalize font-bold">{title}</div>
    </div>
  );
};

type SlideItemProps = ComponentProps<typeof SlideCard> & Slide;

export const SlideItem = ({ title, Icon, ...props }: SlideItemProps) => {
  return (
    <SlideCard {...props}>
      <SlideCardIcon Icon={Icon} />
      <SlideCardTitle title={title} />
    </SlideCard>
  );
};
