package com.example.microservicio_CarritoRS.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.microservicio_CarritoRS.entity.Carrito;
import java.util.List;

public interface CarritoRepository  extends JpaRepository<Carrito, Long> {
    List<Carrito> findByIdUsuario(Long idUsuario);

}
