package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOprogreso;
import com.nonapp.ws.res.VO.VOrecomendacion;

public class DAOrecomendacion {

	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException {
		return conexion.getConnection();
	}

	/*
	 * Metodo aleatorio para consultar alguna recomentadion del 1 al 3 (por el momento)
	 */
	public String consultaRecomendaciones() throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOrecomendacion> lista = new ArrayList<VOrecomendacion>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();
		int reco = (int) Math.floor(Math.random()*3+1);
		

		try {
			sql = "select * from recomendacion WHERE id=(?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, reco);
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
