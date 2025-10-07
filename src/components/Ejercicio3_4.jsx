

function EstaLogado({isLoggedIn, mostrarMensaje}){
return(
    <div>
        {isLoggedIn && mostrarMensaje? <h1>Bienvenido!</h1> : <h1>Debe usted logarse</h1>}
    </div>   
);

}

export default function MensajeLogado() {
 var logado= true;
 var mostrar=true;
 return <EstaLogado isLoggedIn= {logado} mostrarMensaje={mostrar}/>;

}

