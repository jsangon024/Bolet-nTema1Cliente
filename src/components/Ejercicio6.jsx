
export default function BotonAlert(){
    const saludar=() => {
        alert("Pedro Sanxeeeeeeeeeee!");
    }
    
    return(
        <h2 onClick={saludar}>Solicita ayuda aquí</h2>
    )
}