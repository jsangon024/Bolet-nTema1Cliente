export default function BuscarGengar(){

    const buscaGengar= async () =>{
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/Gengar')
        const gengarData= await response.json();
        console.log(gengarData);
        alert('Gengar está en consola');
    }

    return(
        <h2 onClick={buscaGengar}>¿Dónde está Gengar?</h2>
    )
}