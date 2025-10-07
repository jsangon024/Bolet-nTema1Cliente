export default function BuscarPokemon(){

    const promise=() => fetch('https://pokeapi.co/api/v2/pokemon/150')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        alert('Mewtwo está en la consola')});
    
        return(
            <h2 onClick={promise}>¿Dónde está Mewtwo?</h2>
        )

}