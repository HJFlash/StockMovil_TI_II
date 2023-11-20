"use client"

import { FiTrash2 } from "react-icons/fi";

export default function deleteButton ({ID, RUTA}) {
    const handleDelete = async() => {
        if(window.confirm("Eliminar este producto permanentemente?")){
            const response = await fetch(`/api/${RUTA}/${ID}`, {
                method: 'DELETE'
            });
    }
    location.reload()
    }
    return(
        <button onClick={handleDelete} className="py-3 px-3 text-[175%] text-red-500 hover:text-red-900 flex justify-self-end"><FiTrash2/></button>
    ) 
}