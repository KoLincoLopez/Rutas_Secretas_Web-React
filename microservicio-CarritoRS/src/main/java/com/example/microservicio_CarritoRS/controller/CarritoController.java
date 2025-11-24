package com.example.microservicio_CarritoRS.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.microservicio_CarritoRS.entity.Carrito;
import com.example.microservicio_CarritoRS.service.CarritoService;   
@RestController
@RequestMapping("/carritos")
@CrossOrigin(origins = "*")
public class CarritoController {

     private final CarritoService service;

    public CarritoController(CarritoService service) {
        this.service = service;
    }

    @PostMapping
    public Carrito agregar(@RequestBody Carrito carrito) {
        return service.agregar(carrito);
    }

    @GetMapping("/usuario/{idUsuario}")
    public List<Carrito> listarPorUsuario(@PathVariable Long idUsuario) {
        return service.listarPorUsuario(idUsuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtener(@PathVariable Long id) {
        return service.obtenerPorId(id)
                .map(i -> ResponseEntity.ok(i))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @RequestBody Carrito carrito) {
        return ResponseEntity.ok(service.actualizar(id, carrito));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.ok().body("Eliminado");
    }



}