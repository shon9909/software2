package com.nonapp.ws.factory;

import com.nonapp.ws.mod.dao.DAOadulto_mayor;
import com.nonapp.ws.mod.dao.DAOcuidador;

public class factory{

	public static entidad getEntidad(Class clazz) {

		entidad Entidad = null;
		if (clazz.getSimpleName().equals("DAOadulto_mayor")) {
			
			Entidad = new DAOadulto_mayor();
		}
		if (clazz.getSimpleName().equals("DAOcuidador")) {
			Entidad = new DAOcuidador();
		}

		return Entidad;
	}
}
