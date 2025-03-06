import { useState } from "react"

export default function Signup(){
    const [user, setUser] = useState ({})

    const handelChange = (e) =>{
        const inputValue = e.target.value;
        const inputName = e.target.name;

        setUser((prev) =>(
            { ...prev, [inputName] : inputValue }))
        console.log(user)
    }

    return(
        <section>
        <h1>Registrer bruker</h1>
        <form>
            <label>
                E-post
                <input name="email" onChange={handelChange} type="email" placeholder="ainia@hiof..." />
            </label>
            <label>
                Fullt navn
                <input name="name" onChange={handelChange} type="text" placeholder="Aini Ayinazier" />
            </label>
            <label>
                Brukernavn
                <input name="username" onChange={handelChange} type="text" placeholder="Aynazar..." />
            </label>
            <label>
                Passord 
                <input name="password" onChange={handelChange} type="passeword" placeholder="*********" />
            </label>
            <button>Register</button>
        </form>
    </section>
    )
}