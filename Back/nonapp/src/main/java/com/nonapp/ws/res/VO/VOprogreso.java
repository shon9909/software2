package com.nonapp.ws.res.VO;

public class VOprogreso {
	private int id_adulto_mayor;
	private int id_actividades;
	private float valoracionIni;
	private float valoracionFin;
	private String fecha;
	
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
	public int getId_adulto_mayor() {
		return id_adulto_mayor;
	}
	public void setId_adulto_mayor(int id_adulto_mayor) {
		this.id_adulto_mayor = id_adulto_mayor;
	}
	public int getId_actividades() {
		return id_actividades;
	}
	public void setId_actividades(int id_actividades) {
		this.id_actividades = id_actividades;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}



}
