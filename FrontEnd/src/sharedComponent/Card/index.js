import PopUp from "../PopUp"
import { useState } from "react"
const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const { title, bgColor, showSideBAr, setShowSideBar } = props
    const handleClickEvent = () => {
        setShowSideBar(false)
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="col-xl-3 col-md-6">
                <div className={`card ${bgColor} text-white mb-4`}>
                    <div className="card-body">{title}</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" onClick={handleClickEvent}>View Details</a>
                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            {isOpen && <div className="bg-light custom-popup">
                <PopUp setIsOpen={setIsOpen} isOpen={isOpen} title={title} showSideBAr={showSideBAr} setShowSideBar={setShowSideBar} />
            </div>}
        </>
    )
}
export default Card