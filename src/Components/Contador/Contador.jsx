import React, {useState} from "react"; 

function Contador(){

//sintaxe do useState
const [numero, setNumero] = useState(0)

//Função para adicionar um 1 valor quando eu clicar no botão +

function Adicionar(){

if(numero < 25){
     setNumero(numero + 1)
}

}

//Função para subtrair um 1 valor quando eu clicar no botão -

function Subtrair(){

if(numero > 0){        
    setNumero(numero - 1)
}

}

//Função para iniciar do zero/ zerar
function Zerar(){
    setNumero(numero - numero) //exemplo da Bianca Sarah

    //setNumero(0)
}

    return(
        <>
        <h2> {numero}  </h2>
        <button onClick={Adicionar}> + </button>
        <button onClick={Subtrair}> - </button>
        <button onClick={Zerar}> Zerar</button>
         </>
    )
}

export default Contador