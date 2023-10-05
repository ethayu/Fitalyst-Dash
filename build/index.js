var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
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
import { LiveReload, Outlet, Links, Scripts } from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2T7QZ4BC.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gradient-to-tr from-fitalyst-green to-fitalyst-orange no-scrollbar h-[200vh]", children: [
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/onboarding.tsx
var onboarding_exports = {};
__export(onboarding_exports, {
  default: () => Onboarding,
  links: () => links2
});
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links2 = () => [
  { rel: "stylesheet", href: tailwind_default }
], Student = class {
  constructor(_id, name, email, calendarLink, originalCalendarLink, bedtime, emojis = []) {
    this._id = _id, this.name = name, this.email = email, this.calendarLink = calendarLink, this.originalCalendarLink = originalCalendarLink, this.bedtime = bedtime, this.emojis = emojis;
  }
};
function Onboarding() {
  let navigate = useNavigate(), [student, setStudent] = useState(new Student("", "")), [page, setPage] = useState(0), [question, setQuestion] = useState("What is your name?"), [input, setInput] = useState(""), [type, setType] = useState("text"), [calendarLink, setCalendarLink] = useState(""), [bedtime, setBedtime] = useState("23:00"), [emojis, setEmojis] = useState([]);
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
  return /* @__PURE__ */ jsxDEV3("div", { className: "h-screen", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col space-y-10 justify-center h-full", children: [
    /* @__PURE__ */ jsxDEV3("p", { className: "text-white font-bold text-5xl place-self-center", children: [
      " ",
      question,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/onboarding.tsx",
      lineNumber: 123,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3(
      "input",
      {
        className: "h-20 text-black font-bold text-5xl place-self-center",
        type,
        value: input,
        onChange: (event) => setInput(event.target.value),
        onKeyUp: (event) => {
          event.key === "Enter" && (onClick(input), setInput(""));
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboarding.tsx",
        lineNumber: 124,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3("div", { className: "place-self-center", children: [
      page !== 0 && /* @__PURE__ */ jsxDEV3(
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
        },
        void 0,
        !1,
        {
          fileName: "app/routes/onboarding.tsx",
          lineNumber: 137,
          columnNumber: 36
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        "button",
        {
          className: "text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
          onClick: () => {
            onClick(input), setInput("");
          },
          children: "Next "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/onboarding.tsx",
          lineNumber: 159,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/onboarding.tsx",
      lineNumber: 136,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/onboarding.tsx",
    lineNumber: 122,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/onboarding.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  AssignmentTile: () => AssignmentTile,
  Countdown: () => Countdown,
  default: () => Dash,
  links: () => links3
});
import { useState as useState2, useEffect as useEffect2, useRef } from "react";
import { useNavigate as useNavigate2 } from "react-router-dom";
import * as ICAL from "ical.js";
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links3 = () => [
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
  let bottomRef = useRef(null), navigate = useNavigate2(), [showSettings, setShowSettings] = useState2(!1), [showEmotes, setShowEmotes] = useState2(!0), [response, setResponse] = useState2(""), [signedIn, setSignedIn] = useState2(!1), [assignments, setAssignments] = useState2([]), [currentStudent, setCurrentStudent] = useState2(null), [bedtime, setBedtime] = useState2(currentStudent?.bedtime || ""), [name, setName] = useState2(currentStudent?.name || ""), [calendarLink, setCalendarLink] = useState2(currentStudent?.calendarLink || ""), [originalCalendarLink, setOriginalCalendarLink] = useState2(currentStudent?.originalCalendarLink || ""), [email, setEmail] = useState2(currentStudent?.email || ""), storedStudentId = typeof window < "u" ? localStorage.getItem("studentId") : null;
  function isSignedIn() {
    return !0;
  }
  let [students, setStudents] = useState2([]), fetchStudentData = async () => {
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
  useEffect2(() => {
    document.body.style.overflow = "hidden", isSignedIn() || navigate("/onboarding"), storedStudentId ? fetchStudentDataById(storedStudentId) : fetchStudentData();
  }, []), useEffect2(() => {
    setName(currentStudent?.name || ""), setCalendarLink(currentStudent?.calendarLink || ""), setEmail(currentStudent?.email || ""), setBedtime(currentStudent?.bedtime || "");
  }, [currentStudent]), useEffect2(() => {
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
      let studentId = currentStudent?._id;
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
  return /* @__PURE__ */ jsxDEV4("div", { className: "scroll-smooth", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "h-[100vh]", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col space-y-10 justify-center h-full", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row place-self-center", children: [
          /* @__PURE__ */ jsxDEV4("img", { src: "icons/Carrot_GreenHalo.svg", className: "place-self-center bg-contain w-96 h-96" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 353,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV4(Countdown, { assignments, bedtime }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 354,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 352,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-5xl place-self-center", children: `Hey ${currentStudent?.name || "there"}, it's ${getCurrentDay()}.` }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 356,
          columnNumber: 21
        }, this),
        showEmotes ? /* @__PURE__ */ jsxDEV4(Fragment, { children: /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col place-self-center space-y-2", children: [
          /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-medium text-3xl place-self-center", children: "How are you feeling today?" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 360,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row place-self-center space-x-2", children: [
            /* @__PURE__ */ jsxDEV4("button", { className: "text-5xl", onClick: () => handleClick(1), children: "\u{1F603}" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 362,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4("button", { className: "text-5xl", onClick: () => handleClick(2), children: "\u{1F4A9}" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 363,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4("button", { className: "text-5xl", onClick: () => handleClick(3), children: "\u{1F614}" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 364,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4("button", { className: "text-5xl", onClick: () => handleClick(4), children: "\u{1F621}" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 365,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 361,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 359,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 358,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV4(Fragment, { children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col place-self-center space-y-2", children: [
            /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-medium text-3xl place-self-center", children: response }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 371,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-medium text-3xl place-self-center", children: "Your halo is red because you have 5 assignments coming up:" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 372,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 370,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV4("img", { src: "icons/down-arrow.svg", className: "place-self-center bg-contain absolute bottom-5 animate-bounce cursor-pointer", onClick: () => scrollDown() }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 374,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 369,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 351,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("button", { className: "fixed bottom-4 left-4", children: /* @__PURE__ */ jsxDEV4("img", { src: "icons/settings.svg", onClick: () => setShowSettings(!0) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 379,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 378,
        columnNumber: 17
      }, this),
      showSettings ? /* @__PURE__ */ jsxDEV4(Fragment, { children: [
        /* @__PURE__ */ jsxDEV4(
          "div",
          {
            className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
            children: /* @__PURE__ */ jsxDEV4("div", { className: "relative w-auto my-6 mx-auto max-w-3xl", children: /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-tr from-fitalyst-green to-fitalyst-orange border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [
              /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start justify-between pl-5 pr-5 pt-5 border-solid border-white rounded-t", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-3xl text-white font-bold", children: "Settings" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 391,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 390,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV4("form", { method: "post", encType: "multipart/form-data", action: "# ", onSubmit: handleSubmit, className: "relative p-6 grid grid-cols-2 grid-flow-row justify-evenly gap-4", children: [
                /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-fitalyst-orange font-bold text-2xl", children: "Name" }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 398,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ jsxDEV4("input", { type: "text", name: "name", className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", defaultValue: currentStudent?.name, required: !0 }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 399,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 397,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-fitalyst-green font-bold text-2xl", children: "Bedtime" }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 402,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ jsxDEV4("input", { type: "time", name: "bedtime", onChange: (e) => setBedtime(e.target.value), value: bedtime, className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", required: !0 }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 403,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 401,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-fitalyst-orange font-bold text-2xl", children: "Calendar Link" }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 406,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ jsxDEV4("input", { type: "text", name: "originalCalendarLink", className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", value: originalCalendarLink, onChange: handleOriginalCalendarLinkChange, required: !0 }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 407,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 405,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-fitalyst-green font-bold text-2xl", children: "Email" }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 412,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ jsxDEV4("input", { type: "email", name: "email", className: "bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", defaultValue: currentStudent?.email, required: !0 }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 413,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 411,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-end p-6 rounded-b", children: [
                  /* @__PURE__ */ jsxDEV4(
                    "button",
                    {
                      className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      type: "button",
                      onClick: () => setShowSettings(!1),
                      children: "Cancel"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 420,
                      columnNumber: 45
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV4(
                    "button",
                    {
                      className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      type: "submit",
                      onClick: () => setShowSettings(!1),
                      children: "Save Changes"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 427,
                      columnNumber: 45
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 419,
                  columnNumber: 41
                }, this),
                currentStudent?.name == null && /* @__PURE__ */ jsxDEV4(
                  "button",
                  {
                    className: "bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                    type: "submit",
                    onClick: () => navigate("/onboarding"),
                    children: "Onboard"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 436,
                    columnNumber: 74
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 396,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 388,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 386,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 383,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 447,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 382,
        columnNumber: 9
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 350,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col w-full h-[100vh]", ref: bottomRef, children: [
      /* @__PURE__ */ jsxDEV4("img", { src: "icons/up-arrow.svg", className: "bg-contain place-self-center animate-bounce cursor-pointer p-8", onClick: () => scrollUp() }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 452,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col justify-center gap-0", children: assignments.sort((a, b) => a.date.toLocaleString() < b.date.toLocaleString() ? -1 : 1).slice(0, 5).map(
        (assignment) => /* @__PURE__ */ jsxDEV4(AssignmentTile, { ...assignment }, assignment._id, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 455,
          columnNumber: 11
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 453,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 451,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 349,
    columnNumber: 5
  }, this);
}
function Countdown(props) {
  let [date, setDate] = useState2(/* @__PURE__ */ new Date());
  useEffect2(() => {
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
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col place-self-center place-items-end", children: [
    days == 0 && /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: hours }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 517,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "h" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 518,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 516,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: minutes }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 521,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "m" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 522,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 520,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: seconds }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 525,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "s" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 526,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 524,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 515,
      columnNumber: 27
    }, this),
    days != 0 && /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-4", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: days }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 531,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "d" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 532,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 530,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: hours }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 535,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "h" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 536,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 534,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: minutes }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 539,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "m" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 540,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 538,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row px-2 place-items-end", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-9xl tabular-nums", children: seconds }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 543,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-light text-6xl", children: "s" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 544,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 542,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 529,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-white font-bold text-5xl underline", children: [
      text,
      " \u{1F634}"
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 547,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 514,
    columnNumber: 5
  }, this);
}
function AssignmentTile(props) {
  var distance = props.date.getTime() - (/* @__PURE__ */ new Date()).getTime(), days = Math.floor(distance / (1e3 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(distance / (1e3 * 60 * 60 * 24)) : Math.floor(distance / (1e3 * 60 * 60 * 24)), hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)) < 10 ? "0" + Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)) : Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row w-full p-2 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "flex-none w-1/6 h-40 border-4 rounded-l-xl text-white font-medium text-xl text-center flex items-center justify-center overflow-hidden", children: props.name }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 562,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "grow h-40 border-t-4 border-b-4 text-white font-medium text-2xl underline text-center flex items-center justify-center overflow-hidden", children: props.description }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 565,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex-none w-1/6 h-40 border-4 rounded-r-2xl text-white font-medium text-2xl text-center flex items-center justify-center overflow-hidden", children: [
      days,
      "d ",
      hours,
      "h"
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 568,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 561,
    columnNumber: 5
  }, this);
}
function getCurrentDay() {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(/* @__PURE__ */ new Date()).getDay()];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3MSZ6C2L.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-EJJRO6WJ.js", "/build/_shared/chunk-3XJOQGLE.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BCJ43RGM.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L2TI5M7G.js", imports: ["/build/_shared/chunk-ONYGZ6UJ.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-AQ42G6SE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/onboarding": { id: "routes/onboarding", parentId: "root", path: "onboarding", index: void 0, caseSensitive: void 0, module: "/build/routes/onboarding-IVDSSE4N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "4fa8694c", hmr: { runtime: "/build/_shared/chunk-BCJ43RGM.js", timestamp: 1696486286828 }, url: "/build/manifest-4FA8694C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
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
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
