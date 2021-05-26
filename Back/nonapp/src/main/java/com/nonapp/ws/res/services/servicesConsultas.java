
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

import com.nonapp.ws.mod.dao.DAOactividades;
import com.nonapp.ws.mod.dao.DAOadulto_mayor;
import com.nonapp.ws.mod.dao.DAOcuidador;
import com.nonapp.ws.mod.dao.DAOcuidador_has_adultomayor;
import com.nonapp.ws.mod.dao.DAOdiagnostico;
import com.nonapp.ws.mod.dao.DAOprogreso;
import com.nonapp.ws.res.VO.VOactividades;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOdiagnostico;
import com.nonapp.ws.res.VO.VOprogreso;

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

		
	@POST
	@Path("/Actividades")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String Actividades(VOactividades actividades) throws SQLException, JSONException{

		DAOactividades daoactividades=new DAOactividades();
		String a=daoactividades.consultarActividades(actividades.getId_diagnostico());
		return a;
	
	}
	
	
	@POST
	@Path("/Miprogreso")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String Actividades(VOprogreso progreso) throws SQLException, JSONException{

		DAOprogreso daoprogreso=new DAOprogreso();
		String a=daoprogreso.consultaMiProgreso(progreso.getId_adulto_mayor());
		if(a.isEmpty()){	
			return a="1";
		}else{
			return a;
		}
	
		
	
	}
	
	
	
	@POST
	@Path("/Historial")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String Actividades(VOadulto_mayor adulto) throws SQLException, JSONException{

		DAOadulto_mayor daoadulto_mayor=new DAOadulto_mayor();
		String a=daoadulto_mayor.consultarHistorial(adulto.getId_adulto_mayor());	
		if(a.isEmpty()){
			return "1";
		}else{
			return a;
		}
			
	}
	@POST
	@Path("/HistorialPerfil")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String ActividadesPerfil(VOadulto_mayor adulto) throws SQLException, JSONException{
		DAOadulto_mayor daoadulto_mayor=new DAOadulto_mayor();
		String a=daoadulto_mayor.consultarHistorialPerfil(adulto.getId_adulto_mayor());	
		if(a.isEmpty()){
			return "1";
		}else{
			return a;
		}
			
	}
	
}
