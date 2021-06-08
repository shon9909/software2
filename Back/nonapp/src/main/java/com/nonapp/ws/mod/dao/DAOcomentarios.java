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
import com.nonapp.ws.res.VO.VOcomentarios;

public class DAOcomentarios {

	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
	
public String registrarComentario(int id_respuesta, String nombre, String fecha, String comentario) throws SQLException{

		String seleccio=null;
		boolean estadoOp= false;
		/*
		 * Se abre conexion
		 */
		con=obtenerConexion();
		try {
			con.setAutoCommit(false);
			/*
			 * inyeccion sql tabla cuidador_has_adultomayor
			 * id_cuidador
			 * id_adulto_mayor
			 */
			seleccio = "INSERT INTO `comentarios` (`id_respuesta`,`nombre`,`fecha`,`comentario`)VALUES (?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setInt(1, id_respuesta); 
			statement.setString(2, nombre); 
			statement.setString(3, fecha); 
			statement.setString(4, comentario); 
			
			estadoOp=statement.executeUpdate()>0;
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
		
		return "Comentario registrado con exito!";	
	}
public String consultarComentario(String nombre, String comentario) throws SQLException {
	Gson gson = new Gson();
	String a = "";
	List<VOcomentarios> lista = new ArrayList<VOcomentarios>();
	ResultSet resultSet = null;
	String sql = null;
	con = obtenerConexion();

	try {

		sql = "SELECT * FROM `comentarios` WHERE nombre= (?) and  comentario=(?)";
		statement = con.prepareStatement(sql);
		statement.setString(1, nombre);
		statement.setString(2, comentario);
		resultSet = statement.executeQuery();
		while (resultSet.next()) {
			VOcomentarios p = new VOcomentarios();
			p.setId_comentario(resultSet.getInt(1));
			p.setId_respuesta(resultSet.getInt(2));
			p.setNombre(resultSet.getString(3));
			p.setFecha(resultSet.getString(4));
			p.setComentario(resultSet.getString(5));
			lista.add(p);
			a = gson.toJson(lista);
		}

	} catch (SQLException e) {
		e.printStackTrace();
	}
	return a;
}
	
public String consultarTotalComentarios() throws SQLException {
	Gson gson = new Gson();
	String a = "";
	List<VOcomentarios> lista = new ArrayList<VOcomentarios>();
	ResultSet resultSet = null;
	String sql = null;
	con = obtenerConexion();

	try {

		sql = "SELECT * FROM `comentarios`;";
		statement = con.prepareStatement(sql);
		resultSet = statement.executeQuery();
		while (resultSet.next()) {
			VOcomentarios p = new VOcomentarios();
			p.setId_comentario(resultSet.getInt(1));
			p.setId_respuesta(resultSet.getInt(2));
			p.setNombre(resultSet.getString(3));
			p.setFecha(resultSet.getString(4));
			p.setComentario(resultSet.getString(5));
			lista.add(p);
			a = gson.toJson(lista);
		}

	} catch (SQLException e) {
		e.printStackTrace();
	}
	return a;
}
	
}
