"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_remix_adapter = require("@netlify/remix-adapter");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ROAZWSOV.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "bg-gradient-to-tr from-fitalyst-green to-fitalyst-orange no-scrollbar h-[200vh]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}

// app/routes/onboarding.tsx
var onboarding_exports = {};
__export(onboarding_exports, {
  default: () => Onboarding,
  links: () => links2
});
var import_react_router_dom = require("react-router-dom");
var import_react3 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime"), links2 = () => [
  { rel: "stylesheet", href: tailwind_default }
], Student = class {
  constructor(_id, name, email, calendarLink, originalCalendarLink, bedtime, emojis = []) {
    this._id = _id, this.name = name, this.email = email, this.calendarLink = calendarLink, this.originalCalendarLink = originalCalendarLink, this.bedtime = bedtime, this.emojis = emojis;
  }
};
function Onboarding() {
  let navigate = (0, import_react_router_dom.useNavigate)(), [student, setStudent] = (0, import_react3.useState)(new Student("", "")), [page, setPage] = (0, import_react3.useState)(0), [question, setQuestion] = (0, import_react3.useState)("What is your name?"), [input, setInput] = (0, import_react3.useState)(""), [type, setType] = (0, import_react3.useState)("text"), [calendarLink, setCalendarLink] = (0, import_react3.useState)(""), [bedtime, setBedtime] = (0, import_react3.useState)("23:00"), [emojis, setEmojis] = (0, import_react3.useState)([]);
  async function createStudent(bedtimeValue) {
    try {
      let response = await fetch("http://ec2-3-144-236-30.us-east-2.compute.amazonaws.com:3002/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: student.name,
          email: student.email,
          calendarLink,
          bedtime: bedtimeValue,
          emojis
        })
      });
      if (!response.ok)
        throw new Error(`Failed to create student: ${response.statusText}`);
      let createdStudent = await response.json();
      localStorage.setItem("studentId", createdStudent._id), navigate("/");
    } catch (error) {
      console.error("Error creating student:", error), alert("Failed to onboard. Please try again.");
    }
  }
  function onClick(input2) {
    switch (page) {
      case 0:
        if (input2 === "") {
          alert("Please enter your name.");
          return;
        }
        setStudent((prev) => ({ ...prev, name: input2 })), setQuestion("What is your email?");
        break;
      case 1:
        if (input2 === "") {
          alert("Please enter your email.");
          return;
        }
        setStudent((prev) => ({ ...prev, email: input2 })), setQuestion("Please provide your Google Calendar link.");
        break;
      case 2:
        setCalendarLink(input2), setQuestion("When is your bedtime?"), setType("time");
        break;
      case 3:
        if (input2 === "") {
          alert("Please enter your bedtime.");
          return;
        } else
          setBedtime(input2), createStudent(input2);
        break;
    }
    setPage(page + 1);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col space-y-10 justify-center h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "text-white font-bold text-5xl place-self-center", children: [
      " ",
      question,
      " "
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        className: "h-20 text-black font-bold text-5xl place-self-center",
        type,
        value: input,
        onChange: (event) => setInput(event.target.value),
        onKeyUp: (event) => {
          event.key === "Enter" && (onClick(input), setInput(""));
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "place-self-center", children: [
      page !== 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          className: "text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
          onClick: () => {
            switch (page) {
              case 1:
                setQuestion("What is your name?"), setInput("");
                break;
              case 2:
                setQuestion("What is your email?"), setInput(student.name), setType("text");
                break;
              case 3:
                setInput(student.email);
                break;
              default:
                break;
            }
            setPage(page - 1);
          },
          children: "Back "
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          className: "text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
          onClick: () => {
            onClick(input), setInput("");
          },
          children: "Next "
        }
      )
    ] })
  ] }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  AssignmentTile: () => AssignmentTile,
  Countdown: () => Countdown,
  default: () => Dash,
  links: () => links3
});
var import_react4 = require("react"), import_react_router_dom2 = require("react-router-dom");
var ICAL = __toESM(require("ical.js")), import_jsx_runtime4 = require("react/jsx-runtime"), links3 = () => [
  { rel: "stylesheet", href: tailwind_default }
], BASE_API_URL = "http://ec2-3-144-236-30.us-east-2.compute.amazonaws.com:3002", Student2 = class {
  constructor(_id, name, email, calendarLink, originalCalendarLink, bedtime, emojis = []) {
    this._id = _id, this.name = name, this.email = email, this.calendarLink = calendarLink, this.originalCalendarLink = originalCalendarLink, this.bedtime = bedtime, this.emojis = emojis;
  }
}, Assignment = class {
  constructor(_id, name, description, date) {
    this._id = _id, this.name = name, this.description = description, this.date = date;
  }
};
function Dash() {
  let bottomRef = (0, import_react4.useRef)(null), navigate = (0, import_react_router_dom2.useNavigate)(), [showSettings, setShowSettings] = (0, import_react4.useState)(!1), [showEmotes, setShowEmotes] = (0, import_react4.useState)(!0), [response, setResponse] = (0, import_react4.useState)(""), [signedIn, setSignedIn] = (0, import_react4.useState)(!1), [assignments, setAssignments] = (0, import_react4.useState)([]), [currentStudent, setCurrentStudent] = (0, import_react4.useState)(null), [bedtime, setBedtime] = (0, import_react4.useState)((currentStudent == null ? void 0 : currentStudent.bedtime) || ""), [name, setName] = (0, import_react4.useState)((currentStudent == null ? void 0 : currentStudent.name) || ""), [calendarLink, setCalendarLink] = (0, import_react4.useState)((currentStudent == null ? void 0 : currentStudent.calendarLink) || ""), [originalCalendarLink, setOriginalCalendarLink] = (0, import_react4.useState)((currentStudent == null ? void 0 : currentStudent.originalCalendarLink) || ""), [email, setEmail] = (0, import_react4.useState)((currentStudent == null ? void 0 : currentStudent.email) || ""), storedStudentId = typeof window < "u" ? localStorage.getItem("studentId") : null;
  function isSignedIn() {
    return !0;
  }
  let [students, setStudents] = (0, import_react4.useState)([]), fetchStudentData = async () => {
    try {
      let response2 = await fetch(`${BASE_API_URL}/students`);
      if (response2.ok) {
        let studentsList = (await response2.json()).map(
          (student) => new Student2(student._id, student.name, student.email, student.calendarLink, student.originalCalendarLink, student.bedtime, student.emojis)
        );
        setStudents(studentsList);
        let storedStudentId2 = localStorage.getItem("studentId"), currentStudentFromStorage = studentsList.find((student) => student._id === storedStudentId2);
        currentStudentFromStorage && currentStudentFromStorage.calendarLink && (setCurrentStudent(currentStudentFromStorage), setBedtime(currentStudentFromStorage.bedtime), setOriginalCalendarLink(currentStudentFromStorage.originalCalendarLink), fetchAndParseICS(currentStudentFromStorage));
      } else
        console.error("Failed to fetch students:", response2.status, response2.statusText);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }, fetchAndParseICS = async (student) => {
    if (!student || !student._id) {
      console.error("Student or student ID is missing.");
      return;
    }
    try {
      let proxyURL = `${BASE_API_URL}/api/calendar/${student._id}`, response2 = await fetch(proxyURL);
      if (response2.ok) {
        let data = await response2.text(), jcalData = ICAL.parse(data), assignmentsList = new ICAL.Component(jcalData).getAllSubcomponents("vevent").map((vevent) => new ICAL.Event(vevent)).map(
          (event) => new Assignment(event.uid, event.summary, event.description, event.startDate.toJSDate())
        );
        setAssignments(assignmentsList);
      } else
        console.error("Failed to fetch ICS:", response2.status, response2.statusText);
    } catch (error) {
      console.error("Error fetching and parsing ICS:", error);
    }
  };
  (0, import_react4.useEffect)(() => {
    document.body.style.overflow = "hidden", isSignedIn() || navigate("/onboarding"), storedStudentId ? fetchStudentDataById(storedStudentId) : fetchStudentData();
  }, []), (0, import_react4.useEffect)(() => {
    setName((currentStudent == null ? void 0 : currentStudent.name) || ""), setCalendarLink((currentStudent == null ? void 0 : currentStudent.calendarLink) || ""), setEmail((currentStudent == null ? void 0 : currentStudent.email) || ""), setBedtime((currentStudent == null ? void 0 : currentStudent.bedtime) || "");
  }, [currentStudent]), (0, import_react4.useEffect)(() => {
    currentStudent && currentStudent._id && localStorage.setItem("studentId", currentStudent._id);
  }, [currentStudent]);
  let fetchStudentDataById = async (_id) => {
    if (!_id) {
      console.error("Student ID is not provided.");
      return;
    }
    try {
      let response2 = await fetch(`${BASE_API_URL}/students/${_id}`);
      if (response2.ok) {
        let studentData = await response2.json();
        if (studentData) {
          let student = new Student2(studentData._id, studentData.name, studentData.email, studentData.calendarLink, studentData.originalCalendarLink, studentData.bedtime, studentData.emojis);
          setCurrentStudent(student), setBedtime(student.bedtime), setOriginalCalendarLink(student.originalCalendarLink), fetchAndParseICS(student);
        } else
          console.error("Student with ID not found:", _id), fetchStudentData();
      } else
        console.error("Error fetching student by ID:", response2.statusText);
    } catch (error) {
      console.error("Error fetching student by ID:", error);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      name,
      originalCalendarLink,
      calendarLink,
      email,
      bedtime
    };
    if (console.log("Form Data:", obj), console.log(obj.bedtime, typeof obj.bedtime), !currentStudent || !currentStudent._id) {
      console.error("Current student or student ID is missing.");
      return;
    }
    try {
      let response2 = await fetch(`${BASE_API_URL}/students/${currentStudent._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });
      response2.ok ? (console.log("Student data updated successfully."), setCurrentStudent((prevState) => ({ ...prevState, ...obj })), setBedtime(obj.bedtime), setStudents((prevStudents) => {
        let updatedStudents = [...prevStudents], studentIndex = updatedStudents.findIndex((stud) => stud._id === currentStudent._id);
        return studentIndex !== -1 && (updatedStudents[studentIndex] = { ...updatedStudents[studentIndex], ...obj }), updatedStudents;
      }), setShowSettings(!1)) : console.error("Error updating student data:", response2.statusText);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  }
  function handleOriginalCalendarLinkChange(e) {
    setOriginalCalendarLink(e.target.value);
  }
  async function handleClick(emote) {
    if (!currentStudent || !currentStudent._id) {
      console.error("Current student or student ID is missing.");
      return;
    }
    switch (document.body.style.overflow = "auto", setShowEmotes(!1), emote) {
      case 1: {
        setResponse("That's good to hear!");
        break;
      }
      case 2: {
        setResponse("Hope you feel better!");
        break;
      }
      case 3: {
        setResponse("Hope you feel better!");
        break;
      }
      case 4: {
        setResponse("Hope you feel better!");
        break;
      }
      default: {
        setResponse("Emote not recognized.");
        break;
      }
    }
    let emojiEvent = { emoji: emote, timestamp: /* @__PURE__ */ new Date() };
    try {
      let studentId = currentStudent == null ? void 0 : currentStudent._id;
      if (!studentId) {
        console.error("Student ID is not available.");
        return;
      }
      let response2 = await fetch(`${BASE_API_URL}/students/${studentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ emojiEvent })
      });
      response2.ok || console.error("Error updating emote:", response2.statusText);
    } catch (error) {
      console.error("Error sending emote to server:", error);
    }
  }
  function scrollDown() {
    var startY = 0, stopY = bottomRef.current.offsetTop, distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 100);
    speed >= 20 && (speed = 20);
    var step = Math.round(distance / 25), leapY = stopY > startY ? startY + step : startY - step, timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step)
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed), leapY += step, leapY > stopY && (leapY = stopY), timer++;
      return;
    }
    for (var i = startY; i > stopY; i -= step)
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed), leapY -= step, leapY < stopY && (leapY = stopY), timer++;
    return !1;
  }
  function scrollUp() {
    var stopY = 0, startY = bottomRef.current.offsetTop, distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 100);
    speed >= 20 && (speed = 20);
    var step = Math.round(distance / 25), leapY = stopY > startY ? startY + step : startY - step, timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step)
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed), leapY += step, leapY > stopY && (leapY = stopY), timer++;
      return;
    }
    for (var i = startY; i > stopY; i -= step)
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed), leapY -= step, leapY < stopY && (leapY = stopY), timer++;
    return !1;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "scroll-smooth", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "h-[100vh]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col space-y-10 justify-center h-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row place-self-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "icons/Carrot_GreenHalo.svg", className: "place-self-center bg-contain w-96 h-96" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Countdown, { assignments, bedtime })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-5xl place-self-center", children: `Hey ${(currentStudent == null ? void 0 : currentStudent.name) || "there"}, it's ${getCurrentDay()}.` }),
        showEmotes ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col place-self-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-medium text-3xl place-self-center", children: "How are you feeling today?" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row place-self-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "text-5xl", onClick: () => handleClick(1), children: "\u{1F603}" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "text-5xl", onClick: () => handleClick(2), children: "\u{1F4A9}" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "text-5xl", onClick: () => handleClick(3), children: "\u{1F614}" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "text-5xl", onClick: () => handleClick(4), children: "\u{1F621}" })
          ] })
        ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col place-self-center space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-medium text-3xl place-self-center", children: response }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-medium text-3xl place-self-center", children: "Your halo is red because you have 5 assignments coming up:" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "icons/down-arrow.svg", className: "place-self-center bg-contain absolute bottom-5 animate-bounce cursor-pointer", onClick: () => scrollDown() })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "fixed bottom-4 left-4", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "icons/settings.svg", onClick: () => setShowSettings(!0) }) }),
      showSettings ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative w-auto my-6 mx-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-gradient-to-tr from-fitalyst-green to-fitalyst-orange border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-start justify-between pl-5 pr-5 pt-5 border-solid border-white rounded-t", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-3xl text-white font-bold", children: "Settings" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("form", { method: "post", encType: "multipart/form-data", action: "# ", onSubmit: handleSubmit, className: "relative p-6 grid grid-cols-2 grid-flow-row justify-evenly gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-fitalyst-orange font-bold text-2xl", children: "Name" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "text", name: "name", className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", defaultValue: currentStudent == null ? void 0 : currentStudent.name, required: !0 })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-fitalyst-green font-bold text-2xl", children: "Bedtime" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "time", name: "bedtime", onChange: (e) => setBedtime(e.target.value), value: bedtime, className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", required: !0 })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-fitalyst-orange font-bold text-2xl", children: "Calendar Link" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "text", name: "originalCalendarLink", className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", value: originalCalendarLink, onChange: handleOriginalCalendarLinkChange, required: !0 })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-fitalyst-green font-bold text-2xl", children: "Email" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "email", name: "email", className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", defaultValue: currentStudent == null ? void 0 : currentStudent.email, required: !0 })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-end p-6 rounded-b", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "button",
                    {
                      className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      type: "button",
                      onClick: () => setShowSettings(!1),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "button",
                    {
                      className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      type: "submit",
                      onClick: () => setShowSettings(!1),
                      children: "Save Changes"
                    }
                  )
                ] }),
                currentStudent != null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "button",
                  {
                    className: "bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                    type: "submit",
                    onClick: () => navigate("/onboarding"),
                    children: "Onboard"
                  }
                )
              ] })
            ] }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })
      ] }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col w-full h-[100vh]", ref: bottomRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "icons/up-arrow.svg", className: "bg-contain place-self-center animate-bounce cursor-pointer p-8", onClick: () => scrollUp() }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-col justify-center gap-0", children: assignments.sort((a, b) => a.date.toLocaleString() < b.date.toLocaleString() ? -1 : 1).slice(0, 5).map(
        (assignment) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AssignmentTile, { ...assignment }, assignment._id)
      ) })
    ] })
  ] });
}
function Countdown(props) {
  let [date, setDate] = (0, import_react4.useState)(/* @__PURE__ */ new Date());
  (0, import_react4.useEffect)(() => {
    let intervalId = setInterval(() => {
      setDate(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(intervalId);
  }, []);
  var countDownDate = new Date(date);
  let [bedHour, bedMinute] = (typeof props.bedtime == "string" ? props.bedtime.split(":") : ["00", "00"]).map((num) => parseInt(num));
  var countDownTime = countDownDate.setHours(bedHour, bedMinute, 0, 0), now = date.getTime(), distance = countDownTime - now;
  if (props.assignments.length > 0 && distance > 3 * 60 * 60 * 1e3 && Math.abs(props.assignments[0].date.getTime() - now) < 8 * 60 * 60 * 1e3) {
    var firstAssignment = props.assignments[0].date;
    distance = firstAssignment.getTime() - now;
  }
  if (distance < -4 * 60 * 60 * 1e3 && (distance += 24 * 60 * 60 * 1e3), distance < 0) {
    var text = "past";
    distance *= -1;
  } else
    var text = "'til";
  var days = Math.floor(distance / (1e3 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(distance / (1e3 * 60 * 60 * 24)) : Math.floor(distance / (1e3 * 60 * 60 * 24)), hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)) < 10 ? "0" + Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)) : Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)) < 10 ? "0" + Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)) : Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)), seconds = Math.floor(distance % (1e3 * 60) / 1e3) < 10 ? "0" + Math.floor(distance % (1e3 * 60) / 1e3) : Math.floor(distance % (1e3 * 60) / 1e3);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col place-self-center place-items-end", children: [
    days == 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: hours }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "h" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: minutes }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "m" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: seconds }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "s" })
      ] })
    ] }),
    days != 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: days }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "d" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: hours }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "h" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: minutes }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "m" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-bold text-9xl tabular-nums", children: seconds }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white font-light text-6xl", children: "s" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "text-white font-bold text-5xl underline", children: [
      text,
      " \u{1F634}"
    ] })
  ] });
}
function AssignmentTile(props) {
  var distance = props.date.getTime() - (/* @__PURE__ */ new Date()).getTime(), days = Math.floor(distance / (1e3 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(distance / (1e3 * 60 * 60 * 24)) : Math.floor(distance / (1e3 * 60 * 60 * 24)), hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)) < 10 ? "0" + Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)) : Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row w-full p-2 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex-none w-1/6 h-40 border-4 rounded-l-xl text-white font-medium text-xl text-center flex items-center justify-center overflow-hidden", children: props.name }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grow h-40 border-t-4 border-b-4 text-white font-medium text-2xl underline text-center flex items-center justify-center overflow-hidden", children: props.description }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-none w-1/6 h-40 border-4 rounded-r-2xl text-white font-medium text-2xl text-center flex items-center justify-center overflow-hidden", children: [
      days,
      "d ",
      hours,
      "h"
    ] })
  ] });
}
function getCurrentDay() {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(/* @__PURE__ */ new Date()).getDay()];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MHD4CLUH.js", imports: ["/build/_shared/chunk-QKNEP3G5.js", "/build/_shared/chunk-FKMX3JTF.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GGZ7WKWY.js", imports: ["/build/_shared/chunk-LCYPSV2B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3PIXMXN3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboarding": { id: "routes/onboarding", parentId: "root", path: "onboarding", index: void 0, caseSensitive: void 0, module: "/build/routes/onboarding-FEEMKLVZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "fa0b0dec", hmr: void 0, url: "/build/manifest-FA0B0DEC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/onboarding": {
    id: "routes/onboarding",
    parentId: "root",
    path: "onboarding",
    index: void 0,
    caseSensitive: void 0,
    module: onboarding_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};

// server.js
var handler = (0, import_remix_adapter.createRequestHandler)({
  build: server_build_exports,
  mode: "production"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});