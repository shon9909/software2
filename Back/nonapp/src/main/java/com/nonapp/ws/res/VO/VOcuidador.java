package com.nonapp.ws.res.VO;

import com.google.gson.Gson;

public class VOcuidador {
private int id_cuidador;
private String email;
private String nombre;
private String password;
public int getId_cuidador() {
	return id_cuidador;
}
public void setId_cuidador(int id_cuidador) {
	this.id_cuidador = id_cuidador;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

public String tojson(){
	Gson a=new Gson();
	return a.toJson(this);
} 


}
