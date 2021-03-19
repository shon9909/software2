package com.nonapp.ws.database.conexion.modelo;
/*
 *
 * Metodo POST (llegan archivos json y se envian por inyecciones SQL)
 * 
 */

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
public class registro{
	private Connection con;
	private PreparedStatement statement;
	
	
	
public static void main(String[] args) throws SQLException {
	/*
	 * Se instancia un objeto de la clase registro para obtener los metodos.
	 */
	registro re=new registro();	
	/*
	 * Ejemplos de inyeccion por llamado de metodos (se deben realizar de forma dinamica desde el controlador
	 * se instancia esta clase, y se ingresan los datos obtenidos del json del api).
	 */
    //System.out.println(re.cuidador("johan.miranda@correo.usa.ued.co","johan miranda 2", "S.honcito123"));
	//System.out.println(re.adulto_mayor("Pedro Juan", "Pica Piedra", "1964-12-22", 1));
	//System.out.println(re.cuidador_has_adultomayor(2, 1));
	//System.out.println(re.actividades("Comer heladito", "Ir a comer heladito", 1));
	//System.out.println(re.progreso(1, 1, 5));			
}

/*
 * Metodo para Obtener conexion (Cada que se haga una inyeccion, se abre y cierra conexion con la base de datos.)
 */
private Connection obtenerConexion() throws SQLException{
	return conexion.getConnection();
}
/*
 * Metodos POST separados por tablas para hacer inyeccion de datos return ok si esta perfecto uwu.
 */
public String cuidador(String email, String nombre, String password) throws SQLException{
	
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
	
	return "ok";	
}

public String diagnostico(String nombre, String descripcion) throws SQLException{
	String seleccio=null;
	boolean estadoOp= false;
	con=obtenerConexion();
	try {
		con.setAutoCommit(false);
		/*
		 * inyeccion sql tabla diagnostico
		 * nombre
		 * descripcion
		 * password (encriptada)
		 */
		seleccio = "INSERT INTO `diagnostico` (`nombre`,`descripcion`)VALUES (?,?)";
		statement = con.prepareStatement(seleccio);
		statement.setString(1, nombre); 
		statement.setString(2, descripcion);
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
	
	return "ok";	
}

public String adulto_mayor(String nombre, String apellido, String nacimiento, int diagnostico) throws SQLException{
	String seleccio=null;
	boolean estadoOp= false;
	con=obtenerConexion();
	try {
		/*
		 * inyeccion sql tabla adulto_mayor
		 * nombre
		 * apellido
		 * nacimiento
		 * diagnostico
		 * 
		 */
		con.setAutoCommit(false);
		seleccio = "INSERT INTO `adulto_mayor` (`nombre`, `apellido` , `nacimiento` ,`diagnostico`)VALUES (?,?,?,?)";
		statement = con.prepareStatement(seleccio);
		statement.setString(1, nombre); 
		statement.setString(2, apellido);
		statement.setString(3, nacimiento);
		statement.setInt(4, diagnostico);
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
	
	return "ok";	
}

public String cuidador_has_adultomayor(int id_cuidador, int id_adulto_mayor) throws SQLException{
	String seleccio=null;
	boolean estadoOp= false;
	con=obtenerConexion();
	try {
		con.setAutoCommit(false);
		/*
		 * inyeccion sql tabla cuidador_has_adultomayor
		 * id_cuidador
		 * id_adulto_mayor
		 * 
		 */
		seleccio = "INSERT INTO `cuidador_has_adultomayor` (`id_cuidador`, `id_adulto_mayor`)VALUES (?,?)";
		statement = con.prepareStatement(seleccio);
		statement.setInt(1, id_cuidador); 
		statement.setInt(2, id_adulto_mayor);
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
	
	return "ok";	
}

public String actividades(String nombre, String descripcion, int id_potencia) throws SQLException{
	String seleccio=null;
	boolean estadoOp= false;
	con=obtenerConexion();
	try {
		con.setAutoCommit(false);
		/*
		 * inyeccion sql tabla actividades
		 * nombre
		 * descripcion
		 * id_potencia
		 * 
		 */
		seleccio = "INSERT INTO `actividades` (`nombre`, `descripcion`, `id_potencia`)VALUES (?,?,?)";
		statement = con.prepareStatement(seleccio);
		statement.setString(1, nombre); 
		statement.setString(2, descripcion);
		statement.setInt(3, id_potencia);
		estadoOp=statement.executeUpdate()>0;
		
		con.commit();
		statement.close();
		con.close();
		
	} catch (SQLException e) {
		con.rollback();
		e.printStackTrace();
	}
	
	return "ok";	
}

public String progreso(int id_adulto_mayor, int id_actividades, int valoracion) throws SQLException{
	String seleccio=null;
	boolean estadoOp= false;
	con=obtenerConexion();
	try {
		con.setAutoCommit(false);
		seleccio = "INSERT INTO `progreso` (`id_adulto_mayor`, `id_actividades`, `valoracion`)VALUES (?,?,?)";
		statement = con.prepareStatement(seleccio);
		statement.setInt(1, id_adulto_mayor); 
		statement.setInt(2, id_actividades);
		statement.setInt(3, valoracion);
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
	
	return "ok";	
}



}