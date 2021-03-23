package com.nonapp.ws.res.VO;
/*
 *3 tratamientos que pudo haber tenido el adulto mayor (psicoterapia, medicacion o descanso) 
 *
 */
public class VOpotencia {
	private int id_potencia;
	private String nombre;
	private String descripcion;
	public int getId_potencia() {
		return id_potencia;
	}
	public void setId_potencia(int id_potencia) {
		this.id_potencia = id_potencia;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}	
	
}
