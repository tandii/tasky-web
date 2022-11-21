import { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Select } from "../components/Select";

import { RadioGroup } from "../components/RadioGroup";
import dayjs from "dayjs";
import { api } from "../services/api";


export function New() {
    const [tag, setTag] = useState('None')
    const [taskBody, setTaskBody] = useState('')
    const [hour, setHour] = useState('')
    const [day, setDay] = useState('')
    const [sendEmail, setSendEmail] = useState(false)
    const [emailSubject, setEmailSubject] = useState('')
    const [emailMessage, setEmailMessage] = useState('')

    // dayjs(new Date()).format('HH:mm')    
    // console.log(dayjs(new Date()).format('HH:mm'))

    // console.log(tagName)
    // console.log(tag)


    async function handleCreateTask(event) {
        event.preventDefault()

        try {
            await api.post('/tasks', {
                body: taskBody,
                hour,
                day,
                sendEmail,
                emailSubject,
                emailMessage,
                tag: tag === 'None' ? null : tag
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Header />

            <form onSubmit={handleCreateTask}>
                <div className="flex flex-col mx-40 gap-2 mt-6">
                    <span className="font-semibold">
                        Create your task
                    </span>

                    <textarea
                        placeholder="Today I've going to fun..."
                        required
                        className="max-w-[1120px] h-52 bg-gray-100 text-gray-700 text-sm px-6 py-3 focus:outline-none resize-none rounded"
                        name="text" id="" cols="30" rows="10"
                        value={taskBody}
                        onChange={e => setTaskBody(e.target.value)}
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
                                    // tagName={tagName}
                                    // setTagName={setTagName}
                                    
                                    tagId={tag}
                                    setTagId={setTag}
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
                                        min={day === dayjs(new Date()).format('YYYY-MM-DD') ? dayjs(new Date()).format('HH:mm') : ''}
                                        required
                                        value={hour}
                                        onChange={e => setHour(e.target.value)}
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
                                        required
                                        min={dayjs(new Date()).format('YYYY-MM-DD')}
                                        value={day}
                                        onChange={e => setDay(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="flex mt-40 ml-40 gap-8">
                            <Link to='/home' className="px-6 py-2 bg-gray-100 rounded hover:bg-gray-200 font-semibold text-sm">
                                Cancel
                            </Link>

                            <button type="submit" className="px-6 py-2 bg-green-400 rounded hover:bg-green-500 font-semibold text-sm">
                                Create
                            </button>
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
                                    required
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
                                    required
                                    value={emailMessage}
                                    onChange={e => setEmailMessage(e.target.value)}
                                />
                            </div>
                        }
                    </div>
                </div>
            </form>
        </>
    )
}