import AccountInfo from "../AccountInfo"
import Button from "../Button"
import { useState, useEffect, useRef } from "react"

const PopUp = (props) => {
    const { isOpen, setIsOpen, title, showSideBAr, setShowSideBar } = props
    const [addMore, setAddMore] = useState(1)
    const [totalField, setTotalField] = useState([]);
    const dateRef = useRef()
    useEffect(() => {
        if (dateRef && dateRef.current) {
            let today = new Date().toISOString().split('T')[0];
            today = [...today]
            if (today[5] == 0) {
                today[5] = '0'
                today[6] = +today[6]
                if (today[6] < 4) {
                    today[6] = (today[6] - 4) + 12
                    today[5] = today[6] / 10 | 0
                    today[6] = today[6] % 10
                    today[3] = +today[3] - 1
                }
                else {
                    today[6] = +today[6] - 4
                }
            }
            else {
                today[6] = (today[5] + today[6]) - 4
                today[5] = '0'
            }
            today = today.join('')
            dateRef.current.setAttribute('min', today);
        }
        let fields = totalField;
        fields.push(addMore);
        setTotalField([...fields]);
    }, [addMore])

    const handleAccountInfo = (id) => {
        let fields = totalField;
        let idx = fields.findIndex((val) => val == id)
        fields[idx] = undefined
        console.log({ fields, idx })
        setTotalField([...fields]);
    }
    const handleClickEvent = () => {
        setShowSideBar(!showSideBAr)
        setIsOpen(!isOpen)
    }

    return (
        <>
            {isOpen && <div className="bg-light">
                <nav className="navbar navbar-light bg-secondary px-4">
                    <span className="navbar-brand mb-0 h1">Add New {title}</span>
                    <span className="button-close"><i className="fa fa-times" aria-hidden="true" onClick={handleClickEvent}></i></span>
                </nav>
                <div className="row px-2">
                    <div className="col">
                        <label htmlFor="voucher-type">Voucher Type</label>
                        <input className="form-group" type="text" id="voucher-type" list="payment-options" />
                        <datalist aria-label="Default select example" id="payment-options">
                            <option value="Payment" />
                            <option value="Payment Upi" />
                            <option value="Net Banking" />
                            <option value="Food" />
                        </datalist>
                    </div>
                    <div className="col">
                        <label htmlFor="voucher-date">Voucher Date</label>
                        <div>
                            <input data-date-format="dd/mm/yyyy" id="datepicker" type="date" className="form-control" ref={dateRef} />
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="voucher-name">Voucher name</label>
                        <div>
                            <input type="name" placeholder="Type here" className="form-control" />
                        </div>
                    </div>
                </div>
                {totalField.map(idx => idx && <AccountInfo id={idx} closeAccount={(id) => handleAccountInfo(id)} />)}
                <div className="row px-2">
                    <div className="col p-2">
                        <Button title="Add more" color="btn-outline-primary" value={addMore} setValue={setAddMore} />
                    </div>
                </div>
                <div className="row px-2 save-more-btn">
                    <div className="col p-2 ">
                        <Button title="Save" color="bg-primary" />
                    </div>
                </div>
            </div>

            }
        </>
    )
}
export default PopUp