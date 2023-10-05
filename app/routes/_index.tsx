import { useState, useEffect, useRef } from "react";
import type { LinksFunction } from "@remix-run/node";
import { useNavigate } from 'react-router-dom';
import stylesheet from "~/tailwind.css";
import * as ICAL from 'ical.js';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

const BASE_API_URL = "http://ec2-3-144-236-30.us-east-2.compute.amazonaws.com:3002";

class Student {
    _id: string;
    name: string;
    email: string;
    calendarLink: string;
    originalCalendarLink: string;
    bedtime: string;
    emojis: Array<{ emoji: number, timestamp: Date }>;

    constructor(_id: string, name: string, email: string, calendarLink: string, originalCalendarLink: string, bedtime: string,emojis: Array<{ emoji: number, timestamp: Date }> = []) {
        this._id =_id;
        this.name = name;
        this.email = email;
        this.calendarLink = calendarLink;
        this.originalCalendarLink = originalCalendarLink;
        this.bedtime = bedtime;
        this.emojis = emojis;
    }
}

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

export default function Dash() {
    const bottomRef = useRef<null | HTMLDivElement>(null);
    const navigate = useNavigate();
    const [showSettings, setShowSettings] = useState(false);
    const [showEmotes, setShowEmotes] = useState(true);
    const [response, setResponse] = useState("");
    const [signedIn, setSignedIn] = useState(false);
    const [assignments, setAssignments] = useState<Array<Assignment>>([]);
    const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
    const [bedtime, setBedtime] = useState(currentStudent?.bedtime || "");
    const [name, setName] = useState(currentStudent?.name || "");
    const [calendarLink, setCalendarLink] = useState(currentStudent?.calendarLink || "");
    const [originalCalendarLink, setOriginalCalendarLink] = useState(currentStudent?.originalCalendarLink || "");
    const [email, setEmail] = useState(currentStudent?.email || "");
    const storedStudentId = typeof window !== 'undefined' ? localStorage.getItem('studentId') : null;

    function isSignedIn() {
        return true; // This should ideally be a check if a user is logged in or not.
    }

    const [students, setStudents] = useState<Array<Student>>([]);

    const fetchStudentData = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/students`);
            if (response.ok) {
                const studentsData = await response.json();
                const studentsList = studentsData.map((student: any) => 
                    new Student(student._id, student.name, student.email, student.calendarLink,student.originalCalendarLink, student.bedtime, student.emojis)
            );

            setStudents(studentsList);
    
            // Retrieve the studentId from local storage
            const storedStudentId = localStorage.getItem('studentId');
    
            // Find the student with the stored ID
            const currentStudentFromStorage = studentsList.find(student => student._id === '651e54cab928f5556958a14d');
    
            if (currentStudentFromStorage && currentStudentFromStorage.calendarLink) {
                    setCurrentStudent(currentStudentFromStorage);
                    setBedtime(currentStudentFromStorage.bedtime);          // Set bedtime state
                    setOriginalCalendarLink(currentStudentFromStorage.originalCalendarLink);  // Set originalCalendarLink state
                    fetchAndParseICS(currentStudentFromStorage);
            } 
        } else {
                console.error("Failed to fetch students:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };
    


    

    const fetchAndParseICS = async (student: Student) => {
        if (!student || !student._id) {
            console.error("Student or student ID is missing.");
            return;
        }
        try {
            const proxyURL = `${BASE_API_URL}/api/calendar/${student._id}`;
            const response = await fetch(proxyURL);
            if (response.ok) {
                const data = await response.text();
                const jcalData = ICAL.parse(data);
                const comp = new ICAL.Component(jcalData);
                const vevents = comp.getAllSubcomponents("vevent");
                const parsedEvents = vevents.map((vevent: any) => new ICAL.Event(vevent));
                const assignmentsList = parsedEvents.map((event: any) =>  
                    new Assignment(event.uid, event.summary, event.description, event.startDate.toJSDate())
                );
                setAssignments(assignmentsList);
            } else {
                console.error("Failed to fetch ICS:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error fetching and parsing ICS:", error);
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        if (!isSignedIn()) {
            navigate("/onboarding");
        }
        if (storedStudentId) {
            fetchStudentDataById(storedStudentId);
        } else {
            fetchStudentData();
        }
    }, []);

    

    useEffect(() => {
        setName(currentStudent?.name || "");
        setCalendarLink(currentStudent?.calendarLink || "");
        setEmail(currentStudent?.email || "");
        setBedtime(currentStudent?.bedtime || "");
    }, [currentStudent]);

    useEffect(() => {
        if (currentStudent && currentStudent._id) {
            localStorage.setItem('studentId', currentStudent._id);
        }
    }, [currentStudent]);

    const fetchStudentDataById = async (_id: string) => {
        if (!_id) {
            console.error("Student ID is not provided.");
            return;
        }
        try {
            const response = await fetch(`${BASE_API_URL}/students/${_id}`);
            if (response.ok) {
                const studentData = await response.json();
                if (studentData) {
                    const student = new Student(studentData._id, studentData.name, studentData.email, studentData.calendarLink, studentData.originalCalendarLink,studentData.bedtime, studentData.emojis);
                    setCurrentStudent(student);
                    setBedtime(student.bedtime);
                    setOriginalCalendarLink(student.originalCalendarLink);
                    fetchAndParseICS(student); // directly pass the student object to fetch and parse its calendar data
                } else {
                    console.error("Student with ID not found:", _id);
                    fetchStudentData(); // If specific student not found, fetch all students and default to the first
                }
            } else {
                console.error("Error fetching student by ID:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching student by ID:", error);
        }
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        


        const obj = {
            name: name,
            originalCalendarLink: originalCalendarLink,
            calendarLink: calendarLink,
            email: email,
            bedtime: bedtime
        };
        
        console.log("Form Data:", obj);
        console.log(obj.bedtime, typeof obj.bedtime);  

        if (!currentStudent || !currentStudent._id) {
            console.error("Current student or student ID is missing.");
            return;
        }

    
        try {
            const response = await fetch(`${BASE_API_URL}/students/${currentStudent._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });

            if (response.ok) {
                console.log("Student data updated successfully.");
                setCurrentStudent(prevState => ({ ...prevState!, ...obj }));
                setBedtime(obj.bedtime);

                setStudents(prevStudents => {
                    const updatedStudents = [...prevStudents];
                    const studentIndex = updatedStudents.findIndex(stud => stud._id === currentStudent._id);
                    if (studentIndex !== -1) {
                        updatedStudents[studentIndex] = { ...updatedStudents[studentIndex], ...obj };
                    }
                    return updatedStudents;
                });

                setShowSettings(false);
    
            } else {
                console.error("Error updating student data:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending data to server:", error);
        }
    }
    function handleOriginalCalendarLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
        setOriginalCalendarLink(e.target.value);
    }
    
    async function handleClick(emote: number) {
        if (!currentStudent || !currentStudent._id) {
            console.error("Current student or student ID is missing.");
            return;
        }

        document.body.style.overflow = "auto";
        setShowEmotes(false);
        switch (emote) {
            case 1: {
                setResponse("That's good to hear!");
                break;
            }
            case 2: {
                setResponse("Hope you feel better!");
                break;
            }
            case 3:{
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
        // Store the emote with the current timestamp
        const emojiEvent = { emoji: emote, timestamp: new Date() };
        try {
            const studentId = currentStudent?._id;

            if (!studentId) {
                console.error("Student ID is not available.");
                return;
            }

            const response = await fetch(`${BASE_API_URL}/students/${studentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ emojiEvent })
            });
    
            if (!response.ok) {
                console.error("Error updating emote:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending emote to server:", error);
        }
    }

    function scrollDown() {
        var startY = 0;
        var stopY = bottomRef.current!.offsetTop;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        return false;
    }

    function scrollUp() {
        var stopY = 0;
        var startY = bottomRef.current!.offsetTop;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        return false;
    }

    return (
        <div className="scroll-smooth">
            <div className="h-[100vh]">
                <div className="flex flex-col space-y-10 justify-center h-full">
                    <div className="flex flex-row place-self-center">
                        <img src="icons/Carrot_GreenHalo.svg" className="place-self-center bg-contain w-96 h-96"></img>
                        <Countdown assignments={assignments} bedtime={bedtime}/>
                    </div>
                    <p className="text-white font-bold text-5xl place-self-center">{`Hey ${currentStudent?.name || 'there'}, it's ${getCurrentDay()}.`}</p>
                    {showEmotes ? (
                        <>
                            <div className="flex flex-col place-self-center space-y-2">
                                <p className="text-white font-medium text-3xl place-self-center">How are you feeling today?</p>
                                <div className="flex flex-row place-self-center space-x-2">
                                    <button className="text-5xl" onClick={() => handleClick(1)}>😃</button>
                                    <button className="text-5xl" onClick={() => handleClick(2)}>💩</button>
                                    <button className="text-5xl" onClick={() => handleClick(3)}>😔</button>
                                    <button className="text-5xl" onClick={() => handleClick(4)}>😡</button>
                                </div>
                            </div>
                        </>) : (
                        <>
                            <div className="flex flex-col place-self-center space-y-2">
                                <p className="text-white font-medium text-3xl place-self-center">{response}</p>
                                <p className="text-white font-medium text-3xl place-self-center">Your halo is red because you have 5 assignments coming up:</p>
                            </div>
                            <img src="icons/down-arrow.svg" className="place-self-center bg-contain absolute bottom-5 animate-bounce cursor-pointer" onClick={() => scrollDown()}></img>
                        </>
                    )}
                </div>
                <button className="fixed bottom-4 left-4">
                    <img src="icons/settings.svg" onClick={() => setShowSettings(true)}></img>
                </button>
                {showSettings ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="bg-gradient-to-tr from-fitalyst-green to-fitalyst-orange border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between pl-5 pr-5 pt-5 border-solid border-white rounded-t">
                                        <p className="text-3xl text-white font-bold">
                                            Settings
                                        </p>
                                    </div>
                                    {/*body*/}
                                    <form method="post" encType="multipart/form-data" action="# " onSubmit={handleSubmit} className="relative p-6 grid grid-cols-2 grid-flow-row justify-evenly gap-4">
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-fitalyst-orange font-bold text-2xl">Name</p>
                                            <input type="text" name="name" className="bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue= {currentStudent?.name} required></input>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-fitalyst-green font-bold text-2xl">Bedtime</p>
                                            <input type="time" name="bedtime" onChange={(e) => setBedtime(e.target.value)} value={bedtime} className="bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-fitalyst-orange font-bold text-2xl">Calendar Link</p>
                                            <input type="text" name="originalCalendarLink" className="bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={originalCalendarLink}  onChange={handleOriginalCalendarLinkChange} required></input>
                                        </div>


                                        <div className="flex flex-col space-y-2">
                                            <p className="text-fitalyst-green font-bold text-2xl">Email</p>
                                            <input type="email" name="email" className="bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={currentStudent?.email} required></input>
                                        </div>
                                        {/* <div className="flex flex-col space-y-2">
                                            <p className="text-fitalyst-orange font-bold text-2xl">Graduation</p>
                                            <input type="number" className="bg-fitalyst-light-blue border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue="2025" required></input>
                                        </div> */}
                                        <div className="flex items-center justify-end p-6 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowSettings(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                                onClick={() => setShowSettings(false)}
                                            >
                                                Save Changes
                                            </button>
                                        </div>

                                        {currentStudent?.name == null && <button
                                                className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                                onClick={() => navigate("/onboarding")}
                                            >
                                               Onboard
                                            </button>}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <div className="flex flex-col w-full h-[100vh]" ref={bottomRef}>
                <img src="icons/up-arrow.svg" className="bg-contain place-self-center animate-bounce cursor-pointer p-8" onClick={() => scrollUp()}></img>
                <div className="flex flex-col justify-center gap-0">
                {assignments.sort((a, b) => a.date.toLocaleString() < b.date.toLocaleString() ? -1 : 1).slice(0, 5).map((assignment) => (
                     <AssignmentTile key={assignment._id} {...assignment} />)
                 )}
                </div>
            </div>
        </div>
    );
    
}

interface CountdownProps {
    assignments: Array<Assignment>;
    bedtime: string;
}

export function Countdown(props: CountdownProps)  {
    const [date, setDate] = useState(new Date());
    


    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    var countDownDate = new Date(date);
    //const [bedHour, bedMinute] = props.bedtime.split(":").map(num => parseInt(num));
    const [bedHour, bedMinute] = (typeof props.bedtime === "string" ? props.bedtime.split(":") : ["00", "00"]).map(num => parseInt(num));

    var countDownTime = countDownDate.setHours(bedHour, bedMinute, 0, 0);

    var now = date.getTime();
    var distance = countDownTime - now;

    if (props.assignments.length > 0 && distance > 3 * 60 * 60 * 1000 && Math.abs(props.assignments[0].date.getTime() - now) < 8 * 60 * 60 * 1000) {
        var firstAssignment = props.assignments[0].date;
        distance = firstAssignment.getTime() - now;
    }

    if (distance < -4 * 60 * 60 * 1000) distance += 24 * 60 * 60 * 1000;
    if (distance < 0) {
        var text = 'past';
        distance *= -1;
    } else {
        var text = "'til";
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) < 10 ?
        '0' + Math.floor(distance / (1000 * 60 * 60 * 24)) : Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ?
        '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 10 ?
        '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000) < 10 ?
        '0' + Math.floor((distance % (1000 * 60)) / 1000) : Math.floor((distance % (1000 * 60)) / 1000);

    return (
        <div className="flex flex-col place-self-center place-items-end">
            {days == 0 && <div className="grid grid-cols-3">
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{hours}</p>
                    <p className="text-white font-light text-6xl">h</p>
                </div>
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{minutes}</p>
                    <p className="text-white font-light text-6xl">m</p>
                </div>
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{seconds}</p>
                    <p className="text-white font-light text-6xl">s</p>
                </div>
            </div>}
            {days != 0 && <div className="grid grid-cols-4">
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{days}</p>
                    <p className="text-white font-light text-6xl">d</p>
                </div>
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{hours}</p>
                    <p className="text-white font-light text-6xl">h</p>
                </div>
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{minutes}</p>
                    <p className="text-white font-light text-6xl">m</p>
                </div>
                <div className="flex flex-row px-2 place-items-end">
                    <p className="text-white font-bold text-9xl tabular-nums">{seconds}</p>
                    <p className="text-white font-light text-6xl">s</p>
                </div>
            </div>}
            <p className="text-white font-bold text-5xl underline">{text} 😴</p>
        </div>
    );
}

export function AssignmentTile(props: Assignment) {

    var distance = props.date.getTime() - new Date().getTime();
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) < 10 ?
        '0' + Math.floor(distance / (1000 * 60 * 60 * 24)) : Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ?
        '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return (
        <div className="flex flex-row w-full p-2 overflow-hidden">
            <div className="flex-none w-1/6 h-40 border-4 rounded-l-xl text-white font-medium text-xl text-center flex items-center justify-center overflow-hidden">
                {props.name}
            </div>
            <div className="grow h-40 border-t-4 border-b-4 text-white font-medium text-2xl underline text-center flex items-center justify-center overflow-hidden">
                {props.description}
            </div>
            <div className="flex-none w-1/6 h-40 border-4 rounded-r-2xl text-white font-medium text-2xl text-center flex items-center justify-center overflow-hidden">
                {days}d {hours}h
            </div>
        </div>
    );
}

function getEmojiFromNumber(emote: number): string {
    const emojiMap = {
        1: "😃",
        2: "💩",
        3: "😔",
        4: "😡"
    };
    return emojiMap[emote] || ""; // returns the corresponding emoji or an empty string if not found
}

function getCurrentDay(): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date().getDay()];
}

function formatDueDate(date: Date): string {
    const now = new Date();
    const diffTime = Math.abs(date.getTime() - now.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    return `Due in ${diffDays} days and ${diffHours} hours`;
}

function extractAndFormatLinks(description: string): JSX.Element {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(description)) !== null) {
        parts.push(description.slice(lastIndex, match.index));
        parts.push(<a href={match[2]} target="_blank" rel="noopener noreferrer">{match[1] || 'Link'}</a>);
        lastIndex = linkRegex.lastIndex;
    }
    parts.push(description.slice(lastIndex));

    return <>{parts}</>;
}
