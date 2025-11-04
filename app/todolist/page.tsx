'use client'
import { stringify } from 'querystring'
import React, { useEffect, useState } from 'react'

function TodoList() {

    const [input, setInput] = useState('')
    const [dataTodo, setDataTodo] = useState<string[]>([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const storedData = localStorage.getItem('dataTodo')
        if (storedData) {
            setDataTodo(JSON.parse(storedData))
        }
    }, [])

    const addDataTodo = () => {
        if (input.trim().length === 0) {
            setInput('')

            alert('Masukkan Todo terlebih dahulu!')
            return
        }

        if (dataTodo.includes(input.trim())) {
            alert('Data sudah ada, tidak boleh duplikat!')
            return
        }

        setDataTodo([...dataTodo, input.trim()])
        setInput('')
        localStorage.setItem('dataTodo', JSON.stringify([...dataTodo, input]))

    }

    const removeDataTodo = (index: number) => {
        const tempData = [...dataTodo]
        const removeData = tempData.filter((_val, idx) => idx !== index)
        setDataTodo(removeData)
        localStorage.setItem('dataTodo', JSON.stringify([removeData]))

    }

    const filtereData = dataTodo.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='w-[378px] m-auto p-[64px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-[56px] font-[600] leading-none'>Todo</h1>
                    <h1 className='text-[56px] font-[600] leading-none'>List</h1>
                </div>

                <div className='flex justify-center items-center bg-[#F2F3FF] w-[64px] h-[64px] rounded-2x1 ml-8 shrink-0'>
                    <span className='text-3x1 leading-none'>🚀</span>
                </div>
            </div>

            <p>Notes:</p>
            <div className='h-[1px] bg-[#EBEBEB] mb-[21px] mt-[32px]' />

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

            <div className='flex items-center gap-2 mb-[43px]'>
                <div className='flex-1'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
                        placeholder='Cari Todo'
                    />
                </div>
            </div>

            {filtereData.map((value, index) => {
                return (
                    <div key={String(index)} className='flex items-center justify-between mb-[16px]'>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <p>{value}</p>
                        </div>
                        <button
                            className='bg-[#FF0004] text-white h-[30px] px-[6px] rounded-lg'
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
