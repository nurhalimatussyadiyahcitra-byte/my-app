'use client'
import React, { useEffect, useState } from 'react'

function TodoList() {
    const [input, setInput] = useState('')
    const [dataTodo, setDataTodo] = useState<string[]>([])
    const [search, setSearch] = useState('')
    const [editInput, setEditInput] = useState('')

    // Load data dari localStorage
    useEffect(() => {
        const storedData = localStorage.getItem('dataTodo')
        if (storedData) {
            setDataTodo(JSON.parse(storedData))
        }
    }, [])

    // Simpan ke localStorage setiap kali data berubah
    useEffect(() => {
        localStorage.setItem('dataTodo', JSON.stringify(dataTodo))
    }, [dataTodo])

    const addDataTodo = () => {
        if (input.trim().length === 0) {
            alert('Masukkan Todo terlebih dahulu!')
            return
        }

        if (dataTodo.includes(input.trim())) {
            alert('Data sudah ada, tidak boleh duplikat!')
            return
        }

        setDataTodo([...dataTodo, input.trim()])
        setInput('')
    }

    const removeDataTodo = (index: number) => {
        const tempData = dataTodo.filter((_val, idx) => idx !== index)
        setDataTodo(tempData)
    }

    const editTodo = () => {
        if (!editInput.trim()) {
            alert('Masukkan teks baru!')
            return
        }

        const index = dataTodo.findIndex(item =>
            item.toLowerCase().includes(search.toLowerCase())
        )

        if (index !== -1) {
            const updated = [...dataTodo]
            updated[index] = editInput.trim()
            setDataTodo(updated)
            setEditInput('')
            alert('Todo berhasil diubah!')
        } else {
            alert('Todo yang dicari tidak ditemukan!')
        }
    }

    const filteredData = dataTodo.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='w-[400px] m-auto p-[64px]'>
            {/* Header */}
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-[56px] font-[600] leading-none'>Todo</h1>
                    <h1 className='text-[56px] font-[600] leading-none'>List</h1>
                </div>

                <div className='flex justify-center items-center bg-[#F2F3FF] w-[64px] h-[64px] rounded-2xl ml-4 shrink-0'>
                    <span className='text-3xl leading-none'>🚀</span>
                </div>
            </div>

            <p>Notes:</p>
            <div className='h-[1px] bg-[#EBEBEB] mb-[21px] mt-[32px]' />

            {/* Input Tambah Todo */}
            <div className='flex items-center gap-2 mb-[20px]'>
                <div className='flex-1'>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
                        placeholder='Masukkan Todo'
                    />
                </div>
                <button
                    className='bg-[#503E9D] text-white h-[40px] w-[114px] px-[16px] rounded-lg text-center'
                    onClick={addDataTodo}
                >
                    Simpan
                </button>
            </div>

            {/* Input Cari Todo */}
            <div className='flex items-center gap-2 mb-[20px]'>
                <div className='flex-1'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
                        placeholder='Cari Todo'
                    />
                </div>
            </div>

            {/* Input Edit Todo */}
            <div className='flex items-center gap-2 mb-[40px]'>
                <div className='flex-1'>
                    <input
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
                        placeholder='Masukkan teks baru'
                    />
                </div>
                <button
                    className='bg-[#4CAF50] text-white h-[40px] w-[114px] px-[16px] rounded-lg text-center'
                    onClick={editTodo}
                >
                    Edit
                </button>
            </div>

            {/* List Todo */}
            {filteredData.map((value, index) => {
                return (
                    <div key={String(index)} className='flex items-center justify-between mb-[16px]'>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <p>{value}</p>
                        </div>
                        <button
                            className='bg-[#FF0004] text-white h-[30px] px-[10px] rounded-lg'
                            onClick={() => removeDataTodo(index)}
                        >
                            Hapus
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList