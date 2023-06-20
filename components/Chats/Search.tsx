'use client'
import React from 'react'
import Input from '../uı/Inputs'

export default function Search() {
    const searchData = () => ''
    return (
        <form onSubmit={searchData}>
            <Input></Input>
            <button type='submit'></button>
        </form>
    )
}
