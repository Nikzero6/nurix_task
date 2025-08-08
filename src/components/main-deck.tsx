import type { ComponentProps } from "react";
import { AudioLines } from "../icons/audio-lines";
import { cn } from "../utils";
import { CallIcon } from "../icons/call-icon";

const infos = [
  "something.... asdlkjaslkdlkaskdnlaskdlkasd",
  "something.... asdlkjaslkdlkaskdnlaskdlkasd, alkdjaslknda, asdmasl;dm;alsd;las"
];

export function MainDeck() {
  return (
    <div className="w-full flex-1 p-3 border border-gray-400 rounded-md">
      <div className="flex flex-col bg-gray-100 p-8 rounded-md h-full justify-between items-center relative overflow-hidden">
        {/* audio */}
        <div className="flex flex-row">
          <MultipleAudioLines />
          <Button>Real Estate</Button>
          <MultipleAudioLines />
        </div>
        {/* call us */}
        <CallUsCircle className="absolute bottom-0 w-[560px] h-[560px]" />
        {/* info */}
        <InfoSection infos={infos} className="w-full z-1" />
      </div>
    </div>
  );
}

type InfoSectionProps = ComponentProps<"div"> & {
  infos: string[];
};

export const InfoSection = ({ infos, className }: InfoSectionProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-md p-4 flex flex-col items-center gap-3",
        className
      )}
    >
      {infos.map((info) => (
        <li key={info} className="text-gray-400">
          {info}
        </li>
      ))}
    </div>
  );
};

type CallUsCircleProps = ComponentProps<"div">;

export const CallUsCircle = ({ className }: CallUsCircleProps) => {
  return (
    <div className={cn("", className)}>
      <div className="relative -bottom-[45%] w-full h-full text-center">
        <div className="relative flex flex-col items-center justify-center gap-4 z-1">
          <Button className="group bg-white rounded-full p-2 shadow-lg hover:bg-lime-300">
            <div className="bg-white border border-gray-400 rounded-full p-4 shadow-md group-hover:bg-lime-300">
              <CallIcon className="w-6 h-6 text-gray-600" />
            </div>
          </Button>
          <div className="text-base w-64 capitalize text-gray-600">
            tap the call button to speak with our AI agent
          </div>
          <div className="text-sm text-gray-400">Try asking</div>
        </div>
        <Circle className="absolute w-full h-full -bottom-[10%]" />
      </div>
    </div>
  );
};

type CircleProps = ComponentProps<"div">;
export function Circle({ className }: CircleProps) {
  return (
    <div className={cn("border border-blue-500 rounded-full", className)}></div>
  );
}

export function MultipleAudioLines() {
  return (
    <>
      {[1, 2, 3].map((a) => (
        <AudioLines key={a} className="w-20 h-20 text-blue-600" />
      ))}
    </>
  );
}

type Buttonprops = ComponentProps<"button">;

export function Button({ children, ...props }: Buttonprops) {
  return (
    <button
      className="border border-blue-400 rounded-full py-2 bg-white px-10 shadow-md"
      {...props}
    >
      {children}
    </button>
  );
}
