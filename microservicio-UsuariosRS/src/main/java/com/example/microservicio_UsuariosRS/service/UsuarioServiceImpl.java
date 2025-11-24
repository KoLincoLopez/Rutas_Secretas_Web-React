package com.example.microservicio_UsuariosRS.service;

import com.example.microservicio_UsuariosRS.entity.Usuario;
import com.example.microservicio_UsuariosRS.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UsuarioServiceImpl implements UsuarioService {
    private final UsuarioRepository repo;

    public UsuarioServiceImpl(UsuarioRepository repo) {
        this.repo = repo;
    }

    @Override
    public Usuario registrar(Usuario usuario) {
        return repo.save(usuario);
    }

    @Override
    public Optional<Usuario> login(String email, String password) {
        Optional<Usuario> u = repo.findByEmailAndPassword(email, password);
        if (u.isPresent() && u.get().getPassword().equals(password)) {
            return u;
        }
        return Optional.empty();
    }

    @Override
    public List<Usuario> listar() {
        return repo.findAll();
    }

    @Override
    public Optional<Usuario> obtenerPorId(Long id) {
        return repo.findById(id);
    }

}
