package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOactividades;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOerror;

public class DAOactividades {
	private Connection con;
	private PreparedStatement statement;
	private Connection obtenerConexion() throws SQLException {
		return conexion.getConnection();
	}
	
	
	public String consultarActividades(int id_diagnostico) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOactividades> lista = new ArrayList<VOactividades>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {

			sql = "SELECT * FROM `actividades` WHERE id_diagnostico= ?";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_diagnostico);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOactividades p = new VOactividades();
				p.setId_actividades((resultSet.getInt(1)));
				p.setNombre(resultSet.getString(2));
				p.setDescripcion(resultSet.getString(3));
				p.setId_potencia((resultSet.getInt(4)));
				p.setId_diagnostico((resultSet.getInt(5)));
				lista.add(p);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return a;
	}
	
	
	
	
	
	
}
