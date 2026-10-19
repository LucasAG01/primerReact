# TIPOS de css

1. External --> Es tener un archivo index.css e ir creando las clases
2. Modulos --> Crear una carpeta en la que coloque dentro el archivo.module.css si solo quiero aplicar un css especifico
3. Inline --> en el archivo .jsx, crear una variable styles ={} y en ella coloar el codigo de css sin guiones y todo entre"" 

# props es todo lo relacionado con Student

- importante relacionarlos con el props. 
- Los boolean es importante ponerlos usando ternarios "?"

- ClassName en el div, hace que podamos aplicar a lo que hay ahí, su propio css


# propTypes 
- Un mecanismo que se asegura que el valor pasado que es el tipo correcto de dato. es alñ principio lo de param en Student


# Conditional Rendering

- Controla lo que se esta mostrando en la aplicacion basado en ciertas condiciones (show, hide, o cambio de componentes)
- Lo puedes comprobar en UserGreeting
- Puedes meter las cosas en consts para hacer el operador ternario mas organizado 
```jsx
    const welcomeMessage = <h2 className="welcome-message">Bienvenido {props.username}</h2>;
    const errorMessage = <h2 className="login-prompt">Porfavor logueate </h2>;

    return(props.isLoggedIn ? welcomeMessage : errorMessage)

if (props.isLoggedIn) {
    return <h2 className="welcome-message">Bienvenido {props.username}</h2>;
  } else {
    return <h2 className="login-prompt">Porfavor logueate </h2>;
  }

```



