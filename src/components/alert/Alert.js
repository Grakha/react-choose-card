
import './Alert.css'

export const AlertSuccess = () => {
    return (
        <div className="notify success">Great, Success</div>
    )
}

export const AlertFail = () => {
    return (
        <div className="notify fail">Fail, Wrong blocks</div>
    )
}

export const AlertCheck = () => {
    return (
        <div className="notify check">You shoul choose blocks</div>
    )
}