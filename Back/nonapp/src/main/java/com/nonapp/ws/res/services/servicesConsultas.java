
package com.nonapp.ws.res.services;
import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.codehaus.jettison.json.JSONTokener;

import com.nonapp.ws.mod.dao.DAOadulto_mayor;
import com.nonapp.ws.mod.dao.DAOcuidador;
import com.nonapp.ws.mod.dao.DAOcuidador_has_adultomayor;
import com.nonapp.ws.mod.dao.DAOdiagnostico;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOdiagnostico;

@Path("/Consultas")
public class servicesConsultas {

	@POST
	@Path("/Diag")
	@Produces({MediaType.APPLICATION_JSON})
	
	public String Diagnostico() throws SQLException{
		DAOdiagnostico diag=new DAOdiagnostico();
		String a=diag.consultaDiagnosticos();
		return a;
	}

		
}
