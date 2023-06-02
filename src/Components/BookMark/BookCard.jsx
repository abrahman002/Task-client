import { Link } from "react-router-dom";

const BookCard = ({ data,handleDelete,handleConfirm }) => {
    const { title, discription, status,_id,info } = data;
    return (
        <>
          
                <tr>
                    <td>
                    <button className='btn btn-warning' onClick={()=>handleDelete(_id)}>Delete</button>
                    </td>
                    <td>{title}</td>
                    <td>{discription}</td>
                    <td>{status}</td>
                    <td>
                        {info ==='Confirm'? <span className='btn text-primary'>Apporved</span>:
                        <p onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</p>}
                    </td>
                    <td>
                        <Link to={`/update/${_id}`}  ><button className='btn btn-primary '>Update</button></Link>
                    </td>
                   
                </tr>
                
          
      </>
    );
};

export default BookCard;