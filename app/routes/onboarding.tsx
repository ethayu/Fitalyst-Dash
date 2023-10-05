import type { LinksFunction } from "@remix-run/node";
import { useNavigate } from 'react-router-dom';
import stylesheet from "~/tailwind.css";
import { useState, useEffect } from "react";


export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

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



export default function Onboarding() {
    const navigate = useNavigate();
    const [student, setStudent] = useState(new Student("", ""));
    const [page, setPage] = useState(0);
    const [question, setQuestion] = useState("What is your name?");
    const [input, setInput] = useState("");
    const [type, setType] = useState("text");
    const [calendarLink, setCalendarLink] = useState("");
    const [bedtime, setBedtime] = useState("23:00"); // e.g., 11 PM
    const [emojis, setEmojis] = useState([]);


    


    async function createStudent(bedtimeValue: string) {
        try {
            const response = await fetch(`https://ec2-3-144-236-30.us-east-2.compute.amazonaws.com:3002/students`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: student.name,
                    email: student.email,
                    calendarLink: calendarLink,
                    bedtime: bedtimeValue,
                    emojis: emojis
                }),
            });
    
            if (!response.ok) {
                throw new Error(`Failed to create student: ${response.statusText}`);
            }
    
            const createdStudent = await response.json();
    
            // Store the student's ID in localStorage
            localStorage.setItem('studentId', createdStudent._id);
            
            navigate("/");
        } catch (error) {
            console.error("Error creating student:", error);
            alert("Failed to onboard. Please try again.");
        }
    }
    
    

    function onClick(input: any) {
        switch (page) {
            case 0:
                if (input === "") {
                    alert("Please enter your name.");
                    return;
                }
                setStudent(prev => ({ ...prev, name: input }));
                setQuestion("What is your email?");
                break;
            case 1:
                if (input === "") {
                    alert("Please enter your email.");
                    return;
                }
                setStudent(prev => ({ ...prev, email: input }));
                setQuestion("Please provide your Canvas Calendar link.");
                break;
            case 2:
                setCalendarLink(input);
                setQuestion("When is your bedtime?");
                setType("time");
                break;
            case 3:
                if (input === "") {
                    alert("Please enter your bedtime.");
                    return;
                } else {
                    setBedtime(input);
                    createStudent(input);  // Directly call the createStudent function here.
                }
                break;
        }
    
        setPage(page + 1);
    }
    

    return (
        <div className="h-screen">
            <div className="flex flex-col space-y-10 justify-center h-full">
                <p className="text-white font-bold text-5xl place-self-center"> {question} </p>
                <input 
                    className="h-20 text-black font-bold text-5xl place-self-center" 
                    type={type} 
                    value={input} 
                    onChange={(event) => setInput(event.target.value)} 
                    onKeyUp={event => {
                        if (event.key === 'Enter') {
                            onClick(input);
                            setInput("");
                        }
                    }}
                ></input>
                <div className="place-self-center">
                    {page !== 0 && <button 
                        className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                        onClick={() => {
                            switch (page) {
                                case 1:
                                    setQuestion("What is your name?");
                                    setInput("");
                                    break;
                                case 2:
                                    setQuestion("What is your email?");
                                    setInput(student.name);
                                    setType("text")
                                    break;
                                case 3:
                                    setInput(student.email);
                                    break;
                                default:
                                    break;
                            }
                            setPage(page - 1);
                        }}
                    > Back </button>}
                    <button 
                        className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                        onClick={() => { onClick(input); setInput("") }}
                    > Next </button>
                </div>
            </div>
        </div>
    )
}

