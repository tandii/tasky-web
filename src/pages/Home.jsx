import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Header } from "../components/Header"
import { TaskCard } from "../components/TaskCard"

import { api } from "../services/api"

export function Home() {
    const [tasks, setTasks] = useState([])

    async function fetchTasks() {
        try {
            const response = await api.get('/tasks')
            setTasks(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [tasks])


    return (
        <>
            <Header />

            <div className="flex items-center justify-between mt-6 mb-10 px-16">
                <div className="flex gap-7">
                    <button className="bg-green-400 rounded px-2 py-1">
                        All Tasks
                    </button>

                    <button className="bg-green-400 rounded px-2 py-1">
                        Favorites
                    </button>
                </div>

                <div className="flex gap-6">
                    <span>
                        Yesterday
                    </span>
                    <span className="border-b-2 border-gray-700">
                        Today
                    </span>
                    <span>
                        Tomorrow
                    </span>
                </div>

                <div className="flex gap-7">
                    <Link to='/new' className="bg-green-400 rounded px-2 py-1">
                        + Task
                    </Link>

                    <button className="bg-green-400 rounded px-2 py-1">
                        + Tag
                    </button>
                </div>
            </div>


            {
                tasks.map(task => (
                    <TaskCard
                        key={task._id}
                        id={task._id}
                        body={task.body}
                        day={task.day}
                        time={task.time}
                        completed={task.completed}
                        favorite={task.favorite}
                        tag={task.tag}
                    />
                ))
            }
        </>
    )
}