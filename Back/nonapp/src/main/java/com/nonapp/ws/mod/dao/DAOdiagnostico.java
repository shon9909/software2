package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOdiagnostico;
import com.nonapp.ws.res.VO.VOprogreso;

public class DAOdiagnostico {
	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException {
		return conexion.getConnection();
	}
	
	public String consultaDiagnosticos() throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOdiagnostico> lista = new ArrayList<VOdiagnostico>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "select * from `diagnostico`";
			statement = con.prepareStatement(sql);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOdiagnostico p = new VOdiagnostico();
				p.setId_diagnostico(resultSet.getInt(1));
				p.setNombre(resultSet.getString(2));
				p.setDescripcion(resultSet.getString(3));
				lista.add(p);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}
	
	
	
}
