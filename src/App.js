import "./App.css";
import { useState, useRef } from "react";
import classnames from "classnames";
import {
  ChevronLg,
  Share,
  PlayLg,
  Reply,
  Pencil,
  ClickLg,
  PlusCircle,
  ChevronRight,
  ChevronDown,
  Folder,
  Document,
  PaperAirplane,
  Trash,
} from "./Icons";

function App() {
  const [devToolsSelected, setDevToolsSelected] = useState(false);
  const toggleSelected = () => setDevToolsSelected(!devToolsSelected);

  return (
    <div className="bg-gray-200 w-screen h-screen flex flex-col text-gray-800">
      <header className="bg-white w-full h-16 flex items-center justify-between p-2">
        <div className="flex space-x-4 items-center">
          <button className="w-8 h-8 p-1 text-gray-500 rounded-sm hover:text-blue-500">
            <ChevronLg />
          </button>
          <div>My Recording</div>
        </div>
        <div className="flex space-x-6 items-center">
          <button className="bg-gray-100 hover:bg-gray-200 duration-300 py-1.5 px-2 rounded-sm flex flex-row items-center space-x-2 text-sm">
            <div className="w-4 h-4">
              <Share />
            </div>
            <div>Share</div>
          </button>
          <Toggle toggleSelected={toggleSelected} />
          <div className="rounded-full h-8 w-8 bg-blue-400" />
        </div>
      </header>
      {devToolsSelected ? <DevTools /> : <Viewer />}
    </div>
  );
}

function Viewer() {
  return (
    <main className="flex flex-col flex-grow space-y-2 p-2">
      <section className="flex flex-row flex-grow space-x-2 ">
        <div className="bg-gray-900 flex-grow rounded-md" />
        <Transcript />
      </section>
      <Timeline />
    </main>
  );
}

function DevTools() {
  return (
    <main className="flex flex-col flex-grow space-y-2 p-2">
      <section className="flex flex-row flex-grow space-x-2 ">
        <Sources />
        <div className="bg-white flex flex-col flex-grow rounded-md">
          <header className="bg-gray-200 flex flex-row h-7 text-sm rounded-t-md">
            <div className="text-center rounded-t-md shadow px-6 py-0.5 flex flex-row items-end bg-white">
              <span>src.js</span>
            </div>
            <div className="text-center rounded-t-md shadow px-6 py-0.5 flex flex-row items-end bg-gray-100">
              <span>app.js</span>
            </div>
          </header>
          <div className="flex-grow bg-white rounded-b-md"></div>
        </div>
        <div className="w-1/3 rounded-md flex flex-col space-y-2">
          <div className="bg-gray-900 h-1/2 flex-grow rounded-md" />
          <div className="bg-white h-1/2 rounded-md flex flex-col">
            <header className="bg-gray-200 flex flex-row h-7 text-sm rounded-t-md">
              <div className="text-center rounded-t-md shadow px-6 py-0.5 flex flex-row items-end bg-white">
                <span>Console</span>
              </div>
              <div className="text-center rounded-t-md shadow px-6 py-0.5 flex flex-row items-end bg-gray-100">
                <span>Elements</span>
              </div>
              <div className="text-center rounded-t-md shadow px-6 py-0.5 flex flex-row items-end bg-gray-100">
                <span>Transcript</span>
              </div>
            </header>
            <div className="flex-grow bg-white rounded-b-md"></div>
          </div>
        </div>
      </section>
      <Timeline />
    </main>
  );
}

function List({ header, children }) {
  return (
    <div className="bg-white w-96 rounded-md p-4 flex flex-col space-y-6">
      <h2 className="font-medium">{header}</h2>
      <div className="overflow-auto flex-grow">
        <div className="flex flex-col space-y-2 h-0">{children}</div>
      </div>
    </div>
  );
}

function Transcript() {
  return (
    <List header="Transcript">
      <div className="flex flex-row justify-between p-4 border-2 rounded-md duration-300 hover:border-blue-400">
        <div className="flex flex-row items-center space-x-4">
          <div className="w-6 h-6 text-gray-500">
            <ClickLg />
          </div>
          <span className="font-medium text-sm">Mouse Click</span>
        </div>
        <div>
          <span className="rounded-md font-mono bg-gray-100 text-gray-500 text-xs p-1">
            00:12
          </span>
        </div>
      </div>
      <Comment
        pointTime={"00:25"}
        user={"Jason"}
        time={"1:04pm"}
        color={"red"}
        selected
      >
        This logo would be nicer in pink
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis */}
      </Comment>
      <Comment
        pointTime={"00:40"}
        user={"Jaril"}
        time={"1:04pm"}
        color={"blue"}
      >
        <div>Should we try a purple background here?</div>
        <div>Or maybe something that's not purple</div>
      </Comment>
      {/* <Comment
        pointTime={"00:42"}
        user={"Jason"}
        time={"3:45pm"}
        color={"green"}
        reply
      >
        Sed ut perspiciatis unde omnis iste natus error sit
      </Comment>
      <Comment
        pointTime={"00:42"}
        user={"Jaril"}
        time={"9:29pm"}
        color={"blue"}
        reply
      >
        Incididunt ut labore et dolore magna
      </Comment> */}
      {/* <Comment
        pointTime={"00:52"}
        user={"Jaril"}
        time={"1:04pm"}
        color={"blue"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
      </Comment> */}
    </List>
  );
}

function Sources() {
  return (
    <List header="Sources">
      <div className="text-sm">
        <div className="flex flex-row items-center p-1.5 hover:bg-gray-100 rounded-sm">
          <div className="text-gray-500 flex flex-row">
            <div className="h-5 w-5">
              <ChevronDown />
            </div>
            <div className="h-5 w-5">
              <Folder />
            </div>
          </div>
          <span className="ml-2">public</span>
        </div>
        <div className="flex flex-row items-center p-1.5 hover:bg-gray-100 rounded-sm">
          <div className="text-gray-500 flex flex-row ml-10">
            <div className="h-5 w-5">
              <Document />
            </div>
          </div>
          <span className="ml-2">app.js</span>
        </div>
        <div className="flex flex-row items-center p-1.5 hover:bg-gray-100 rounded-sm">
          <div className="text-gray-500 flex flex-row">
            <div className="h-5 w-5">
              <ChevronRight />
            </div>
            <div className="h-5 w-5">
              <Folder />
            </div>
          </div>
          <span className="ml-2">private</span>
        </div>
      </div>
    </List>
  );
}

function Timeline() {
  return (
    <section className="h-16 w-full bg-white flex items-center justify-between p-2">
      <button className="w-8 h-8 p-1 rounded-sm hover:text-blue-500">
        <PlayLg />
      </button>
      <div className="flex-grow h-1 mx-4 text-gray-600 bg-gray-300 rounded-full" />
      <button className="bg-gray-100 hover:bg-gray-200 duration-300 py-1.5 px-2 rounded-sm flex flex-row items-center space-x-2 text-sm">
        <div className="w-4 h-4">
          <PlusCircle />
        </div>
        <span>Add Comment</span>
      </button>
    </section>
  );
}

function Comment({ children, user, time, pointTime, color, reply, selected }) {
  const [hovered, setHovered] = useState(false);
  const commentNode = useRef(null);

  return (
    <div
      className={`group flex flex-col px-4 border-2 rounded-md duration-300 text-xs ${
        selected
          ? "border-purple-400 hover:border-purple-600"
          : "hover:border-blue-400"
      }`}
      ref={commentNode}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex flex-row space-x-4 py-4 ${selected ? "border-b" : ""}`}
      >
        <div className="flex flex-col flex-grow space-y-1">
          <div className="flex flex-row justify-between items-center space-x-4">
            <div className="flex flex-row items-center h-8 space-x-2">
              {reply ? (
                <div className="w-4 h-4 transform rotate-180 text-gray-400">
                  <Reply />
                </div>
              ) : null}
              <div
                className={`rounded-full flex flex-shrink-0 h-6 w-6 bg-${color}-400`}
              />
            </div>
            <div className="space-x-2 text-sm flex-grow">
              <span className="font-medium">{user}</span>
              <span className="text-xs text-gray-600">{time}</span>
            </div>
            {hovered ? (
              <div className="flex flex-row space-x-2 transform">
                {/* <button className="h-5 w-5 hover:text-blue-500">
                  <Reply />
                </button> */}
                <button className="h-4 w-4 hover:text-blue-500">
                  <Pencil />
                </button>
                <button className="h-4 w-4 hover:text-blue-500">
                  <Trash />
                </button>
              </div>
            ) : (
              <span className="rounded-md font-mono bg-gray-100 text-gray-500 text-xs px-1 py-0.5">
                {pointTime}
              </span>
            )}
          </div>
          <div className="text-gray-600 space-y-1 text-xs pl-10">
            {children}
          </div>
        </div>
      </div>
      {selected && (
        <div className="py-4 space-x-4 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center h-8 space-x-2 self-start">
            <div
              className={`rounded-full flex flex-shrink-0 h-6 w-6 bg-blue-400 opacity-50`}
            />
          </div>
          {/* <span contenteditable="true">sdfsd</span> */}
          <div
            className="text-gray-400 space-x-2 focus:outline-none text-xs flex-grow"
            contenteditable="true"
          >
            Type a comment ...
          </div>
          {/* <textarea
          className="text-gray-600 space-x-2 text-sm flex-grow focus:outline-none"
          placeholder="Type a comment ..."
        /> */}
          {/* <input
          type="textarea"
          className="text-gray-600 space-x-2 text-sm flex-grow focus:outline-none"
          placeholder="Type a comment ..."
        /> */}
          <button className="w-4 h-4 hover:text-blue-500 transform rotate-90 flex-shrink-0">
            <PaperAirplane />
          </button>
        </div>
      )}
    </div>
  );
}

function Toggle({ toggleSelected }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <span>{isOn ? "DevTools" : "Viewer"}</span>
      <button
        type="button"
        aria-pressed="false"
        className={classnames(
          "bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none",
          { "bg-indigo-400": isOn, "bg-blue-400": !isOn }
        )}
        onClick={() => {
          setIsOn(!isOn);
          toggleSelected();
        }}
      >
        <span
          aria-hidden="true"
          className={classnames(
            "pointer-events-none translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
            { "translate-x-5": isOn, "translate-x-0": !isOn }
          )}
        ></span>
      </button>
    </div>
  );
}

export default App;
