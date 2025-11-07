# clean-architecture

## metrícas de progreso

- ito 1
    Dominio modelado sin inputs ni outputs.
    solo entidades y objetos de valor.

- ito 2
    Los casos de uso van a orquestar las reglas emitir eventos.

- ito 3
    Los Puertos y adaptadores deben tener una persistencia que podamos conmutar.
    Utilizaremos en memoria para probar pero debe ser facilmente escalable a una base de datos.

- ito 4
    Pruebas en dominio, aplicación y contratos.
    Deben tener significancia.
    Debe haber coecion y bajo acoplamiento.
    Claridad en el lenguaje de dominio.
