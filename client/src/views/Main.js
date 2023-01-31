import { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom';

const Main = () => {
    const [aList, setAList] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAList(res.data)
            })
            .catch((err)=> console.log(err))
    }, [])

    const removeFromDom = authorId => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res=>{
                console.log('Author Deleted');
                console.log(res);
                console.log(res.data);
                setAList(aList.filter(author=>author._id !== authorId));
            })
            .catch((err)=>console.log(err))
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to ={{ pathname: `/authors/new`, state:{onSubmitProp: 'createAuthor'}}}> Create Author</Link>
            <AuthorList aList = {aList} setAList = {setAList} removeFromDom={removeFromDom} />
        </div>

    )
}

export default Main;