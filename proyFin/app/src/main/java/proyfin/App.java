/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package proyfin;
import java.util.*;
import java.sql.*;
import proyfin.Bar;
import org.apache.commons.dbcp2.BasicDataSource;
import javax.swing.*;
import proyfin.Grafic;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class App {

    public static void main(String[] args) {
        String dataBaseUrl = "jdbc:mysql://127.0.0.1:3306/bares";
        String username = "root";
        String password = "alejandro42257:S";
        String table1 = "estaDiario";

        Grafic frame = new Grafic();
        JTextField textField = new JTextField();
        textField.setBounds(50, 50, 200, 30);
        textField.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e ){
                String input = textField.getText();
            }
        });

        frame.add(textField);

        try(Connection connection = DriverManager.getConnection(dataBaseUrl, username, password)){
            String createTable = "CREATE TABLE " + table1 + " (id INT PRIMARY KEY, nombre VARCHAR(20), cover INT, dressCode VARCHAR(50)), evento VARCHAR(20), musica VARCHAR(20) ";

            try(Statement statement = connection.createStatement()){
                statement.executeUpdate(createTable);

            }

        } catch(SQLException e){
            e.printStackTrace();
        }
        


        //tabla de eventos
    }
}
