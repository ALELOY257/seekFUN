package proyfin;

import java.sql.*;
import org.apache.commons.dbcp2.BasicDataSource;
import java.util.Queue;
import java.util.LinkedList;

public class Bar {
    // connection pool
    private BasicDataSource pool;

    public void initializeConnPool() {
        pool.setUrl("jdbc:mysql://127.0.0.1:3306/bares");
        pool.setUsername("root");
        pool.setPassword("alejandro42257:S");

    }

    public Connection getConnection() throws SQLException {
        return pool.getConnection();
    }

    // end of connection pool
    private int cover;
    private String dresscode;
    private String evento;
    private String musica;
    private int afluencia;
    private Queue<Integer> afluencyQueue;
    // ver perfil de djs

    public Bar() {

    }

    public Bar(int cover, String dresscode, String evento, String musica, int afluencia) {
        this.cover = cover;
        this.dresscode = dresscode;
        this.evento = evento;
        this.musica = musica;
        this.afluencia = afluencia;
    }
    // operators

public void afluencyData(Integer afluencia){//afluencia ultimos dias
    this.afluencyQueue = new LinkedList<>();
    if(afluencyQueue.size() >= 10){
        afluencyQueue.poll();
    }
    afluencyQueue.offer(afluencia);
}
public double afluencyProm(){
    int sum = 0;
    int cont = afluencyQueue.size();
    for(int element : afluencyQueue){
        sum += element;
    }
    return (double) sum/cont;
}
    // getters

    // setters
public void setCover(int cover){
    this.cover = cover;
}
public void setDressCode(String dresscode){
    this.dresscode = dresscode;
}
public void setEvento(String evento){
    this.evento = evento;
}
public void setMusica(String musica){
    this.musica = musica;
}
    // getters with sql action or updates

    // setters with sql action or updates
/*public Boolean updateCover(int id, String table, int newCover){
    String searchQuery = "UPDATE "+ table + " SET cover = ? "+ " WHERE id = ?";

    try (Connection connection = getConnection();PreparedStatement statement = connection.prepareStatement(searchQuery)){
        statement.setInt(1, newCover);
        statement.setInt(2, id);
        int rowsAffected = statement.executeUpdate();
        return rowsAffected > 0;
    } catch(SQLException e){
        e.printStackTrace();
        return false;
    }
    }*/

//int updates
public Boolean updateStringElement(int id, String table, int newInt, String row){

    String searchQuery = "UPDATE "+ table + " SET cover = ? "+ " WHERE id = ?";

    try (Connection connection = getConnection();PreparedStatement statement = connection.prepareStatement(searchQuery)){
        statement.setInt(1, newInt);
        statement.setInt(2, id);
        int rowsAffected = statement.executeUpdate();
        return rowsAffected > 0;
    } catch(SQLException e){
        e.printStackTrace();
        return false;
    }
}
//string updates
public Boolean updateIntElement(int id, String table, int newString, String row){
    String searchQuery = "UPDATE "+ table + " SET " + row + " = ? "+ " WHERE id = ?";

    try (Connection connection = getConnection();PreparedStatement statement = connection.prepareStatement(searchQuery)){
        statement.setInt(1, newString);
        statement.setInt(2, id);
        int rowsAffected = statement.executeUpdate();
        return rowsAffected > 0;
    } catch(SQLException e){
        e.printStackTrace();
        return false;
    }

}
}



