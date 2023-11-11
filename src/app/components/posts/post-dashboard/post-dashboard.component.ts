/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "@angular/core";

import { PostService } from "../services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-dashboard",
  templateUrl: "./post-dashboard.component.html",
  styleUrls: ["./post-dashboard.component.scss"],
  providers: [PostService],
})
export class PostDashboardComponent {
  comentarios: string;
  patente: string;
  fabricante: string;
  modelo: string;
  activo: string;
  tipo : string;
  costo: string;
  estado: string;
  buttonText = "Guardar";

  constructor(private postService: PostService, private router: Router) {}

  createPost(): void {
    const postData = {
      comentarios: this.comentarios,
      patente: this.patente,
      published: new Date(),
      fabricante: this.fabricante,
      modelo: this.modelo,
      activo: this.activo,
      tipo: this.tipo,
      costo: this.costo,
      estado: this.estado
    };
    this.postService.create(postData);
    this.fabricante = "";
    this.modelo = "";
    this.activo = "";
    this.comentarios = "";
    this.buttonText = "Post Created";
    this.patente = "";
    this.tipo = "";
    this.costo = "";
    this.estado = "";
    setTimeout(() => (this.buttonText = "Create Post"), 3000);
    this.returnToList();
  }

  returnToList() {
    this.router.navigate(["/"]);
  }
}
