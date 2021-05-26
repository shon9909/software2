package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.composite.Composite;
import com.nonapp.ws.fachada.FachadaC;
import com.nonapp.ws.factory.entidad;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOactividades;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;


public class DAOadulto_mayor implements entidad {

	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
	
	/*
	 * Registra adulto mayor y llama la funcion de la clase
	 * DAOcuidador_has_adulto mayor llamada relacionAdultoCuidador para crear
	 * relacion
	 */
	public boolean registrar(String a) throws SQLException {
		// int id_cuidador, String nombre, String apellido, String nacimiento,
		VOadulto_mayor adult = Composite.fromJsonVOadulto_mayor(a);
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
			 * Metodo POST inyeccion sql tabla adulto_mayor nombre apellido
			 * nacimiento diagnostico
			 */
			seleccio = "INSERT INTO `adulto_mayor` (`nombre`,`apellido`,`nacimiento`, `diagnostico`, `id_cuidador`)VALUES (?,?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setString(1, adult.getNombre());
			statement.setString(2, adult.getApellido());
			statement.setString(3, adult.getNacimiento());
			statement.setInt(4, adult.getDiagnostico());
			statement.setInt(5, adult.getId_cuidador());
			estadoOp = statement.executeUpdate() > 0;
			/*
			 * Se otra consulta para obtener id_adulto_mayor anteriormente
			 * registrado
			 * 
			 * Llama la funcion relacionAdultoCuidador y envia dicha
			 * id_adulto_mayor junto con id_cuidador para generar la relacion
			 * Metodo GET automatico
			 */

			sql = "SELECT `id_adulto_mayor` FROM `adulto_mayor` WHERE nombre= ? AND apellido=? AND nacimiento=?";
			statement = con.prepareStatement(sql);
			statement.setString(1, adult.getNombre());
			statement.setString(2, adult.getApellido());
			statement.setString(3, adult.getNacimiento());
			resultSet = statement.executeQuery();
			int aux = 0;

			while (resultSet.next()) {
				VOadulto_mayor p = new VOadulto_mayor();
				aux = resultSet.getInt(1);

			}

			con.commit();
			statement.close();
			con.close();
			DAOcuidador_has_adultomayor aa = new DAOcuidador_has_adultomayor();
			aa.relacionAdultoCuidador(adult.getId_cuidador(), aux);

		} catch (SQLException e) {
			con.rollback();
			e.printStackTrace();
		}

		return estadoOp;
	}

	// Metodo GET actualizar

	public String actualizar2(VOcuidador cui) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOadulto_mayor> lista = new ArrayList<VOadulto_mayor>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {

			sql = "SELECT * FROM `adulto_mayor` WHERE id_cuidador= ?";
			statement = con.prepareStatement(sql);
			statement.setInt(1, cui.getId_cuidador());
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOadulto_mayor p = new VOadulto_mayor();
				p.setId_adulto_mayor(resultSet.getInt(1));
				p.setNombre(resultSet.getString(2));
				p.setApellido(resultSet.getString(3));
				p.setNacimiento(resultSet.getString(4));
				p.setDiagnostico(resultSet.getInt(5));
				p.setId_cuidador(resultSet.getInt(6));
				lista.add(p);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return a;
	}

	

	public String consultarHistorial(int id_adulto_mayor) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOactividades> lista = new ArrayList<VOactividades>();
		
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "SELECT * FROM actividades A, progreso P WHERE A.id_actividades = P.id_actividades AND P.id_adulto_mayor=?;";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_adulto_mayor);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOactividades ac=new VOactividades();
				
				ac.setNombre(resultSet.getString(2));
				ac.setDescripcion(resultSet.getString(3));
				ac.setId_potencia(resultSet.getInt(4));
				ac.setId_diagnostico(resultSet.getInt(5));
				ac.setId_actividades(resultSet.getInt(7));
				ac.setValoracionIni(resultSet.getFloat(8));
				ac.setValoracionFin(resultSet.getFloat(9));
				ac.setFecha(resultSet.getString(10));
				lista.add(ac);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}




	public String consultarHistorialPerfil(int id_adulto_mayor) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOactividades> lista = new ArrayList<VOactividades>();
		
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "SELECT * FROM actividades A, progreso P WHERE A.id_actividades = P.id_actividades AND P.id_adulto_mayor=? order by valoracionIni,valoracionFin DESC LIMIT 3;";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_adulto_mayor);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOactividades ac=new VOactividades();
				ac.setId_actividades(resultSet.getInt(1));
				ac.setNombre(resultSet.getString(2));
				ac.setDescripcion(resultSet.getString(3));
				ac.setId_potencia(resultSet.getInt(4));
				ac.setId_diagnostico(resultSet.getInt(5));
				ac.setValoracionIni(resultSet.getFloat(8));
				ac.setValoracionFin(resultSet.getFloat(9));
				ac.setFecha(resultSet.getString(10));
				
				
				lista.add(ac);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}






}
