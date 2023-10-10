import java.text.NumberFormat;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        final byte MONTH_IN_YEAR = 12;
        final byte PERCENT = 100;

        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Principal: ");
        int principal = scanner.nextInt();

        System.out.println("Annual Interest Rate: ");
        float annualInterest = scanner.nextFloat();
        float monthlyInterest = annualInterest / PERCENT / MONTH_IN_YEAR;

        System.out.println("Period (Years): ");
        byte years = scanner.nextByte();
        int numberOfPayments = years * MONTH_IN_YEAR;

        double mortage = principal 
                    * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments )) 
                    / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
        
        String mortageFormatted = NumberFormat.getCurrencyInstance().format(mortage);
        System.out.println("Mortgage: " + mortageFormatted);

    }


    }
    
    // Period (Years): 30 = n
    // Mortgage: €472.81