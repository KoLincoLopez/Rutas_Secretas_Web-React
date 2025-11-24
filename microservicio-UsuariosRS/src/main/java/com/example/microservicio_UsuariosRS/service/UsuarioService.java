package com.example.microservicio_UsuariosRS.service;

import com.example.microservicio_UsuariosRS.entity.Usuario;
import java.util.List;
import java.util.Optional;

public interface UsuarioService {
    Usuario registrar(Usuario usuario);
    Optional<Usuario> login(String email, String password);
    List<Usuario> listar();
    Optional<Usuario> obtenerPorId(Long id);

}
