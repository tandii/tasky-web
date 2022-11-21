import { Check, Pencil, Trash, X } from "phosphor-react";
import { useState } from "react";

export function TagCard(props) {
    const [isEdit, setIsEdit] = useState('')
    const [tagNameUpdate, setTagNameUpdate] = useState(props.name)

    // console.log(tagNameUpdate)
    console.log(isEdit)

    function cancelEdit() {
        setIsEdit('')
        setTagNameUpdate(props.name)
    }



    return (
        <>
            {
                props.id === isEdit ?
                    <div className="flex mb-3">
                        <div className="w-40 border-b border-gray-200">
                            <input
                                className="w-40 text-sm focus:outline-none px-3 text-gray-700 bg-gray-100"
                                type="text"
                                value={tagNameUpdate}
                                onChange={e => setTagNameUpdate(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => cancelEdit()}
                            className="ml-3 border border-gray-700 rounded px-1"
                        >
                            <X  width={20} height={20} weight='light' />
                        </button>
                        {
                            props.name !== tagNameUpdate ?
                                <button
                                    onClick={() => props.handleUpdateTag(tagNameUpdate, props.id)}
                                    className="ml-3 border border-green-700 rounded px-1"
                                >
                                    <Check className="text-green-700" width={20} height={20} weight='light' />
                                </button>
                                :
                                <button
                                    className="ml-3 border border-gray-700 rounded px-1"
                                >
                                    <Check width={20} height={20} weight='light' />
                                </button>   
                        }
                    </div>

                    :

                    <div className="flex mb-3">
                        <div className="w-40 border-b border-gray-200">
                            <span className="text-sm text-gray-800">
                                {props.name}
                            </span>

                        </div>
                        <button
                            onClick={() => setIsEdit(props.id)}
                            className="ml-5"
                            >
                            <Pencil width={20} height={20} weight='light' />
                        </button>

                        <button className="ml-3"
                            onClick={() => props.handleDeleteTag(props.id)}
                        >
                            <Trash className='text-red-700' width={20} height={20} weight='light' />
                        </button>
                    </div>
            }
        </>
    )
}