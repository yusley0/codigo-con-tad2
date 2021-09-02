var elementos:any =[]
 var opciones = 0;
 class Nodo{
     dato: any;
     siguiente: any;
     constructor(_dato: any, siguiente: any){
         this.dato = _dato;
         this.siguiente = siguiente;
     }
 }
do{
    opciones = Number(prompt("\n" +
    "\n 1.- Crear la lista" +
    "\n 2.- Ingresar al inicio" +
    "\n 3.- Ingresar al final" +
    "\n 4.- Ingresar al inicio" +
    "\n 5.- sacar al principio" +
    "\n 6.- sacar al final" +
    "\n 7.- Imprimir toda la pila" +
    "\n 8.- cuantos elementos tengo en la lista" + 
    "\n 9.- Salir \n"));
   
    switch (opciones) {

        case 1: //Crear
              var nombrePila = prompt("\nIngrese el nombre de la lista: ");
               console.log("se creo la  " + nombrePila+ ", se creo con exito" );
            
            if(nombrePila){
                opciones
            } else {
            opciones 
         } 
         
           
            break;
            case 2: //principio
            var nuevo = prompt("Ingrese un elemento a la lista");
                elementos.unshift(nuevo)
                console.log("se ingreso: " +elementos, null );
                if(elementos){
                    opciones
            }else{
              opciones
                   }
                break;
            
        case 3: //final
        var nuevo = prompt("Ingrese un elemento al final de la lista");
            elementos.push(nuevo)
            console.log("se ingreso: " +elementos, null );
            if(elementos){
             
                opciones
        }else{
          opciones
               }
            break;


        case 4: //inicio
           var nuevo1=  prompt("Ingrese un elemento al inicio de la lista");
           elementos.unshift(nuevo1)
            console.log("ingreso al inicio: " +elementos, null);
            if(elementos){
                opciones
           } else{
         opciones

           } 
        
            break; 
            case 5: //dequeue
           var elim= elementos.shift();
            console.log("se elimino el elemento: " +elim);
            if(elementos){
                opciones
           } else{
         opciones

           } 
        
            break;     
            case 6: //POP
           var elim= elementos.pop();
            console.log("se elimino el elemento: " +elim);
            if(elementos){
                opciones
           } else{
         opciones

           } 
        
            break;
            case 7: //Imprimir
                console.log(elementos)
                if(elementos==null)
    console.log("Hey inicializala pila primero");
    else
    console.log(elementos.toString());
            break;
            case 8: //PEEK
            console.log(elementos.length);
            if(opciones){
                opciones 
            } else{
            opciones }
                break; 
        case 9: 
           var b:any = prompt("seguro que quieres salir ..?? SI o NO \n" + "\n 1. Si" +"\n 2. NO");
           this.elementos.push(b);
          
            break;
    }
}while(opciones !=9);
console.log("Gracias por usar el programa");






function dato(dato: any) {
    throw new Error("Function not implemented.");
}

