package com.example.microservicio_productosRS.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.microservicio_productosRS.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {


}
