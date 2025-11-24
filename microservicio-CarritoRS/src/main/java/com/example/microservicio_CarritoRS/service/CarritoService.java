package com.example.microservicio_CarritoRS.service;

import com.example.microservicio_CarritoRS.entity.Carrito;

import java.util.List;
import java.util.Optional;

public interface CarritoService {
    Carrito agregar(Carrito carrito);
    List<Carrito> listarPorUsuario(Long idUsuario);
    Optional<Carrito> obtenerPorId(Long id);
    Carrito actualizar(Long id, Carrito carrito );
    void eliminar(Long id);

    
}