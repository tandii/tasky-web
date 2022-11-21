import { useState } from 'react';

import { CalendarBlank, Check, Clock, Pencil, Star, Tag, Trash } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';

import DayJs from 'dayjs'

import { api } from '../services/api';

export function TaskCard(props) {
    const [complete, setComplete] = useState(props.completed)
    const [favorite, setFavorite] = useState(props.favorite)

    async function handleTaskFavorite(id) {
        setFavorite(!favorite)

        await api.put(`/tasks/favorite/${id}`, {
            favorite: !favorite
        })
    }

    async function handleTaskComplete(id) {
        await api.put(`/tasks/completed/${id}`, {
            completed: !complete
        })
    }

    // async function handleTaskDelete(id) {
    //     // const response = confirm('Do you want to delete the task?')

    //     // if(response) {
    //     //     await api.delete(`/tasks/${id}`)
    //     // }

    //     console.log(id)
    // }

    return (
        <div className='flex items-center gap-10 ml-16 mb-10'>
            <div className='flex items-center justify-between w-[1100px] h-16 border-b-2 border-b-gray-200 pl-6 pr-8'>
                <div className='flex items-center gap-8'>
                    <Checkbox.Root
                        checked={complete}
                        onCheckedChange={(checked => {
                            if (checked === true) {
                                setComplete(true)
                            } else {
                                setComplete(false)
                            }
                        })}
                        onClick={() => handleTaskComplete(props.id)}
                        className={complete === true ? 'w-7 h-7 p-[2px] rounded border-2 border-green-400' : 'w-7 h-7 p-[2px] rounded border-2 border-gray-200'}
                    >
                        <Checkbox.Indicator asChild>
                            <Check weight='bold' className='h-5 w-5 text-green-700' />
                        </Checkbox.Indicator>
                    </Checkbox.Root>

                    <div className='flex flex-col gap-2'>
                        <span>{props.body}</span>

                        <div className='flex items-center  gap-3'>
                            <div className='flex items-center gap-1 text-xs'>
                                <Clock width={16} height={16} />
                                {props.hour}
                            </div>

                            {props.tag &&
                                <div className='flex items-center gap-1 text-xs'>
                                    <Tag width={16} height={16} />
                                    {props.tag.name}
                                </div>
                            }

                            <div className='flex items-center gap-1 text-xs'>
                                <CalendarBlank width={16} height={16} />
                                {DayJs(props.day).format('DD/MM/YYYY')}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleTaskFavorite(props.id)}>
                    {favorite === true ?
                        <Star width={24} height={24} weight='fill' className='text-green-400' />
                        :
                        <Star width={24} height={24} />
                    }
                </button>

            </div>

            <div className='flex gap-10'>
                <Pencil width={24} height={24} />

                <button onClick={() => props.handleTaskDelete(props.id)}>
                    <Trash width={24} height={24} className='text-red-700' />
                </button>
            </div>

        </div>
    )
}