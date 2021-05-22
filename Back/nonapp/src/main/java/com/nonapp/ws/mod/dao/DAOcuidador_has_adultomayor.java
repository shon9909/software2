package com.nonapp.ws.mod.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.nonapp.ws.fachada.FachadaC;

import com.nonapp.ws.mod.conexion.conexion;
import com.nonapp.ws.res.VO.VOadulto_mayor;
import com.nonapp.ws.res.VO.VOcuidador;
import com.nonapp.ws.res.VO.VOcuidador_has_adultomayor;
import com.nonapp.ws.res.VO.VOerror;

public class DAOcuidador_has_adultomayor{
	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
/*
 * Metodo GET automatico despues de validar ingreso de Cuidador, devuelve todos los datos de los adulto mayor
 */
	public String ingresoCuidadorConsultaAdulto(int id_cuidador) throws SQLException {
		Gson gson= new Gson();
		String a="";
		List<VOadulto_mayor> lista= new ArrayList<VOadulto_mayor>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {
			sql="select * from adulto_mayor where id_adulto_mayor IN (select id_adulto_mayor from cuidador_has_adultomayor where id_cuidador = ?)";
			statement=con.prepareStatement(sql);
			statement.setInt(1, id_cuidador);
			resultSet = statement.executeQuery();
				while (resultSet.next()) {
					VOadulto_mayor p=new VOadulto_mayor();
					p.setId_adulto_mayor(resultSet.getInt(1));
					p.setNombre(resultSet.getString(2));
					p.setApellido(resultSet.getString(3));
					p.setNacimiento(resultSet.getString(4));
					p.setDiagnostico(resultSet.getInt(5));
					lista.add(p);
					a= gson.toJson(lista);	
			}
			

		} catch (SQLException e) {
			e.printStackTrace();
		}
		
			return a;	
	}
	
	
	
	/*
	 * Metodo POST automatico
	 * Relaciona adulto mayor recien creado con el cuidador que inicio sesion
	 */
	
public String relacionAdultoCuidador(int id_cuidador, int id_adulto_mayor) throws SQLException{
		
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
			seleccio = "INSERT INTO `cuidador_has_adultomayor` (`id_cuidador`,`id_adulto_mayor`)VALUES (?,?)";
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
		
		return "Relacion creada con exito Adulto mayor Registrado-Cuidador en sesion actual";	
	}


	
}
