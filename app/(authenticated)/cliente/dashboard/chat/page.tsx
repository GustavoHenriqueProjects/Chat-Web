"use client"
import getConsole from "./calc"


export default function Chat(){

    const a: any = ["aaaa", "bbb", "ccc", "ddd", "eee", "fff"]
    const b = "aaaaaa"

    let token = localStorage.getItem("token")

    return(
        <>
       <h1>teste</h1>
       <span>{token}</span>
        {
            
            a.map((abc: any) => {
                return(
                    <div>
                    </div>
                )
            })
        }
       </>
    )
}


