package com.nonapp.ws.decorator;

public class main {
public static void main(String[] args) {
	Componentes recor=new MedicacionContinua();
	recor=new Recordatorio(recor);
	System.out.println(recor.getHora());
	System.out.println("La potencia es: "+recor.getPotencia());
	
	System.out.println("\n");
	Componentes recor2=new MedicacionPocoContinua();
	recor2=new Recordatorio(recor2);
	System.out.println(recor2.getHora());
	System.out.println("La potencia es: "+recor2.getPotencia());
		
}
}
