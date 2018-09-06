/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package papw_tarea09;
import java.util.Scanner;

/**
 *
 * @author Jesús Giancarlo Cisneros Ramírez
 *      Matricula: 1480219
 * 
 */
public class PAPW_Tarea09 {
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner S = new Scanner(System.in);
        int MenuOpcion =0;
        boolean ciclo = true;
        
        System.out.println("Bienvenido a la Tarea #09 de PAPW");
       
        do{
           System.out.println("Que Desea Realizar: \n1.- Piedra, Papel o Tijeras\n3.- Salir");
           MenuOpcion = S.nextInt();
           switch(MenuOpcion){
               case 1:
                   PiedraPapelTijeras();
                   break;
               case 3:
                   System.out.println("Nos Vemos pronto en algun otro programa... :) ");
                   ciclo=false;
                   break;
                   
               default:
                    System.out.println("Por favor seleccione una opcion Valida del menu..");
                   break;
           }
           
           System.out.println("----------------");
            
        }while(ciclo);
        
    }
    
    public static void PiedraPapelTijeras(){
        Scanner s = new Scanner(System.in);
        int PlayerOp, PlayerPuntos = 0;
        int CpuOP, CpuPuntos=0;
        boolean Error;
        
        System.out.println("----------------------------------------------------------------------");
        System.out.println("----------------------------------------------------------------------");
        System.out.println("Bienvenida a una version un poco diferente del convencional juego Piedra, Papel o Tijeras");
        System.out.println("Las Reglas son simples Elige una de las 3 opcciones y lucha hasta consguir la victoria"
                + "\n El primero en conseguir 3 victorias es el indiscutible ganador");
        
        System.out.println("----------------------------------------------------------------------");
        System.out.println("Selecciona una opcion: \n1.- Piedra\n2.- Papel\n3.- Tijeras");
        do{
            System.out.println("Marcador Actual Player: "+PlayerPuntos +" vs CPU: "+ CpuPuntos);
           
            do{
                 Error = false;
                //s.nextLine();
                PlayerOp = s.nextInt();
                if(PlayerOp > 3){
                    Error = true;
                }

                if(Error){
                    System.out.println("Por Favor seleccione una opcion valida...");
                    System.out.println("1.- Piedra\n2.- Papel\n3.- Tijeras");
                }
            }while(Error);
        
            CpuOP = (int)Math.floor(Math.random()*4);

            if(PlayerOp == CpuOP){
                // Empate
                System.out.println("El encuentro a terminado en empate...");
            }else if(PlayerOp == 1){
                if(CpuOP == 2){
                    // Pierde
                     System.out.println("Has Usado Piedra vs Papel");
                     System.out.println("Has perdido esta batalla");
                     CpuPuntos++;

                }else if(CpuOP == 3){
                    // Gana
                    System.out.println("Has Usado Piedra vs Tijeras");
                     System.out.println("Has Ganado esta batalla");
                     PlayerPuntos++;
                }

            }else if(PlayerOp == 2){
                if(CpuOP == 1){
                    // Gana
                    System.out.println("Has Usado Papel vs Piedra");
                    System.out.println("Has Ganado esta batalla");
                    PlayerPuntos++;
                }else if(CpuOP == 3){
                    // Pierde
                    System.out.println("Has Usado Papel vs Tijeras");
                    System.out.println("Has perdido esta batalla");
                     CpuPuntos++;
                }

            }else if(PlayerOp == 3){
                if(CpuOP == 1){
                    // Pierde
                    System.out.println("Has Usado Tijeras vs Piedra");
                    System.out.println("Has perdido esta batalla");
                    CpuPuntos++;
                }else if(CpuOP == 2){
                    // Gana
                    System.out.println("Has Usado Tijeras vs Papel");
                    System.out.println("Has Ganado esta batalla");
                    PlayerPuntos++;
                }

            }

            s.nextLine();
            
           
            
        }while(PlayerPuntos != 3 && CpuPuntos != 3);
        
        System.out.println("--------------------------\n\n\n");
        
        System.out.println("Marcador  Final Player: "+PlayerPuntos +" vs CPU: "+ CpuPuntos);
        
         if(PlayerPuntos ==3){
            System.out.println("Felicidades has ganas, pronto regresaras al menu principal");
          
        }else if(CpuPuntos ==3){
            System.out.println("Lamentablemente has perdido, pronto regresaras al menu principal");
          
        }
        System.out.println("--------------------------\n");
        
    }
    
}
