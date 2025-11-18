'use client'
import api from '@/lib/axios'
import React, { useEffect, useState } from 'react'

interface DataTodoTypes {
    id: number;
    title: string;
    body: string;
    userId: number;
}

function TodoList() {

    const [input, setInput] = useState('')
    const [inputEdit, setInputEdit] = useState('')
    const [search, setSearch] = useState('')
    const [dataTodo, setDataTodo] = useState<DataTodoTypes[]>([])
    const [editDataTodo, setEditDataTodo] = useState<DataTodoTypes | undefined>()

    const handleFetchData = async () => {
        const response = await api.get('/posts')
        setDataTodo(response?.data || [])
    }

    useEffect(() => {
        handleFetchData()
    }, [])

    useEffect(() => {
        const storedData = localStorage.getItem('dataTodo')
        if (storedData) {
            setDataTodo(JSON.parse(storedData))
        }
    }, [])

    const handleEditDataTodo = async () => {
        if (inputEdit.length > 0) {
            const response = await api.put(`/posts/${editDataTodo?.id}`, {
                ...editDataTodo,
                title: inputEdit,
                body: inputEdit,
                userId: 1,
            })
            if (response.status < 400) {
                alert('Data berhasil di edit')
                setEditDataTodo(undefined)
                handleFetchData()
            } else {
                alert('Data gagal di simpan')
            }
        } else {
            alert('Masukkan Edit Todo Terlebih Dahulu')
        }
    }

    const addDataTodo = async () => {
        if (input.length > 0) {
            const response = await api.post('/posts', {
                title: input,
                body: input,
                userId: 1
            })
            if (response.status < 400) {
                alert('Data berhasil di simpan')
                handleFetchData()
            } else {
                alert('Data gagal di simpan')
            }
        } else {
            alert('Masukkan Todo Terlebih Dahulu')
        }
    }

    const removeDataTodo = async (id: number) => {
        const response = await api.delete(`posts/${id}`)
        if (response.status < 400) {
            alert('Data Berhasil di hapus')
            handleFetchData()
        } else {
            alert('Data Gagal di hapus')
        }
    }

    const filteredData = dataTodo.filter((value) =>
        value.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='w-1/2 m-auto p-[64px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[56px] font-[600]'>Todo List</h1>
                <div className='flex justify-center items-center 
                bg-[#F2F3FF] w-[56px] h-[56px] rounded-lg'>
                    🚀
                </div>
            </div>
            <p>Notes:</p>
            <div>
                <div className='h-[1px] bg-[#EBEBEB] mb-[21px] mt-[32px]' />
                <div className='flex items-center gap-2 mb-[19px]'>
                    <div className='flex-1'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='w-full border border-[#E4E4E4] 
                    rounded-lg py-[8px] px-[16px]'
                            placeholder='Masukkan Todo'
                        />
                    </div>
                    <button className='bg-[#503E9D] text-white
            h-[40px] w-[114px] px-[16px] rounded-lg text-center'
                        onClick={addDataTodo}>
                        Simpan
                    </button>
                </div>
                {editDataTodo?.title && (
                    <div className='flex items-center gap-2 mb-[19px]'>
                        <div className='flex-1'>
                            <input
                                value={inputEdit}
                                onChange={(e) => setInputEdit(e.target.value)}
                                className='w-full border border-[#E4E4E4] 
                    rounded-lg py-[8px] px-[16px]'
                                placeholder='Edit Todo'
                            />
                        </div>
                        <button className='bg-[#503E9D] text-white
            h-[40px] w-[114px] px-[16px] rounded-lg text-center'
                            onClick={handleEditDataTodo}>
                            Edit
                        </button>
                    </div>
                )}
                <div className='flex items-center gap-2 mb-[43px]'>
                    <div className='flex-1'>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full border border-[#E4E4E4] 
                        rounded-lg py-[8px] px-[16px]'
                            placeholder='Cari Todo'
                        />
                    </div>
                </div>
                {filteredData.map((value, index) => {
                    return (
                        <div key={String(index)} className='flex items-center 
                justify-between mb-[16px]' onClick={() => {
                    setEditDataTodo(value)
                    setInputEdit(value.title)
                }}>
                            <p>{value.title}</p>
                            <button className='bg-[#FF0004] text-white
                        h-[30px] px-[6px] rounded-lg'
                                onClick={() => removeDataTodo(value.id)}>
                                Hapus
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList

