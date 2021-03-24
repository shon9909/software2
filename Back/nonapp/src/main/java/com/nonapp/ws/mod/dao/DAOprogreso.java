package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOprogreso;
import java.util.Date;

public class DAOprogreso {

	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException {
		return conexion.getConnection();
	}
	/*
	 * Metodo POST registrar progreso que viene de actividades (psicoterapia,
	 * medicacion o descanso)
	 */

	public String guardarProgreso(int id_adulto_mayor, int id_actividades, int valoracion) throws SQLException {
		String seleccio = null;
		boolean estadoOp = false;

		Date objDate = new Date();
		String strDateFormat = "YYYY-MM-dd";
		SimpleDateFormat objSDF = new SimpleDateFormat(strDateFormat);
		String aux = objSDF.format(objDate);

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
			seleccio = "INSERT INTO `progreso` (`id_adulto_mayor`,`id_actividades`,`valoracion`,`fecha`)VALUES (?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setInt(1, id_adulto_mayor);
			statement.setInt(2, id_actividades);
			statement.setInt(3, valoracion);
			statement.setString(4, aux);
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

		return "Registro de progreso con exito";

	}

	/*
	 * Metodo GET para consultar progreso
	 */
	public String consultaMiProgreso(int id_adulto_mayor) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOprogreso> lista = new ArrayList<VOprogreso>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "select * from progreso where id_adulto_mayor = (?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_adulto_mayor);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOprogreso p = new VOprogreso();
				p.setId_adulto_mayor(resultSet.getInt(1));
				p.setId_actividades(resultSet.getInt(2));
				p.setValoracion(resultSet.getInt(3));
				p.setFecha(resultSet.getString(4));
				lista.add(p);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}

}
