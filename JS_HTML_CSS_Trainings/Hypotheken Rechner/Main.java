import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        final byte MONTH_IN_YEAR = 12;
        final byte PERCENT = 100;
        int principal = 0;
        float annualInterest = 0;
        float monthlyInterest = 0;
        double mortage = 0;
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Principal: ");
            principal = scanner.nextInt();
            if (principal < 1000 || principal > 1_000_000) {
                System.out.println("Enter a number between 1.000 and 1.000.000.");
            } else {
                break;
            }
        }   

        while (true) {
            System.out.print("Annual Interest Rate: ");
            annualInterest = scanner.nextFloat();
            monthlyInterest = annualInterest / PERCENT / MONTH_IN_YEAR;
            if (annualInterest <= 0 || annualInterest > 30) {
            System.out.println("Enter a value greater than 0 and less than oer equal to 30.");
            } else {
                break;
            }
        }

        while (true) {
            System.out.print("Period (Years): ");
            byte years = scanner.nextByte();
            int numberOfPayments = years * MONTH_IN_YEAR;
            mortage = principal
                    * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                    / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
            if (years < 1 || years > 30) {
                System.out.println("Enter a value between 1 and 30.");
            } else {
                break;
            }
        }
        
        String mortageFormatted = NumberFormat.getCurrencyInstance().format(mortage);
        System.out.print("Mortgage: " + mortageFormatted);
    }

}

// Period (Years): 30 = n
// Mortgage: €472.81