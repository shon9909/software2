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
import com.nonapp.ws.res.VO.VOprogreso2;

public class DAOprogreso2 {
	
	private Connection con;
	private PreparedStatement statement;
	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
	public String RegistroCriterio(String descripcion, int valoracion, int id_adulto_mayor, int id_actividades, int criterio) throws SQLException {
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
			seleccio = "INSERT INTO `progreso2` (`descripcion`,`valoracion`,`id_adulto_mayor`,`id_actividades`,`criterio`)VALUES (?,?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setString(1, descripcion);
			statement.setInt(2, valoracion);
			statement.setInt(3, id_adulto_mayor);
			statement.setInt(4, id_actividades);
			statement.setInt(5, criterio);
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

		return "Registro con exito de los Criterios Iniciales";

	}
	
	public String consultarCriteriosIniciales(int id_adulto_mayor, int id_actividades, int criterio) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOprogreso2> lista = new ArrayList<VOprogreso2>();
		
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "select * from progreso2 where id_adulto_mayor=? and id_actividades=? and criterio=? order by descripcion;";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_adulto_mayor);
			statement.setInt(2, id_actividades);
			statement.setInt(3, criterio);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOprogreso2 ac=new VOprogreso2();	
				ac.setId_criterio(resultSet.getInt(1));
				ac.setDescripcion(resultSet.getString(2));
				ac.setValoracion(resultSet.getInt(3));
				ac.setId_adulto_mayor(resultSet.getInt(4));
				ac.setId_actividades(resultSet.getInt(5));
				ac.setCriterio(resultSet.getInt(6));
				lista.add(ac);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}
	
	
	
	
	
	
	public String guardarCriteriosFinales(String descripcion, int valoracion, int id_adulto_mayor, int id_actividades, int criterio) throws SQLException {
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
			seleccio = "INSERT INTO `progreso2` (`descripcion`,`valoracion`,`id_adulto_mayor`,`id_actividades`,`criterio`)VALUES (?,?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setString(1, descripcion);
			statement.setInt(2, valoracion);
			statement.setInt(3, id_adulto_mayor);
			statement.setInt(4, id_actividades);
			statement.setInt(5, criterio);
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

		return "Registro con exito de los Criterios Finales";

	}
	
	
	public String consultarCriteriosFinales(int id_adulto_mayor, int id_actividades, int criterio) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOprogreso2> lista = new ArrayList<VOprogreso2>();
		
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "select * from progreso2 where id_adulto_mayor=? and id_actividades=? and criterio=? order by descripcion;";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_adulto_mayor);
			statement.setInt(2, id_actividades);
			statement.setInt(3, criterio);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOprogreso2 ac=new VOprogreso2();	
				ac.setId_criterio(resultSet.getInt(1));
				ac.setDescripcion(resultSet.getString(2));
				ac.setValoracion(resultSet.getInt(3));
				ac.setId_adulto_mayor(resultSet.getInt(4));
				ac.setId_actividades(resultSet.getInt(5));
				ac.setCriterio(resultSet.getInt(6));
				lista.add(ac);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}
	
	
	
	public String consultarValoraciones(int id_adulto_mayor, int id_actividades) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOprogreso2> lista = new ArrayList<VOprogreso2>();
		
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql = "SELECT * FROM `progreso2` WHERE id_adulto_mayor=? and id_actividades=? order by criterio,descripcion;";
			statement = con.prepareStatement(sql);
			statement.setInt(1, id_adulto_mayor);
			statement.setInt(2, id_actividades);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOprogreso2 ac=new VOprogreso2();	
				ac.setId_criterio(resultSet.getInt(1));
				ac.setDescripcion(resultSet.getString(2));
				ac.setValoracion(resultSet.getInt(3));
				ac.setId_adulto_mayor(resultSet.getInt(4));
				ac.setId_actividades(resultSet.getInt(5));
				ac.setCriterio(resultSet.getInt(6));
				lista.add(ac);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return a;
	}
	

}
