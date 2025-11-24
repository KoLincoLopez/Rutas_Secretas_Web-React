package com.example.microservicio_CarritoRS.service;

import com.example.microservicio_CarritoRS.entity.Carrito;
import com.example.microservicio_CarritoRS.repository.CarritoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CarritoServiceImpl implements CarritoService {
     private final CarritoRepository repo;

    public CarritoServiceImpl(CarritoRepository repo) {
        this.repo = repo;
    }

    @Override
    public Carrito agregar(Carrito carrito) {
        return repo.save(carrito);
    }

    @Override
    public List<Carrito> listarPorUsuario(Long idUsuario) {
        return repo.findByIdUsuario(idUsuario);
    }

    @Override
    public Optional<Carrito> obtenerPorId(Long id) {
        return repo.findById(id);
    }

    @Override
    public Carrito actualizar(Long id, Carrito carrito) {
        return repo.findById(id).map(existing -> {
            existing.setCantidad(carrito.getCantidad());
            existing.setSubtotal(carrito.getSubtotal());
            return repo.save(existing);
        }).orElseGet(() -> {
            carrito.setIdCarrito(id);
            return repo.save(carrito);
        });
    }

    @Override
    public void eliminar(Long id) {
        repo.deleteById(id);
    }

}
