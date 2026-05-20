export default function Todo(){
    function handleDelete(id) {
        const message = `Delete item with id: ${id}`
        alert(message);
    }
    return(
        <>
            <ul style={{listStyle: "none"}}>
                <li>
                    Task 1
                    <button onClick={() => handleDelete(1)}>Delete</button>
                </li>
                <li>
                    Task 2
                    <button onClick= {()=> handleDelete(2)}>Delete</button>
                </li>
            </ul>
        </>
    )
}