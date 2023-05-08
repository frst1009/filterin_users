import { Link } from "react-router-dom"

export const UserData=({data})=>{
    return(
        data.map(
            ({id, name, email, company: {name: companyname}},i)=>(
                <tr>
                    <td scope="row">{i}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{companyName}</td>
                    <td><Link to={`/UsersPosts/${id}`} className="btn btn-primary">See Posts</Link></td>
                </tr>
            )
        )
    )
}