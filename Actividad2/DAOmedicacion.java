package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.fachada.FachadaC;
import com.nonapp.ws.res.VO.VOactividades;

public class DAOmedicacion {
	private Connection con;
	private PreparedStatement statement;
	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
	
	public String registraMedicacion(int id_medicacion, String nombreMedicacion,  String tipoMedicacion, String fecha) throws SQLException {
		String seleccio = null;
		boolean estadoOp = false;
		/*
		 * Se abre conexion
		 */
		con = obtenerConexion();
		try {
			con.setAutoCommit(false);
			/*
			 * inyeccion sql tabla cuidador_has_adultomayor id_cuidador
			 * id_adulto_mayor
			 */
			seleccio = "INSERT INTO `medicacion` (`id_medicacion`,`nombreMedicacion`,`tipoMedicacion`,`fecha`)VALUES (?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setInt(1, id_medicacion);
			statement.setString(2, nombreMedicacion);
			statement.setString(3, tipoMedicacion);
			statement.setString(5, fecha);
			estadoOp = statement.executeUpdate() > 0;
			/*
			 * Se realiza el commit y se cierra conexion
			 */
			con.commit();
			statement.close();
			con.close();

		} catch (SQLException e) {
			con.rollback();
			e.printStackTrace();
		}

		return "Registro de la medicacion con exito";

	}
	
	
	public String borrarMedicacion(int id_medicacion) throws SQLException {
		String seleccio = null;
		boolean estadoOp = false;
		/*
		 * Se abre conexion
		 */
		con = obtenerConexion();
		try {
			con.setAutoCommit(false);
			/*
			 * inyeccion sql tabla cuidador_has_adultomayor id_cuidador
			 * id_adulto_mayor
			 */
			seleccio = "DELETE FROM `medicacion` WHERE `id_medicacion` = ?";
			statement = con.prepareStatement(seleccio);
			statement.setInt(1, id_medicacion);
			estadoOp = statement.executeUpdate() > 0;
			/*
			 * Se realiza el commit y se cierra conexion
			 */
			con.commit();
			statement.close();
			con.close();

		} catch (SQLException e) {
			con.rollback();
			e.printStackTrace();
		}

		return "Borrado de la medicacion con exito";
	}
	
	

}
