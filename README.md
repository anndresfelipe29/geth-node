# Nodo geth

Se crea un nodo local de geth con su configuración  personalizada en en el bloque génesis.
A continuación se muestra el genesis.json



Posterior mente se cambiara esto para crear una imagen docker que permite la ejecucion de un node geth configurado para una red privada, el existente en la pagina oficial apunta directamente a la red principal.


## Pasos para llegar hasta acá

- Descargar geth 
https://geth.ethereum.org/downloads/

- Ejecutar geth en la ruta de descarga con 
./geth
o con pacman -S geth

- Crear un directorio para la cadena de bloques, ir al directorio, crear el archivo **genesis.json**
```
{
    	"difficulty"    	: "0x10000",
    	"gasLimit"  : "0x800000",
    	"alloc"         	: {},
    	"config"    	: {
        	"chainId": 1001,
        	"homesteadBlock": 0,
            	"eip150Block": 0,
        	"eip155Block": 0,
        	"eip158Block": 0
    	}
}
```
- Inicializar Blockchain
geth --datadir "data-private" init "genesis.json"

- Ejecutar Geth
geth --datadir "data-private" console


