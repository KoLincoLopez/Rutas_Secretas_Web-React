package com.example.microservicio_productosRS.controller;

import com.example.microservicio_productosRS.entity.Producto;
import com.example.microservicio_productosRS.service.ProductoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin("*")
public class ProductoController {

     private final ProductoService service;

    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @PostMapping
    public Producto crear(@RequestBody Producto producto) {
        return service.crearProducto(producto);
    }

    @GetMapping
    public List<Producto> listar() {
        return service.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Producto obtener(@PathVariable Integer id) {
        return service.obtenerPorId(id);
    }

    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Integer id, @RequestBody Producto producto) {
        return service.actualizarProducto(id, producto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        service.eliminarProducto(id);
    }

}
