function esperarPor(tempo = 2000) {
  
    setTimeout(() => console.log('concluído'),tempo)
   
}


 function executar(){
    esperarPor(2000)
    console.log('Depois de 2s')
    
    esperarPor(3000)
    console.log('Depois de 3s')

    esperarPor(1500)
    console.log('Depois de 1,5s')
}

executar()
console.log('fim')
    