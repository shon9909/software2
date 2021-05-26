package com.nonapp.ws.decorator;

public class Recordatorio extends MedicacionDecorator{

	
	public Recordatorio(Componentes componentes){
		super(componentes);
	}
	
	public String getHora() {
	return getComponentes().getHora()+" No olvides tomar tus medicamentos!";
	}

	public String getPotencia() {
		return getComponentes().getPotencia();
	}

}
