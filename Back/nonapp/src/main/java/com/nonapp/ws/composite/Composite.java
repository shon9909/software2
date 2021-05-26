package com.nonapp.ws.composite;

import com.google.gson.Gson;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;

public class Composite {
	
	public static <T> VOcuidador fromJsonVOcuidador(String s){
		Gson b = new Gson();
		VOcuidador cuidador=(VOcuidador) b.fromJson(s, VOcuidador.class);
		return cuidador;
	
}
	
	
	public static String ToJson(Object clazz){
		Gson g=new Gson();
		String k=g.toJson(clazz);
		return k;
	}
	
	

	public static <T> VOadulto_mayor fromJsonVOadulto_mayor(String s){
			Gson b = new Gson();
			VOadulto_mayor adulto=(VOadulto_mayor) b.fromJson(s, VOadulto_mayor.class);
			return adulto;
		
	}
}
