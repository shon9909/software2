package com.nonapp.ws.decorator;

public class MedicacionPocoContinua extends Medicacion {
	public String getHora(){
		return "Medicacion Poco Continua-Cada 24 Horas";
	}
	public String getPotencia(){
		return "Medicamento Leve";
	}
}
