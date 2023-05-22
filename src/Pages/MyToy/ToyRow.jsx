

const ToyRow = ({toy,isMyToy,handleDelete}) => {
    const {photo, name, price, quantity,_id} = toy;
    return (
        <tr>
        {
            isMyToy && <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        }
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>
            {name}
        </td>
        <td>{quantity}</td>
        <td>${price}</td>
      
    </tr>
    );
};

export default ToyRow;