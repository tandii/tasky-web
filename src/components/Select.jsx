import * as SelectPrimitive from '@radix-ui/react-select';
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../services/api";

export function Select(props) {
    const [tags, setTags] = useState([])

    async function fetchTag() {
        const response = await api.get('/tags')
        // console.log(response.data)
        setTags(response.data)
    }
    
    useEffect(() => {
        fetchTag()
    }, [])

    console.log(props.tagId)

    return (
        <SelectPrimitive.Root defaultValue={props.tagId !== 'None' ? props.tagId : 'None'} value={props.tagId} onValueChange={props.setTagId}>
            <SelectPrimitive.Trigger
                aria-label={props.tagId}
                className='w-40 px-3 py-1 rounded flex items-center bg-gray-100 justify-between'
            >
                <SelectPrimitive.Value>
                    <span className="text-sm text-gray-700">
                        {props.tagId !== 'None' ? tags.filter(tag => tag._id === props.tagId)[0].name : 'None'}
                    </span>
                </SelectPrimitive.Value>
                <SelectPrimitive.Icon>
                    <CaretDown />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content>
                    <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700">
                        <CaretUp />
                    </SelectPrimitive.ScrollUpButton>
                    <SelectPrimitive.Viewport className="bg-white p-2 rounded-lg shadow-lg">
                        <SelectPrimitive.Group>
                            <SelectPrimitive.Item
                                value='None'
                                className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100"
                            >
                                <SelectPrimitive.ItemText >
                                    None
                                </SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                    <Check />
                                </SelectPrimitive.ItemIndicator>
                            </SelectPrimitive.Item>
                            {tags.map(tag => (
                                <SelectPrimitive.Item
                                    key={tag._id}
                                    value={tag._id}
                                    className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100"
                                >
                                    <SelectPrimitive.ItemText>
                                        {tag.name}
                                    </SelectPrimitive.ItemText>
                                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                        <Check />
                                    </SelectPrimitive.ItemIndicator>
                                </SelectPrimitive.Item>
                            ))}
                        </SelectPrimitive.Group>
                    </SelectPrimitive.Viewport>
                    <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700">
                        <CaretDown />
                    </SelectPrimitive.ScrollDownButton>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}