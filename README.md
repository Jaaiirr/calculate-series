# Calculate series

# Description:
  ## App hecha con react v18, usando la version 18.14 de Node.
  ## Consta de 3 Componentes de clase, el primero MainFormComponent que contiene un input mediante el cual el usuario se le permite
  ## ingresar un valor numerico, no excediendo los primeros 10 numeros naturales, caso contrario se muestra un mensaje en pantalla,
  ## el valor del input es enviado por props al siguiente componente

  ## El segundo componente CalculateSeries recibe por props el valor que el usuario introdujo en MainformComponent, aqui se realiza toda
  ## la logica necesaria para el funcionamiento de dicho proyecto, se implementaron 4 metodos los cuales nos permiten calcular un número 
  ## triangular(n), la serie fibonacci hasta (n) y la serie de los numerod primos hasta (n), donde (n) es el valor que el usuario introduce
  ## en MainFormComponent, tambien contamos con un metodo auxiliar llamado isPrimeNumber(n) cuya finalidad es determinar si el numero (n) es
  ## primo, caso verdadero devuelve true, tambien hacemos uso del metodo componentDidUpdate() el cual nos ayuda a estar seteando el state,
  ## el cual es enviado por props al tercer y ultimo componente.

  ## El tercer y ultimo componente ResultComponent, recibe por props el state de CalculateSeries, es en este componente donde se le indica 
  ## al usuario los resultados de las diferentes series numericas, estos se muestran en 3 cards, para facilitar la ubicacion de los resultados.

# Instalacion
  1) Git clone git@github.com:Jaaiirr/calculate-series.git
  2) Verificar que la rama sea --develop-- usando --> git branch, caso contrario cambiarnos a develop usando --> git checkout develop
  3) Instalamos las dependencias del proyecto --calculate-series-- para esto en la rama develop "IMPORTANTE" usamos --> npm i

# A partir de este momento tenemos dos caminos:
  1) Levantando el proyecto usamos --> npm start
  2) Ejecutamos la suit de test con el siguiente comando --> npm run test 


# Contacto :
Jair Tellez -- jairtellezromero9678@gmail.com
