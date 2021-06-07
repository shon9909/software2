package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.fachada.FachadaC;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOprogreso;
import com.nonapp.ws.res.VO.VOrecomendacion;

public class DAOrecomendacion {

	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}

	/*
	 * Metodo aleatorio para consultar alguna recomentadion del 1 al 3 (por el momento)
	 */
	public String consultaRecomendaciones() throws SQLException {
		Gson gson = new Gson();
		List<VOrecomendacion> lista = new ArrayList<VOrecomendacion>();
		String seleccio = null;
		ResultSet resultSet = null;
		String a = "";
		con = obtenerConexion();
		/*
		 * Se abre conexion
		 */
		con = obtenerConexion();
		try {
			con.setAutoCommit(false);
			/*
			 * inyeccion sql tabla cuidador email nombre password (encriptada)
			 */
			seleccio = "SELECT * FROM recomendacion ORDER BY RAND() LIMIT 1;";
			statement = con.prepareStatement(seleccio);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOrecomendacion p = new VOrecomendacion();
				p.setId(resultSet.getInt(1));
				p.setDescripcion(resultSet.getString(2));
				lista.add(p);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}
	
	
	/*
	 * Main prueba aqui vamos xd
	 */
	public static void main(String[] args) throws SQLException {
		
		 DAOrecomendacion p=new DAOrecomendacion();
		 System.out.println(p.consultaRecomendaciones());
	  
	}

}