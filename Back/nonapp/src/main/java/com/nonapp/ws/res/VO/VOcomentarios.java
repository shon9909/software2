package com.nonapp.ws.res.VO;

public class VOcomentarios {
private int id_comentario;
private int id_respuesta;
private String nombre;
private String fecha;
private String comentario;
public int getId_comentario() {
	return id_comentario;
}
public void setId_comentario(int id_comentario) {
	this.id_comentario = id_comentario;
}
public int getId_respuesta() {
	return id_respuesta;
}
public void setId_respuesta(int id_respuesta) {
	this.id_respuesta = id_respuesta;
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public String getFecha() {
	return fecha;
}
public void setFecha(String fecha) {
	this.fecha = fecha;
}
public String getComentario() {
	return comentario;
}
public void setComentario(String comentario) {
	this.comentario = comentario;
}

	
}
