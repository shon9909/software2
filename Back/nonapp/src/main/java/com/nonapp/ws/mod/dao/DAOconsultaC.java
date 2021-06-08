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
import com.nonapp.ws.res.VO.VOconsultaC;

public class DAOconsultaC {
	
	private Connection con;
	private PreparedStatement statement;

	private Connection obtenerConexion() throws SQLException{
		return FachadaC.obtenerConexion();	
	}
	
	
	public String ConsultaC(int diagnostico) throws SQLException {
		Gson gson = new Gson();
		String a = "";
		List<VOconsultaC> lista = new ArrayList<VOconsultaC>();
		ResultSet resultSet = null;
		String sql = null;
		con = obtenerConexion();

		try {

			sql = "SELECT A.id_adulto_mayor, A.nombre, A.apellido, A.diagnostico, P.valoracionIni, P.valoracionFin, AC.nombre AS nombreAc ";
			sql+= "FROM adulto_mayor A, progreso P, actividades AC ";
			sql+= "WHERE A.id_adulto_mayor = P.id_adulto_mayor and P.id_actividades=AC.id_actividades and A.diagnostico=(?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, diagnostico);
			resultSet = statement.executeQuery();
			while (resultSet.next()) {
				VOconsultaC p = new VOconsultaC();
				p.setId_adulto_mayor(resultSet.getInt(1));				
				p.setNombre(resultSet.getString(2));
				p.setApellido(resultSet.getString(3));
				p.setDiagnostico(resultSet.getInt(4));
				p.setValoracionIni(resultSet.getFloat(5));
				p.setValoracionFin(resultSet.getFloat(6));
				p.setNombreAc(resultSet.getString(7));
				lista.add(p);
				a = gson.toJson(lista);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return a;
	}
	

}
