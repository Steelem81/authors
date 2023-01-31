import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AuthorForm = (props) => {
    const [errors, setErrors] = useState([]);
    const [authorName, setName] = useState();

    const navigate = useNavigate();


    const handleChange = (e) => {
        setName(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            authorName
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
                
            .catch(err => setErrors(err.response.data.errors))

    }
    const cancelButton = (e) => {
        navigate('/');
    }


        return(
            <>
                <h1>Authors</h1>
                <form onSubmit = {onSubmitHandler}>
                    <label>Author name</label>
                    <input type="text" name="authorName"  onChange={handleChange}/>
                    { errors.authorName ?
                        <p>{errors.authorName.message}</p>
                        :null
                        }
                    
                    <input className="btn btn-primary" type="submit" />
                    <button className="btn btn-secondary" onClick = {cancelButton}>Cancel</button>
                </form>
            </>
        )
    
}

export default AuthorForm;