
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        double n = 0;
        double result = 0;

        Scanner in = new Scanner(System.in);

        System.out.print("Please enter your n-parameter: ");
        n = in.nextDouble();

        for (double i = 0; i <= n; i++) {
             double x = Math.pow(-1, i);
             x /= (2 * i + 1);
             result += x;
             
            } 
        System.out.println(result * 4);
     }
}