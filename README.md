# Microservicio de Pedidos con clean-architecture
- Dominio: Order, Price, SKU, Quantity, eventos por dominio.
- Application: Casos de uso CreateOrder, AddItemToOrder, puertos y DTOs.
- Infra: repositorio InMemory, pricing estático, event bus no-op.
- HTTP: endpoints mínimos con Fastify.
- Composición: container.ts como composition root.
- Test: dominio + aceptación de casos de uso.

## Comportamiento
- `POST /orders` crea un pedido.
- `POST /orders/:orderId/items` agrega una línea (SKU + qty) con precio actual.
- Devuelve el total del pedido.

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

## Pasos
1. Escafol del proyecto y utileria para ejecutar el proyecto y las pruebas.
