import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const AuthorList = props => {
    const { aList, removeFromDom } = props

        return(
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            {
                aList.map((author, index) => {
                    return(
                            <tr key={index} >
                                <td>{author.authorName}</td>
                                <td>
                                    <Link to={`/authors/edit/${author._id}`}>
                                        <button className="btn btn-primary">Edit</button>
                                    </Link>
                                
                                    <button className="btn btn-danger" onClick = {() => removeFromDom(author._id)}>Delete</button>
                                </td>
                            </tr>
                            );
                })
            }
            </tbody>
            </table>
            </div>
        )
    

}

export default AuthorList;