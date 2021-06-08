package com.nonapp.ws.res.services;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONException;

import com.nonapp.ws.factory.factory;
import com.nonapp.ws.mod.dao.DAOadulto_mayor;
import com.nonapp.ws.mod.dao.DAOconsultaC;
import com.nonapp.ws.mod.dao.DAOcuidador;
import com.nonapp.ws.mod.dao.DAOprogreso;
import com.nonapp.ws.mod.dao.DAOprogreso2;
import com.nonapp.ws.mod.dao.DAOrecomendacion;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOconsultaC;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOprogreso;
import com.nonapp.ws.res.VO.VOprogreso2;
import com.nonapp.ws.res.VO.VOrecomendacion;

@Path("/Auto")

public class serviceAutomatico {
	
	
	@GET
	@Path("/consultaAdultomayor")
	@Produces({MediaType.APPLICATION_JSON})
	
	public Response Cuidador(VOcuidador cuidador){
		try{
			if(factory.getEntidad(DAOcuidador.class).registrar(cuidador.tojson())!=false){

				return Response.status(Response.Status.CREATED).entity("{\"Status\": \"hecho\"}").build();
			}
		}catch(SQLException e){
			e.printStackTrace();
		}
		return Response.status(Response.Status.CREATED).entity("{\"Status\": \"error al registrar\"}").build();
	}
	
	

	@POST
	@Path("/guardarProgreso")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public Response actualizar(VOprogreso progreso) throws SQLException, JSONException{

		DAOprogreso daoprogreso=new DAOprogreso();
		String a=daoprogreso.registrarNuevaActivi(progreso.getId_adulto_mayor(), progreso.getId_actividades(), progreso.getValoracionIni(),progreso.getValoracionFin(), progreso.getFecha());
		if(a.isEmpty()!=true){
			return Response.status(Response.Status.CREATED).entity("{\"Status\": \"hecho\"}").build();
		}else{
			return Response.status(Response.Status.CREATED).entity("{\"Status\": \"error al registrar\"}").build();
		}

	}
	
	
	@POST
	@Path("/cIniciales")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String consultaCriIni(VOprogreso2 progreso2) throws SQLException, JSONException{
		DAOprogreso2 daoprogreso2=new DAOprogreso2();
		String a=daoprogreso2.consultarCriteriosIniciales(progreso2.getId_adulto_mayor(),progreso2.getId_actividades(),1);	
		if(a.isEmpty()){
			return "0";
		}else{
			return a;
		}
			
	}
	
	@POST
	@Path("/CriteriosFin")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String guardarCriFin(VOprogreso2 progreso2) throws SQLException, JSONException{
		DAOprogreso2 daoprogreso2=new DAOprogreso2();
		String a=daoprogreso2.guardarCriteriosFinales(progreso2.getDescripcion(),progreso2.getValoracion(),progreso2.getId_adulto_mayor(),progreso2.getId_actividades(),2);	
		if(a.isEmpty()){
			return "0";
		}else{
			return a;
		}
			
	}
	
	@POST
	@Path("/cFinales")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String consultaCriFin(VOprogreso2 progreso2) throws SQLException, JSONException{
		DAOprogreso2 daoprogreso2=new DAOprogreso2();
		String a=daoprogreso2.consultarCriteriosFinales(progreso2.getId_adulto_mayor(),progreso2.getId_actividades(),progreso2.getCriterio());	
		if(a.isEmpty()){
			return "1";
		}else{
			return a;
		}
			
	}
	
	@POST
	@Path("/cValoraciones")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String consultaValoraciones(VOprogreso2 progreso2) throws SQLException, JSONException{
		DAOprogreso2 daoprogreso2=new DAOprogreso2();
		String a=daoprogreso2.consultarValoraciones(progreso2.getId_adulto_mayor(),progreso2.getId_actividades());	
		return a;
			
	}
	
	
	@GET
	@Path("/reco")
	@Produces({MediaType.APPLICATION_JSON})
	public String recomendaciones(){
		String a="";
		DAOrecomendacion recomendacion=new DAOrecomendacion();
		try{
			 a=recomendacion.consultaRecomendaciones();

		}catch(SQLException e){
			e.printStackTrace();
		}
		return a;

	}
	
	
	@POST
	@Path("/TotalAdultos")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String totalAdultos(VOconsultaC consultaC) throws SQLException, JSONException{
		DAOconsultaC daoconsultaC=new DAOconsultaC();
		String a=daoconsultaC.ConsultaC(consultaC.getDiagnostico());	
		return a;
			
	}
	
}
