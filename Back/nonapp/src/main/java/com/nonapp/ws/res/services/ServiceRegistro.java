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
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;





@Path("/Registro")


public class ServiceRegistro {
	
	@POST
	@Path("/Cuidador")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	
	public Response Cuidador(VOcuidador cuidador){
		DAOcuidador cuid=new DAOcuidador();
		try{
			if(cuid.registrarCuidador(cuidador)!=false){

				return Response.status(Response.Status.CREATED).entity("{\"Status\": \"hecho\"}").build();
			}
		}catch(SQLException e){
			e.printStackTrace();
		}
		return Response.status(Response.Status.CREATED).entity("{\"Status\": \"error al registrar\"}").build();
	}

	@POST
	@Path("/Adulto")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	
	public Response Adulto(VOadulto_mayor adulto){
		DAOadulto_mayor adult=new DAOadulto_mayor();
		
		try{
			if(adult.registrarAdultomayor(adulto)!=false){

				return Response.status(Response.Status.CREATED).entity("{\"Status\": \"hecho\"}").build();
			}
		}catch(SQLException e){
			e.printStackTrace();
		}
		return Response.status(Response.Status.CREATED).entity("{\"Status\": \"error al registrar adulto mayor\"}").build();
	}
	
	
	
	
	/*
	 * Valida el login, si es correcto devuelve todos los adultos mayores registrados con la id_cuidador 
	 * que acaba de iniciar sesion
	 */
	@POST
	@Path("/ValidarLogin")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String validarLogin(VOcuidador cuidador) throws SQLException, JSONException{

		DAOcuidador daocuidador=new DAOcuidador();
		String a=daocuidador.ingresoCuidador(cuidador.getEmail(), cuidador.getPassword());
	
		a=a.substring(1,a.length()-1);
		
		JSONObject aux = new JSONObject(a);
		
		DAOcuidador_has_adultomayor daorela=new DAOcuidador_has_adultomayor();
		String b=daorela.ingresoCuidadorConsultaAdulto(aux.getInt("id_cuidador"));
		return b;
	
	}	
	
	@POST
	@Path("/ValidarLoginDATOS")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String validarLoginDATOS(VOcuidador cuidador) throws SQLException, JSONException{

		DAOcuidador daocuidador=new DAOcuidador();
		String a=daocuidador.ingresoCuidador(cuidador.getEmail(), cuidador.getPassword());
	
		return a;
	
	}
	

	@POST
	@Path("/Actualizar")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String actualizar(VOcuidador cuidador) throws SQLException, JSONException{

		DAOadulto_mayor daoadult=new DAOadulto_mayor();
		String a=daoadult.actualizar2(cuidador);
	
		return a;
	
	}
	
}