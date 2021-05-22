package com.nonapp.ws.decorator;

public abstract class MedicacionDecorator implements Componentes{
private Componentes componentes;

public MedicacionDecorator(Componentes componentes){
	setComponentes(componentes);
}

	public Componentes getComponentes(){
		return componentes;
	}

	public void setComponentes(Componentes componentes) {
	this.componentes=componentes;
	}
}
