package com.nonapp.ws.decorator;

public class MedicacionContinua extends Medicacion{
public String getHora(){
	return "Medicacion Continua-Cada 8 Horas";
}
public String getPotencia(){
	return "Medicamento fuerte";
}
}
