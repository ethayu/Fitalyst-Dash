# Dashboard Extension Frontend

A frontend application built with React and Remix to serve as a dashboard extension for students.

# Table of Contents

- [File Structure](#file-structure)
- [Getting Started](#getting-started)
    - [Clone the repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Build your app for production](#build-your-app-for-production)
    - [Start the development server](#start-the-development-server)
- [Documentation](#documentation)
    - [_index.tsx](#index.tsx)
    - [Onboarding.tsx](#onboarding.tsx)
        - [Student Class Definition](#student-class-definition)
        - [State Variables](#state-variables)
        - [Creation of a New Student](#creation-of-a-new-student)
        - [Handling Page Transitions](#handling-page-transitions)
        - [Rendering the Onboarding UI](#rendering-the-onboarding-ui)
    - [tailwind.css](#tailwind.css)
        - [Tailwind Directives](#tailwind-directives)
        - [Font Face](#font-face)
        - [Custom Utilities](#custom-utilities)


```bash
/dash-extension-main
|-- /app
|   |-- /routes
|   |   |-- _index.tsx            # Main dashboard for students.
|   |   |-- onboarding.tsx        # Onboarding flow for new users.
|   |-- root.tsx                  # Root component.
|   |-- tailwind.css              # TailwindCSS styles.
|
|-- /node_modules                 # Directory containing all the npm packages required for the project.
|-- /public                       # Public assets for the application.
|-- README.md                     # This README file.
|-- manifest.json                 # Manifest for the extension.
|-- package.json & package-lock.json # Node.js specific files for managing dependencies and project settings.
|-- remix.config.js               # Remix framework configuration.
|-- remix.env.d.ts                # Environment type definitions for Remix.
|-- tailwind.config.ts            # Configuration for TailwindCSS.
|-- tsconfig.json                 # TypeScript configuration file.
```

# Getting Started:

### Clone the repository:
```bash
git clone https://github.com/YourRepoURL/dash-extension-main.git
cd dash-extension-main
```
### Install Dependencies:
```bash
npm install
```
### build your app for production:

```sh
npm run build
```

### Start the development server:
```bash
npm run dev
```

# Documentation:

## 1. Onboarding.tsx:
#### 1. Student Class Definition:
Here's the data structure that represents a student.

```tsx
class Student {
    ...
    constructor(_id: string, name: string, email: string, calendarLink: string, originalCalendarLink: string, bedtime: string,emojis: Array<{ emoji: number, timestamp: Date }> = []) {
        this._id =_id;
        this.name = name;
        ...
    }
}
```

This class defines the properties of a student and provides a constructor to initialize a student object.

#### 2. State Variables:
The Onboarding function component utilizes React's useState hooks to maintain state.

```tsx
const [student, setStudent] = useState(new Student("", ""));
const [page, setPage] = useState(0);
...
```
student holds the current student's data.
page keeps track of the current onboarding step.

#### 3. Creation of a New Student:
This function sends a POST request to create a new student on the backend.

```tsx
async function createStudent(bedtimeValue: string) {
    ...
    const response = await fetch(`http://ec2-3-144-236-30.us-east-2.compute.amazonaws.com:3002/students`, {...});
    ...
    localStorage.setItem('studentId', createdStudent._id);
    navigate("/");
}
```

##### How it works:
A fetch request is sent to the server to create a student with the given details.
Once the student is successfully created, their _id is saved to localStorage. This allows for easy retrieval of the student's data in subsequent sessions without having to re-enter the information.
After storing the ID, the user is navigated to the homepage using the navigate function.

#### 4. Handling Page Transitions:
The onClick function dictates the logic when moving between onboarding steps.

```tsx
function onClick(input: any) {
    switch (page) {
        ...
    }
    setPage(page + 1);
}
```
##### How it works:
Based on the current page value (which represents the current onboarding step), the function takes different actions.
It updates the state variables with the information provided by the user.
The setPage(page + 1) ensures that after each step, the next page (or question) is shown to the user.

#### 5. Rendering the Onboarding UI:
The component's return statement renders the onboarding interface.

``` tsx
return (
    <div className="h-screen">
        ...
        <p className="text-white font-bold text-5xl place-self-center"> {question} </p>
        <input ...></input>
        ...
    </div>
)
```
##### How it works:
A question is displayed based on the current onboarding step.
An input field captures the user's response.
"Back" and "Next" buttons allow navigation between the steps. The "Next" button's action is tied to the onClick function, which we discussed earlier.

#### Key Takeaways:
Local Storage: One of the essential aspects of this component is using the browser's localStorage to save the student's _id once they're created. This ensures that the student's data can be accessed in future sessions without re-onboarding.
Page Transitions: The onboarding process is divided into different steps (or pages). The component uses the page state variable to keep track of the current step and uses conditional rendering and logic to display appropriate content based on this.
Student Creation: The createStudent function plays a critical role in sending the collected data to the server, receiving a response (which includes the student's _id), and saving this _id in localStorage for future use.



## 2. _index.tsx:

#### 1. Data Models:

##### Student Model:

``` tsx
class Student {
    _id: string;
    name: string;
    email: string;
    calendarLink: string;
    originalCalendarLink: string;
    bedtime: string;
    emojis: Array<{ emoji: number, timestamp: Date }>;

    constructor(_id: string, name: string, email: string, calendarLink: string, originalCalendarLink: string, bedtime: string, emojis: Array<{ emoji: number, timestamp: Date }> = []) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.calendarLink = calendarLink;
        this.originalCalendarLink = originalCalendarLink;
        this.bedtime = bedtime;
        this.emojis = emojis;
    }
}
```

- This class defines a Student object with properties such as id, name, email, etc. It has a constructor to initialize these properties.

##### Assignment Model:

```tsx
class Assignment {
    _id: string;
    name: string;
    description: string;
    date: Date;

    constructor(_id: string, name: string, description: string, date: Date) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.date = date;
    }
}
``` 
- This class represents Assignment:_id, name, description:, and due date.


#### 2. Fetching Data:
##### Local Storage

The local storage is used to persist the user's data so that it can be retrieved even after page reloads or closing the browser. The following are the main interactions with local storage:
- Storing Data: localStorage.setItem("student", JSON.stringify(studentToUpdate));
After updating the student details, the data is stored in local storage.
- Retrieving Data: const storedStudent = JSON.parse(localStorage.getItem("student") || "")
At the start or on page load, the app tries to fetch the student's data from local storage.

##### Fetch All Students:

```tsx
const fetchStudentData = async () => {
    try {
        const response = await fetch(`${BASE_API_URL}/students`);
        // ... rest of the function
    } catch (error) {
        console.error("Error fetching students:", error);
    }
};
```
- This function retrieves all students' data from the API server and updates the state with the fetched data.


##### Fetch Student's Calendar Data:

``` tsx
const fetchAndParseICS = async (student: Student) => {
    // ... function body
};
```
- This function fetches a specific student's ICS (iCalendar) data, parses it to extract assignments/events, and updates the state with these assignments.


#### 3. User Interactivity:

##### Emote Response:
``` tsx

async function handleClick(emote: number) {
    // ... function body
    switch (emote) {
        case 1: {
            setResponse("That's good to hear!");
            break;
        }
        // ... other cases
    }
}
```
- This function handles the logic when a user clicks on an emote (emoji). It sets a response message based on the chosen emote and updates the server with the selected emote.


##### Updating Student's Data:

```tsx
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ... function body
    try {
        const response = await fetch(`${BASE_API_URL}/students/${currentStudent._id}`, {
            // ... request details
        });
        // ... handle the response
    } catch (error) {
        console.error("Error sending data to server:", error);
    }
}
```
- This function sends an update request to the server with the modified student details when the settings form is submitted.


#### 4. Render Logic:

##### Displaying Assignments:

``` tsx
{assignments.sort((a, b) => a.date.toLocaleString() < b.date.toLocaleString() ? -1 : 1).slice(0, 5).map((assignment) => (
     <AssignmentTile key={assignment._id} {...assignment} />)
)}
```
- This snippet sorts the assignments by their due date and renders the first five assignments using the AssignmentTile component.


##### Settings Modal:

```tsx

{showSettings ? (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            // ... Modal Content
        </div>
    </>
) : null}
```
- This conditional rendering displays the settings modal when showSettings is true.


#### 5. Utility Functions:

##### Countdown Component
This is a React component that displays the time remaining either for bedtime or for the closest assignment due.

```tsx
export function Countdown(props: CountdownProps)  {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    ...
}
```

###### How it works:
 State and Effects: The state variable date stores the current date and time. The useEffect hook sets an interval that updates this date every second, creating a real-time clock.
Bedtime Calculation: This part extracts the hour and minute for bedtime.
```tsx
const [bedHour, bedMinute] = (typeof props.bedtime === "string" ? props.bedtime.split(":") : ["00", "00"]).map(num => parseInt(num));
```
 Assignment Due Time Calculation: If there's an assignment due within 8 hours and more than 3 hours to bedtime, the countdown switches to the assignment's due time.
```tsx
if (props.assignments.length > 0 && distance > 3 * 60 * 60 * 1000 && Math.abs(props.assignments[0].date.getTime() - now) < 8 * 60 * 60 * 1000) {
    var firstAssignment = props.assignments[0].date;
    distance = firstAssignment.getTime() - now;
}
```

Rendering: The component displays the calculated hours, minutes, and seconds.
``` tsx
return (
    <div className="flex flex-col place-self-center place-items-end">
        ...
        <p className="text-white font-bold text-9xl">{hours}</p>
        ...
    </div>
);
```

##### AssignmentTile Component
This component shows details about a single assignment.

``` tsx
export function AssignmentTile(props: Assignment) {
    ...
    return (
        <div className="flex flex-row w-full p-2 overflow-hidden">
            ...
            {props.name}
            ...
            {props.description}
            ...
            {days}d {hours}h
            ...
        </div>
    );
}
```

###### How it works:

Time Calculation: The component calculates the time left until the assignment's due.
``` tsx
var distance = props.date.getTime() - new Date().getTime();
```
Rendering: The component then displays the assignment's name, description, and the time left.

Convert Emote Number to Emoji:
``` tsx
function getEmojiFromNumber(emote: number): string {
    const emojiMap = {
        1: "😃",
        2: "💩",
        3: "😔",
        4: "😡"
    };
    return emojiMap[emote] || "";
}
```

- This function returns the corresponding emoji string for a given emote number.


##### Getting Current Day:

``` tsx
function getCurrentDay(): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date().getDay()];
}
```
- This utility returns the current day's name.


##### Formatting Due Date:

``` tsx

function formatDueDate(date: Date): string {
    // ... function body
}
```
- This function returns a string that describes how much time is left until an assignment's due date.



## tailwind.css

### 1. Tailwind Directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- These are Tailwind CSS's core directives.
  - @tailwind base; imports Tailwind's base styles, which includes a set of CSS reset styles.
  - @tailwind components; imports any component classes you've used from Tailwind.
  - @tailwind utilities; imports utility classes (like mt-4 or text-center), which are the bread and butter of Tailwind.

### 2. Font Face:
``` css
@font-face {
    font-family: "Montserrat";
    src: url("../public/fonts/Montserrat-VariableFont_wght.ttf");
}
```

- This section is defining a custom font face for the application.
  - The font-family is set as "Montserrat".
  - The src URL points to the location of the "Montserrat" font file, which seems to be located in the public/fonts directory of your project.

### 3. Custom Utilities:
``` css
@layer utilities {
  @variants responsive {
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
  }
}
```

- This section defines custom utility classes to extend the default set provided by Tailwind.
  - @layer utilities tells Tailwind that the following styles are utility classes.
  - @variants responsive ensures that these utilities work with responsive design. This would allow you to use them with Tailwind's responsive variants like md:no-scrollbar, though in this case, it might not make much sense.
- .no-scrollbar is a custom utility class to hide the scrollbar.
  - The ::-webkit-scrollbar part targets webkit browsers like Chrome, Safari, and Opera.
  - The -ms-overflow-style and scrollbar-width properties target browsers like IE, Edge, and Firefox.

#### Key Takeaways:
The CSS file primarily integrates Tailwind's utility-first CSS framework.
It introduces a custom font, "Montserrat", for potentially better typography in your app.
There's a custom utility, .no-scrollbar, to hide scrollbars across different browsers.
Using @layer and @variants allows the custom utilities to integrate seamlessly with Tailwind's ecosystem, ensuring they behave just like any other utility class provided by Tailwind.
  


# dash-copy
