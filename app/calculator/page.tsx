'use client'

import React, { useState } from 'react'

export default function calculator() {
    const [variableOne, setVariableOne] = useState('')
    const [variableTwo, setVariableTwo] = useState('')
    const [aritmatika, setAritmatika] = useState('+')
    const [result, setResult] = useState(0)

    const submitAritmatika = () => {
        if (variableOne && variableTwo){
            //-,+,*,/
            if (aritmatika === '+') {
                const plus = Number(variableOne) + Number(variableTwo) ;
                setResult(plus)
            } else if (aritmatika === '-') {
                const minus = Number(variableOne) - Number(variableTwo) ;
                setResult(minus)
            } else if (aritmatika === '*') {
                const kali = Number(variableOne) * Number(variableTwo) ;
                setResult(kali)
            } else {
                alert ('Aritmatika hanya bisa di isi oleh +,-,*,/')
            }
        } else {
            alert('Bilangan Pertama dan Bilangan Kedua Wajib di isi')
        }
    }

  return (
    <div className = 'min-h-screen items-center justify-items-center '>
        <h1>calculator</h1>
        <div className='my-2'>
            <input value={variableOne} onChange={(e) => setVariableOne(e.target.value)} className='border rounded-lg p-3'placeholder='Bilangan Pertama' />
        </div>
        <div className='my-2'>
            <input value={variableTwo} onChange={(e) => setVariableTwo(e.target.value)} className='border rounded-lg p-3'placeholder='Bilangan Kedua' />
        </div>
        <div className='my-2'>
        <input value={aritmatika} onChange={(e) => setAritmatika(e.target.value)} className='border rounded-lg p-3'placeholder='Aritmatika' />
        </div>
        <div className='my-2'>
            <button className='w-[200px] bg-[red] text-white rounded-lg' onClick={submitAritmatika}>
                Hasil
            </button>
        </div>
        <h1>{result}</h1>
    </div>

  )
}
