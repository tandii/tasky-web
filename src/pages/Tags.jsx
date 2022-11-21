import { useEffect } from 'react'
import { useState } from 'react'
import { Header } from '../components/Header'
import { TagCard } from '../components/TagCard'
import { api } from '../services/api'

export function Tags() {
    const [tags, setTags] = useState([])
    const [tagNameUpdate, setTagNameUpdate] = useState('')

    async function fetchTags() {
        const response = await api.get('/tags')
        // console.log(response.data)
        setTags(response.data)
    }

    console.log(tagNameUpdate)

    async function handleUpdateTag(newTagName, tagId) {
        const tag = tags.filter(tag => tag.name === newTagName)

        if (tag.length > 0) {
            return alert('This tag already exists.')
        }

        const index = tags.findIndex(tag => tag._id === tagId)
        const newTags = tags.slice()
        newTags[index].name = newTagName
        setTags(newTags)

        try {
            await api.put(`/tags/${tagId}`, {
                name: newTagName
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDeleteTag(tagId) {
        const response = confirm('Do you want to delete the tag?')

        if (response) {
            const index = tags.findIndex(tag => tag._id === tagId)
            const newTags = tags.slice()
            newTags.splice(index, 1)
            setTags(newTags)

            try {
                await api.delete(`/tags/${tagId}`)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchTags()
    }, [])

    return (
        <>
            <Header />

            <div className='w-[520px] pl-11 pt-8 flex min-h-[520px] mx-auto my-8 border border-gray-200 rounded'>
                <div>
                    <p className='font-semibold mb-3'>
                        Current tags
                    </p>

                    {
                        tags.map(tag => (
                            <TagCard
                                key={tag._id}
                                id={tag._id}
                                name={tag.name}
                                setTagNameUpdate={setTagNameUpdate}
                                tagNameUpdate={tagNameUpdate}
                                handleUpdateTag={handleUpdateTag}
                                handleDeleteTag={handleDeleteTag}
                            />
                        ))
                    }
                </div>

                <div className='mx-auto mt-4'>
                    <button className='px-6 py-2 bg-green-400 rounded hover:bg-green-500 font-semibold text-sm' >
                        Create
                    </button>
                </div>
            </div>
        </>
    )
}