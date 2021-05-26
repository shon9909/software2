package com.nonapp.ws.res.VO;

public class VOactividades {
	private int id_actividades;
	private String nombre;
	private String descripcion;
	private int id_potencia;
	private int id_diagnostico;

	private float valoracionIni;
	private float valoracionFin;
	
	public float getValoracionIni() {
		return valoracionIni;
	}
	public void setValoracionIni(float valoracionIni) {
		this.valoracionIni = valoracionIni;
	}
	public float getValoracionFin() {
		return valoracionFin;
	}
	public void setValoracionFin(float valoracionFin) {
		this.valoracionFin = valoracionFin;
	}
	private String fecha;
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public int getId_actividades() {
		return id_actividades;
	}
	public void setId_actividades(int id_actividades) {
		this.id_actividades = id_actividades;
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
	public int getId_potencia() {
		return id_potencia;
	}
	public void setId_potencia(int id_potencia) {
		this.id_potencia = id_potencia;
	}
	public int getId_diagnostico() {
		return id_diagnostico;
	}
	public void setId_diagnostico(int id_diagnostico) {
		this.id_diagnostico = id_diagnostico;
	}

	




}
