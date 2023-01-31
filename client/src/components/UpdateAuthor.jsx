import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const UpdateAuthor = (props) => {
    const {id} = useParams();
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");
    const [authorName, setName] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.authorName);
            })
            .catch(err => {
                console.log(err)
                setAuthorNotFoundError(`Author not found`);
            })
    }, [])

    const onChangeHandler = (e) => {
        setName(e.target.value);
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorName})
            .then(res=> {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }
    const cancelButton = (e) => {
        navigate('/');
    }


        return(
            <div className="container">
                <h1>Authors</h1>
                <form onSubmit = {onSubmitHandler}>
                    {authorNotFoundError ? (
                        <h2>{authorNotFoundError} <Link to='/new/'>Add new Author</Link></h2>
                    ) : null}
                    <div className = "form-group">
                    <label>Author name</label>
                    <input type="text" name="authorName" value = {authorName} onChange={onChangeHandler}/>
                    { errors.authorName ?
                        <p>{errors.authorName.message}</p>
                        :null
                        }
                    </div>
                    <input className="btn btn-primary" type="submit" />
                    <button className="btn btn-secondary" onClick={cancelButton}>Cancel</button>
                </form>
            </ div>
        )
}
export default UpdateAuthor;