package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.fachada.FachadaC;
import com.nonapp.ws.res.VO.VOeventos;
import com.nonapp.ws.res.VO.VOprogreso;

public class DAOeventos {
	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
	
public String registrarEventos(String title, String description, String start, String end, String color, String textColor, int id_adulto_mayor) throws SQLException{
		
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
			seleccio = "INSERT INTO `eventos` (`title`,`description`,`start`,`end`,`color`,`textColor`,`id_adulto_mayor`)VALUES (?,?,?,?,?,?,?)";
			statement = con.prepareStatement(seleccio);
			statement.setString(1, title); 
			statement.setString(2, description); 
			statement.setString(3, start); 
			statement.setString(4, end); 
			statement.setString(5, color); 
			statement.setString(6, textColor); 
			statement.setInt(7, id_adulto_mayor);
			
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
		
		return "Eventos registrados con exito!";	
	}

public String consultarEventos(int id_adulto_mayor) throws SQLException {
	Gson gson = new Gson();
	String a = "";
	List<VOeventos> lista = new ArrayList<VOeventos>();
	ResultSet resultSet = null;
	String sql = null;
	con = obtenerConexion();

	try {
		sql = "select * from eventos where id_adulto_mayor = (?)";
		statement = con.prepareStatement(sql);
		statement.setInt(1, id_adulto_mayor);
		resultSet = statement.executeQuery();
		while (resultSet.next()) {
			VOeventos p = new VOeventos();
			p.setId_evento(resultSet.getInt(1));
			p.setTitle(resultSet.getString(2));
			p.setDescription(resultSet.getString(3));
			p.setStart(resultSet.getString(4));
			p.setEnd(resultSet.getString(5));
			p.setColor(resultSet.getString(6));
			p.setTextColor(resultSet.getString(7));
			lista.add(p);
			a = gson.toJson(lista);
		}

	} catch (SQLException e) {
		e.printStackTrace();
	}

	return a;
}


public String eliminarEventos(String title, String description, String start, String end, int id_adulto_mayor) throws SQLException {

	String sql = null;
	con = obtenerConexion();

	try {
		sql = "DELETE FROM `eventos` WHERE title=(?) and description=(?) and start=(?) and end=(?) and id_adulto_mayor=(?)";
		statement = con.prepareStatement(sql);
		statement.setString(1, title);
		statement.setString(2, description);
		statement.setString(3, start);
		statement.setString(4, end);
		statement.setInt(5, id_adulto_mayor);
		statement.executeUpdate(); 
	} catch (SQLException e) {
		e.printStackTrace();
	}

	return "Elimando con exito!";
}
	
	
}
