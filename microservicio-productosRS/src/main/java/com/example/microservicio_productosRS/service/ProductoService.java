package com.example.microservicio_productosRS.service;


import com.example.microservicio_productosRS.entity.Producto;
import java.util.List;

public interface ProductoService {

    Producto crearProducto(Producto producto);
    List<Producto> obtenerTodos();
    Producto obtenerPorId(Integer id);
    Producto actualizarProducto(Integer id, Producto producto);
    void eliminarProducto(Integer id);

}
