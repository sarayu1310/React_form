import UserInfo from "./UserInfo"
import Payment from "./Payment"
import AddInfo from "./AddInfo"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <UserInfo />,
        1: <AddInfo />,
        2: <Payment />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs
