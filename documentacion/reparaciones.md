# Reparaciones

La página de "Reparaciones" consta de dos partes: por un lado la carga de los repuestos y por el otro la creación de un presupuesto **_luego_** de haber seleccionado repuestos y cantidades necesarias.

verbo HTTP: GET Endpoint: /reparaciones/"tipo de repuesto".

Devuelve un listado con los repuestos según el tipo de repuesto solicitado. La petición debe ser enviada con el **JWT Token** obtenido al iniciar sesión en el header de Autenticación (Bearer Token).

Ejemplo para el tipo de repuesto "llantas":

```
    endpoint: /reparaciones/llantas

    "repuestos": [
        {
            "id_repuesto": 9,
            "nombre": "llanta de aleacion",
            "precio": 20000,
            "stock": 20,
            "id_proveedor": 1,
            "tipo_repuesto": "llantas"
        },
        {
            "id_repuesto": 10,
            "nombre": "llanta de aluminio",
            "precio": 10000,
            "stock": 20,
            "id_proveedor": 1,
            "tipo_repuesto": "llantas"
        },
        {
            "id_repuesto": 11,
            "nombre": "llanta de magnesio",
            "precio": 15000,
            "stock": 20,
            "id_proveedor": 1,
            "tipo_repuesto": "llantas"
        }
    ]

```

verbo HTTP: POST Endpoint:/reparaciones/presupuestos

El body de la petición consta de dos partes: por un lado los datos finales del presupuesto a crear y por el otro los datos de los repuestos necesarios para el servicio. Se tendrán tantos objetos "repuesto*n*" como repuestos se requieran para el servicio.

```
"presupuesto" : {
    "tipo_trabajo" : "tipo de trabajo a realizar (service o reparacion)",
    "detalle" : "texto adicional opcional a ingresar al trabajo a realizar",
    "importe_total" : importe total del trabajo a realizar (suma de los montos totales de cada repuesto utilizado en el trabajo),
    "dominio_vehiculo" : "dominio del vehiculo sobre el cual se realizará el trabajo"
    },
"facturaciones":{
    "repuesto1":{
        "precio_total": precio total a imputar por el repuesto (cantidad necesaria del repuesto * cantidad necesaria del repuesto),
        "cantidad": cantidad necesaria del repuesto,
        "id_repuesto": id del repuesto
    }...
}

```

Si la solicitud POST al servidor es exitosa se devuelve un archivo Json con el mensaje:

```
{
    "resultado": "Presupuesto creado"
}
```

Si existe algún error en el dominio ingresado se devolverá un mensaje. Ejemplo:

```
{
    "error": "Dominio no encontrado"
}
```

Si existe algún problema con el body ingresado se devolverá un mensaje indicando el campo a revisar. Por ejemplo:

```
{
    "error": "Por favor ingrese el importe total del trabajo a realizar"
}

{
    "error": "Por favor revise las cantidades de los repuestos utilizados en el presupuesto"
}
```
