'use client'

import { useState } from "react"
import Image from "next/image"
import Accept from "@/app/(components)/Accept/Accept"

type ConfessStates = {
    rejectCount: number
    acceptSizeBoxRem: number
    isAccept: boolean
}

const initConfessStates: ConfessStates = {
    rejectCount: 0,
    acceptSizeBoxRem: 4,
    isAccept: false
}

const rejectTexts = [
    "NO",
    "Are you sure?",
    "Really sure?",
    "Don't do this to me!",
    "😭",
    "💔",
]

type ConfessProps = {}

const Confess = (props: ConfessProps) => {
    const [confessStates, setConfessStates] = useState(initConfessStates)
    const onYes = async () => {
        // ?: May save isAccept to DB
        // ?: May let the owner know when click YES
        setConfessStates({
            ...initConfessStates,
            isAccept: true
        })
    }
    const maxAcceptSizeBoxRem = initConfessStates.acceptSizeBoxRem + rejectTexts.length * 2
    const onNo = async () => {
        setConfessStates(state => ({
            ...state,
            acceptSizeBoxRem: state.acceptSizeBoxRem >= maxAcceptSizeBoxRem ? state.acceptSizeBoxRem : state.acceptSizeBoxRem + 1,
            rejectCount: state.rejectCount + 1
        }))
    }
    if (confessStates.isAccept) return <Accept />
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={"/confess.png"} height={100} width={100} alt="confess img" />
            <p className="h-20">Will you be a Selenophile?</p>
            <div className={`flex justify-center items-center gap-4`}>
                <button className={`text-white rounded bg-green-400 hover:bg-green-600 p-2`}
                    onClick={onYes}
                    style={{
                        height: confessStates.acceptSizeBoxRem + "rem",
                        width: confessStates.acceptSizeBoxRem + "rem",
                    }}
                >
                    YES
                </button>
                <button className="text-white rounded bg-red-600 hover:bg-red-400 p-2 h-16"
                    onClick={onNo}
                >
                    {rejectTexts[confessStates.rejectCount % rejectTexts.length] || "NO"}
                </button>
            </div>
        </div >
    )
}

export default Confess