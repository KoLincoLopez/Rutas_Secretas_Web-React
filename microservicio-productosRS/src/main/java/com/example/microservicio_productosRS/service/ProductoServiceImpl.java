package com.example.microservicio_productosRS.service;

import com.example.microservicio_productosRS.entity.Producto;
import com.example.microservicio_productosRS.repository.ProductoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {     

    private final ProductoRepository repo;

    public ProductoServiceImpl(ProductoRepository repo) {
        this.repo = repo;
    }

    @Override
    public Producto crearProducto(Producto producto) {
        return repo.save(producto);
    }

    @Override
    public List<Producto> obtenerTodos() {
        return repo.findAll();
    }

    @Override
    public Producto obtenerPorId(Integer id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Producto actualizarProducto(Integer id, Producto producto) {
        Producto existente = obtenerPorId(id);
        if (existente != null) {
            existente.setNombre(producto.getNombre());
            existente.setDescripcion(producto.getDescripcion());
            existente.setPrecio(producto.getPrecio());
            existente.setImagenUrl(producto.getImagenUrl());
            existente.setStock(producto.getStock());
            return repo.save(existente);
        }
        return null;
    }

    @Override
    public void eliminarProducto(Integer id) {
        repo.deleteById(id);
    }

}
