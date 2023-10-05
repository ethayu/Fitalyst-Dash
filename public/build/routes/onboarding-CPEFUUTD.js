import {
  tailwind_default
} from "/build/_shared/chunk-YQVIYTPS.js";
import {
  init_dist2 as init_dist,
  useNavigate
} from "/build/_shared/chunk-RKUHP6BA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-77CVAUO2.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/onboarding.tsx
init_dist();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
var Student = class {
  constructor(_id, name, email, calendarLink, originalCalendarLink, bedtime, emojis = []) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.calendarLink = calendarLink;
    this.originalCalendarLink = originalCalendarLink;
    this.bedtime = bedtime;
    this.emojis = emojis;
  }
};
function Onboarding() {
  _s();
  const navigate = useNavigate();
  const [student, setStudent] = (0, import_react.useState)(new Student("", ""));
  const [page, setPage] = (0, import_react.useState)(0);
  const [question, setQuestion] = (0, import_react.useState)("What is your name?");
  const [input, setInput] = (0, import_react.useState)("");
  const [type, setType] = (0, import_react.useState)("text");
  const [calendarLink, setCalendarLink] = (0, import_react.useState)("");
  const [bedtime, setBedtime] = (0, import_react.useState)("23:00");
  const [emojis, setEmojis] = (0, import_react.useState)([]);
  async function createStudent(bedtimeValue) {
    try {
      const response = await fetch(`http://ec2-3-144-236-30.us-east-2.compute.amazonaws.com:3002/students`, {
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
      if (!response.ok) {
        throw new Error(`Failed to create student: ${response.statusText}`);
      }
      const createdStudent = await response.json();
      localStorage.setItem("studentId", createdStudent._id);
      navigate("/");
    } catch (error) {
      console.error("Error creating student:", error);
      alert("Failed to onboard. Please try again.");
    }
  }
  function onClick(input2) {
    switch (page) {
      case 0:
        if (input2 === "") {
          alert("Please enter your name.");
          return;
        }
        setStudent((prev) => ({
          ...prev,
          name: input2
        }));
        setQuestion("What is your email?");
        break;
      case 1:
        if (input2 === "") {
          alert("Please enter your email.");
          return;
        }
        setStudent((prev) => ({
          ...prev,
          email: input2
        }));
        setQuestion("Please provide your Google Calendar link.");
        break;
      case 2:
        setCalendarLink(input2);
        setQuestion("When is your bedtime?");
        setType("time");
        break;
      case 3:
        if (input2 === "") {
          alert("Please enter your bedtime.");
          return;
        } else {
          setBedtime(input2);
          createStudent(input2);
        }
        break;
    }
    setPage(page + 1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-10 justify-center h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-bold text-5xl place-self-center", children: [
      " ",
      question,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.tsx",
      lineNumber: 122,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "h-20 text-black font-bold text-5xl place-self-center", type, value: input, onChange: (event) => setInput(event.target.value), onKeyUp: (event) => {
      if (event.key === "Enter") {
        onClick(input);
        setInput("");
      }
    } }, void 0, false, {
      fileName: "app/routes/onboarding.tsx",
      lineNumber: 123,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "place-self-center", children: [
      page !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", onClick: () => {
        switch (page) {
          case 1:
            setQuestion("What is your name?");
            setInput("");
            break;
          case 2:
            setQuestion("What is your email?");
            setInput(student.name);
            setType("text");
            break;
          case 3:
            setInput(student.email);
            break;
          default:
            break;
        }
        setPage(page - 1);
      }, children: "Back " }, void 0, false, {
        fileName: "app/routes/onboarding.tsx",
        lineNumber: 131,
        columnNumber: 36
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", onClick: () => {
        onClick(input);
        setInput("");
      }, children: "Next " }, void 0, false, {
        fileName: "app/routes/onboarding.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.tsx",
      lineNumber: 130,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.tsx",
    lineNumber: 121,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/onboarding.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_s(Onboarding, "3u/na6CvOebqJskoXjYtQfffAus=", false, function() {
  return [useNavigate];
});
_c = Onboarding;
var _c;
$RefreshReg$(_c, "Onboarding");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Onboarding as default,
  links
};
//# sourceMappingURL=/build/routes/onboarding-CPEFUUTD.js.map
