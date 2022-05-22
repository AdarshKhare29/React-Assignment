import { useState, useEffect } from "react"

const AccountInfo = (props) => {
    const [data, setData] = useState([])
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const { id, closeAccount } = props;
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
    }
    const handleChange = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = data.filter(usr => {
                return usr.name.toLowerCase().match(text.toLowerCase())
            })
        }
        setSuggestions(matches)
        setText(text)
    }
    const handleClick = (value) => {
        setText(value)
        setSuggestions([])
    }
    return (
        <>
            <div className="row px-2 d-flex justify-content-between">
                <div className="col">
                    <label htmlFor="account-name">Account Name</label>
                    <div>
                        <input type="name" placeholder="Type here" onChange={(e) => handleChange(e.target.value)} value={text} className="form-control" />
                        {suggestions && suggestions.map((suggestion, i) =>
                            <div key={i} className="suggestion col-md-12 justify-content-md-center" onClick={() => handleClick(suggestion.name)}>{suggestion.name}</div>
                        )}
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="debit">Debit</label>
                    <div className="mr-5">
                        <input type="name" placeholder="10000" className="form-control" />

                    </div>
                </div>
                <div className="col ">
                    <label htmlFor="credit">Credit</label>
                    <div className="d-flex justify-content-between">
                        <input type="name" placeholder="0" className="form-control" />
                        <span className="m-2 button-close" onClick={() => closeAccount(id)}><i className="fa fa-times" aria-hidden="true" ></i></span>
                    </div>
                </div>
            </div>
            <div className="row px-2">
                <label htmlFor="narration">Narration</label>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>

        </>
    )
}
export default AccountInfo