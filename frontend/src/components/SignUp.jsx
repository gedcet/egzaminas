import "./SignUp.css"
import axios from "axios"
import { createRef } from "react"

const SignUp = ({ set_state_status_text, fetch_state_vartotojas }) =>
{
    const ref_vardas = createRef()
    const ref_slaptazodis = createRef()

    const handle_click = async () =>
    {
        try
        {
            set_state_status_text("Vykdoma...")
            const result = await axios({
                method: "post",
                url: "/api/vartotojai",
                data: {
                    vardas: ref_vardas.current.value,
                    slaptazodis: ref_slaptazodis.current.value
                }
            })
            set_state_status_text("Sekmingai atlikta")
            setTimeout(() => { set_state_status_text("") }, 1000)
            fetch_state_vartotojas()
        }
        catch (err)
        {
            set_state_status_text("Registravimo klaida")
            setTimeout(() => { set_state_status_text("") }, 1000)
        }
    }

    return (
        <div className="SignUp">
            <h1>Naujo vartotojo registracija</h1>
            <p>Sugalvokite savo vartotojo vardą ir slaptažodį, spauskite "Registruokis!"</p>
            <span>Vardas</span>
            <input type="text" ref={ref_vardas} />
            <span>Slaptažodis</span>
            <input type="password" ref={ref_slaptazodis} />
            <button onClick={handle_click}>Registruokis!</button>
        </div>
    )
}

export default SignUp