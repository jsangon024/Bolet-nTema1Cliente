//Función para recorrer el array

function RecorrerArray({array}){
    const lista=[];
    for(let i=0;i<array.length;i++){
        lista.push(<li key={i}>{array[i]}</li>);
    };
    return <ul>{lista}</ul>;
    
}

//devolución de función con el array dentro

export default function DevolverArray(){
const listaCosas=["Destructor","De","Mundos"];
return <RecorrerArray array= {listaCosas} />;
}