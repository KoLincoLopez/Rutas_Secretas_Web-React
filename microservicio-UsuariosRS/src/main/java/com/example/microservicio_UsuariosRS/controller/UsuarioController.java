package com.example.microservicio_UsuariosRS.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.microservicio_UsuariosRS.entity.Usuario;
import com.example.microservicio_UsuariosRS.service.UsuarioService;

import java.util.List;
@RestController
@RequestMapping ("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
     private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @PostMapping("/registrar")
    public ResponseEntity<?> registrar(@RequestBody Usuario usuario) {
        if (usuario.getEmail() == null || usuario.getPassword() == null) {
            return ResponseEntity.badRequest().body("Email y password requeridos");
        }
        return ResponseEntity.ok(service.registrar(usuario));
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestParam String email, @RequestParam String password) {
        return service.login(email, password)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(400).build());
    }

    @GetMapping
    public List<Usuario> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtener(@PathVariable Long id) {
        return service.obtenerPorId(id)
                .map(u -> ResponseEntity.ok(u))
                .orElse(ResponseEntity.notFound().build());
    }


}    
