package com.nonapp.ws.res.services;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.nonapp.ws.mod.dao.DAOcuidador;
import com.nonapp.ws.res.VO.VOcuidador;

public class ServiceAutomatico {
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
		return Response.status(Response.Status.CREATED).entity("{\"Status\": \"error\"}").build();
	}

	@POST
	@Path("/ValidarLogin")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public String validarLogin(VOcuidador cuidador) throws SQLException{
		DAOcuidador daocuidador=new DAOcuidador();
		String a=daocuidador.ingresoCuidador(cuidador.getEmail(), cuidador.getPassword());
		return a;
	}	
}
