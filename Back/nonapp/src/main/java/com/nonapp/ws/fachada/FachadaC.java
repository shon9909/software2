package com.nonapp.ws.fachada;

import java.sql.Connection;
import java.sql.SQLException;

import com.nonapp.ws.mod.conexion.conexion;
public class FachadaC{
	public static Connection obtenerConexion() throws SQLException {	
		return FachadaC.getConnection();	
	}
	
public static Connection getConnection() throws SQLException {
	return conexion.getDataSource().getConnection();
}	
}