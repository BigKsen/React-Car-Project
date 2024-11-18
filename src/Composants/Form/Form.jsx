import style from "./Form.module.css"

const Form =({h1})=>{

return (
    <>
        <h1>{h1} </h1>
        <form method="get">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstname" />

            <label htmlFor="secondName">Second Name</label>
            <input type="text" id="secondName" name="secondName" />

            <label htmlFor="tel">Telephone</label>
            <input type="tel" id="tel" name="tel" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <button type="submit" value="Submit">
                CONFIRM
            </button>
            <button type="reset" value="Reset">
                RESET
            </button>
        </form>
    </>
);
}

export default Form