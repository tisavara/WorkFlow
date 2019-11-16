import React from 'react'

export const GotMail = () => {
    return (
        <div>
            ส่งเอกสารให้ Share Service 
            <button onClick={() => {window.location.href="https://www.google.com/webhp?authuser=1"}}>Yes</button>
            <button onClick={() => {window.location.href="https://www.google.com/webhp?authuser=1"}}>No</button>
        </div>
    )
}