package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;

public class DAOadulto_mayor {

	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException {
		return conexion.getConnection();
	}

	/*
	 * Registra adulto mayor y llama la funcion de la clase
	 * DAOcuidador_has_adulto mayor llamada relacionAdultoCuidador para crear
	 * relacion
	 */
	public String registrarAdultomayor(int id_cuidador, String nombre, String apellido, String nacimiento,
			int diagnostico) throws SQLException {

		String seleccio = null;
		boolean estadoOp = false;
		List<VOadulto_mayor> lista = new ArrayList<VOadulto_mayor>();
		ResultSet resultSet = null;
		String sql = null;

		/*
		 * Se abre conexion
		 */

		con = obtenerConexion();
		try {
			con.setAutoCommit(false);
			/*
			 * Metodo POST
			 * inyeccion sql tabla adulto_mayor nombre apellido nacimiento
			 * diagnostico
			 */
			seleccio = "INSERT INTO `adulto_mayor` (`nombre`,`apellido`,`nacimiento`, `diagnostico`)VALUES (?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setString(1, nombre);
			statement.setString(2, apellido);
			statement.setString(3, nacimiento);
			statement.setInt(4, diagnostico);
			estadoOp = statement.executeUpdate() > 0;
			/*
			 * Se otra consulta para obtener id_adulto_mayor anteriormente registrado
			 * 
			 * Llama la funcion relacionAdultoCuidador y envia dicha id_adulto_mayor junto con id_cuidador para generar la relacion
			 * Metodo GET automatico
			 */

			sql = "SELECT `id_adulto_mayor` FROM `adulto_mayor` WHERE nombre= ? AND apellido=? AND nacimiento=?";
			statement = con.prepareStatement(sql);
			statement.setString(1, nombre);
			statement.setString(2, apellido);
			statement.setString(3, nacimiento);
			resultSet = statement.executeQuery();
			int aux = 0;
			while (resultSet.next()) {
				VOadulto_mayor p = new VOadulto_mayor();
				aux = resultSet.getInt(1);
			}

			con.commit();
			statement.close();
			con.close();
			
			DAOcuidador_has_adultomayor aa=new DAOcuidador_has_adultomayor();
			aa.relacionAdultoCuidador(id_cuidador, aux);

		} catch (SQLException e) {
			con.rollback();
			e.printStackTrace();
		}

		return "Registrado con exito";
	}

	


}
