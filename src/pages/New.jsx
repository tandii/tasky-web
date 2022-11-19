import { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Select } from "../components/Select";

import { RadioGroup } from "../components/RadioGroup";


export function New() {
    const [tagName, setTagName] = useState('None')
    const [time, setTime] = useState('')
    const [day, setDay] = useState('')
    const [sendEmail, setSendEmail] = useState(false)
    const [emailSubject, setEmailSubject] = useState('')
    const [EmailMessage, setEmailMessage] = useState('')

    // dayjs(new Date()).format('HH:mm')

    // console.log(time)
    // console.log(day)
    // console.log(sendEmail)
    // console.log(emailSubject)
    // console.log(EmailMessage)

    return (
        <div>
            <Header />
            <div className="flex flex-col mx-40 gap-2 mt-8">
                <span className="font-semibold">
                    Create your task
                </span>

                <textarea
                    placeholder="Today I've going to fun..."
                    className="max-w-[1120px] h-52 bg-gray-100 text-gray-700 text-sm px-6 py-3 focus:outline-none resize-none rounded"
                    name="text" id="" cols="30" rows="10"
                />
            </div>

            <div className="flex">
                <div>
                    <div className="flex flex-col ml-40 gap-2 mt-8">
                        <span className="font-semibold">
                            Add a tag
                        </span>

                        <div className="flex items-center gap-2">
                            <Select
                                tagName={tagName}
                                setTagName={setTagName}
                            />

                            <Link to=''>
                                <span className="text-xs underline text-gray-700">
                                    create a tag
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col ml-40 gap-2 mt-8">
                            <span className="font-semibold">
                                Time
                            </span>

                            <div>
                                <input
                                    className="p-2 bg-gray-100 text-sm  text-gray-700 rounded"
                                    type="time"
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col ml-4 gap-2 mt-8">
                            <span className="font-semibold">
                                Day
                            </span>

                            <div>
                                <input
                                    className="p-2 bg-gray-100 text-sm  text-gray-700 rounded"
                                    type="date"
                                    value={day}
                                    onChange={e => setDay(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col ml-40 gap-2 mt-8">
                    <span className="font-semibold">
                        Want to add an email reminder?
                    </span>

                    <div>
                        <RadioGroup
                            sendEmail={sendEmail}
                            setSendEmail={setSendEmail}
                        />
                    </div>

                    {sendEmail === true &&
                        <div className="flex flex-col mt-4">
                            <span className="font-semibold">
                                Customize your email
                            </span>

                            <span className="text-sm font-medium mt-3">
                                Subject
                            </span>

                            <input
                                placeholder="Walk in the park :D"
                                className="w-[520px] text-sm text-gray-700 px-3 py-2 mt-2 bg-gray-100 rounded focus:outline-none"
                                type="text"
                                value={emailSubject}
                                onChange={e => setEmailSubject(e.target.value)}
                            />

                            <span className="text-sm font-medium mt-3">
                                Message
                            </span>

                            <textarea
                                placeholder="Walking in the park this afternoon with my friends..."
                                className="h-36 bg-gray-100 mt-2 text-gray-700 text-sm px-3 py-2 focus:outline-none resize-none rounded"
                                name="text" id="" cols="30" rows="10"
                                value={EmailMessage}
                                onChange={e => setEmailMessage(e.target.value)}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}