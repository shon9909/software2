package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOerror;

public class DAOcuidador {
	private Connection con;
	private PreparedStatement statement;
	
	private Connection obtenerConexion() throws SQLException{
		return conexion.getConnection();
	}
    //Metodo POST REGISTRAR
	public String registrarCuidador(String email, String nombre, String password) throws SQLException{
		
		String seleccio=null;
		boolean estadoOp= false;
		/*
		 * Se abre conexion
		 */
		con=obtenerConexion();
		try {
			con.setAutoCommit(false);
			/*
			 * inyeccion sql tabla cuidador
			 * email
			 * nombre
			 * password (encriptada)
			 */
			seleccio = "INSERT INTO `cuidador` (`email`,`nombre`,`password`)VALUES (?,?,SHA1(?))";
			statement = con.prepareStatement(seleccio);
			statement.setString(1, email); 
			statement.setString(2, nombre);
			statement.setString(3, password);
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
		
		return "Registrado con exito";	
	}

	
	//Metodo GET validar ingreso
	
	public String ingresoCuidador(String email, String password) throws SQLException {
		Gson gson= new Gson();
		String a="";
		List<VOcuidador> lista= new ArrayList<VOcuidador>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {

			sql = "SELECT `id_cuidador`, `email`, `nombre` FROM `cuidador` WHERE email= ? AND password=SHA1(?)";
			statement=con.prepareStatement(sql);
			statement.setString(1, email);
			statement.setString(2, password);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOcuidador p=new VOcuidador();
				p.setId_cuidador(resultSet.getInt(1));
				p.setEmail(resultSet.getString(2));
				p.setNombre(resultSet.getString(3));
				lista.add(p);
				a= gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		if(a.isEmpty()==true){
			String b="";
			VOerror error2=new VOerror();
			error2.setTipo("Error datos incorrectos");
			List lista2=new ArrayList();
			lista2.add(error2);
			b=gson.toJson(lista2);
			return b;
		}else{
			return a;	
		}
		
	}
	
	
	
	
	
	
}
