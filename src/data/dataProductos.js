let productos = {
    Producto {
        tipo: String
        subtipo: String
        nombre: String
        id: String
        cantidad: Number
        valor: Number
        descripcion: String
        ventas: [  // Array de ventas
          {
            fecha_venta: Date
            cantidad_vendida: Number
            vendedor: {  // Nuevo objeto vendedor
              id_vendedor: String
              nombre_vendedor: String
              // Podrías agregar más atributos aquí si es necesario, como "email" o "teléfono"
            }
          },
          {
            fecha_venta: Date
            cantidad_vendida: Number
            vendedor: {
              id_vendedor: String
              nombre_vendedor: String
            }
          }
          // Más ventas...
        ]
        fecha_ingreso: Date
        proveedor: String (opcional)
        estado: String (disponible, agotado, en oferta, etc.)
        ubicacion_almacen: String (opcional)
        descuento: Number (opcional)
      }
      
}