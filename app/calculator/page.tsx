'use client'

import React, { useState } from 'react'

export default function Calculator() {
    const [variableOne, setVariableOne] = useState('')
    const [variableTwo, setVariableTwo] = useState('')
    const [aritmatika, setAritmatika] = useState('+')
    const [result, setResult] = useState<number | string>(0)

    const submitAritmatika = () => {
        if (variableOne && variableTwo){
            //-,+,*,/
            const one = Number(variableOne)
            const two = Number(variableTwo)
            if (aritmatika === '+') {
                const plus = Number(variableOne) + Number(variableTwo) ;
                setResult(plus)
            } else if (aritmatika === '-') {
                const minus = Number(variableOne) - Number(variableTwo) ;
                setResult(minus)
            } else if (aritmatika === '*') {
                const kali = Number(variableOne) * Number(variableTwo) ;
                setResult(kali)
            } else if (aritmatika ==='/'){
               // pastikan setResult dipanggil untuk pembagian juga
               setResult(two !== 0 ? one / two : 'Tidak bisa dibagi 0')
            } else {
                alert('Aritmatika hanya bisa diisi dengan +, -, *, /')
            }
        } else {
            alert('Bilangan Pertama dan Bilangan Kedua Wajib diisi!')
        }
    }
    
  return (
    // Outer container supaya kotak di tengah layar
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        {/* Kotak kalkulator dengan gradiasi pink -> ungu */}
    <div className='bg-gradient-to-br from-pink-400 to-purple-300 p-6 rounded-lg shadow-lg w-[300px] text-center text-white'>
            <h1 className='text-lg font-bold mb-4'>KALKULATOR</h1>
            <input value={variableOne} onChange={(e) => setVariableOne(e.target.value)} className='w-full mb-2 p-2 rounded text-black' placeholder='Masukkan Bilangan Pertama' type='number'
        />
            <input value={variableTwo} onChange={(e) => setVariableTwo(e.target.value)} className='w-full mb-2 p-2 rounded text-black' placeholder='Masukkan Bilangan Kedua' type='number'
        />
        <div className='flex items-center justify-between mb-3'>
            {/* pastikan tag select tanpa spasi setelah'<' */}
        <select value={aritmatika} onChange={(e) => setAritmatika(e.target.value)} className= 'border rounded-lg p-3 w-32 text-black'
        >
            <option value='+'>+</option>
            <option value='-'>-</option>
            <option value='*'>*</option>
            <option value='/'>/</option>
        </select>
        
        <button onClick={submitAritmatika} className='bg-red-600 hover:bg-red-700 text white font-semibold py-2 px-4 rounded'>
                Hitung
            </button>
        </div>
        <input 
            type='text'
            readOnly
            value={result}
            className='w-full p-2 rounded text-black text-center font-semibold'
        />
        </div>
    </div>

  )
}
