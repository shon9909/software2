package com.nonapp.ws.res.services;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.nonapp.ws.factory.factory;
import com.nonapp.ws.mod.dao.DAOcuidador;
import com.nonapp.ws.res.VO.VOcuidador;

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
	
}
