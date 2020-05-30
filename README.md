# :ledger: AppQ
 AppQ es una aplicación Android, para informar en tiempo real el estado del aire en la ciudad de Bogotá.

<summary><h2> :writing_hand: Mockups</h2></summary>
  Los siguientes mockups grafican la estructura general de la aplicación movil.
  Para visualizar los mockups acceder a este enlace
  <a href="https://drive.google.com/drive/folders/1JcAxzEOtizZlqvRVrt8o_hmRWf-uFJGG?usp=sharing">Mockpup</a>

<summary><h2> 🛠️ Configuracion del proyecto</h2></summary>

 Debido a que este proyecto está desarrollado en [React Native](https://reactnative.dev/), para realizar ediciones a este repositorio se debe tener instaladas las siguientes dependencias: 

 * [**Node**](https://nodejs.org/en/)
 * [**Java Development Kit**](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
 * [**Android development environment**](https://developer.android.com/studio/index.html)
 * [**Watchman**](https://facebook.github.io/watchman/)
 * **React Native**
```shell
     npm install -g react-native-cli
```
Para configurar el entorno de desarrollo seguir los pasos de la [Documentación Oficial](https://reactnative.dev/docs/environment-setup), teniendo en cuenta el sistema operativo en el que se desarrolla e ingresando a la sección ***React Native CLI Quickstart***.

Para ejecutar desde un dispositivo seguir los siguientes pasos: [Ejecutar en un dispositivo](https://reactnative.dev/docs/running-on-device).


### 🛠️ Librerías
* [**react-native-maps**](https://github.com/react-native-community/react-native-maps)


### **Pasos para Ejecutar**

* Clonar el proyecto del repositorio de git
```shell
    git clone https://github.com/anlramirezs11/appQ
```

* Inicializar ***Metro Bundler*** en la tarminal.
```shell
     cd appQ
```

```shell
    npx react-native start
```

* Correr el proyecto en otra terminal.
```shell
     cd appQ
```

```shell
    npx react-native run-android
```

***Nota*** si el proyecto se va a correr en un dispositivo movil se deben dar permisos para la instalación la primera vez que se ejecuta.



<summary><h2> :pick: Appis Asociadas</h2></summary>
  
  ### API para appQ
  [AppQAPI](https://github.com/YuelWolf/AppQAPI)
 
  ### Scrapper para appQ
  [Scrapper](https://github.com/YuelWolf/AppQScrapper): Scrapper para obtener los datos de polucción de Bogotá.
