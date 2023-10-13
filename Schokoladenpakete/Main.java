import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        int kleineTafeln = 0;
        int großeTafeln = 5;
        int zielGewicht = 0;
        int result = 0;
        Scanner scanner = new Scanner(System.in);
        boolean valid = true;

        System.out.print("Wie schwer soll dein Paket sein? : ");
        while (valid) {
            if (!scanner.hasNextInt()) {
                System.out.print("Bitte nur Gewicht in kg eingeben! :");
                scanner.nextLine();
            } else {
                zielGewicht = scanner.nextInt();
                valid = false;
                scanner.nextLine();
            }
        }

        System.out.print("Wie viele große Tafeln sind vorhanden? : ");
        while (!valid) {
            if (!scanner.hasNextInt()) {
                System.out.print("Bitte nur Anzahl in ganzen Zahlen angeben! : ");
                scanner.nextLine();
            } else {
                großeTafeln *= scanner.nextInt();
                valid = true;
                scanner.nextLine();
            }
        }

        while (valid) {
            if (großeTafeln > zielGewicht) {
                großeTafeln -= 5;
            } else {
                kleineTafeln = zielGewicht - großeTafeln;
                valid = false;
            }
        }

        System.out.print("Wie viele kleine Tafeln sind vorhanden? : ");
        while (!valid) {
            int x = 0;           
            if (scanner.hasNextInt()) {
                x = scanner.nextInt();
                if (kleineTafeln > x) {
                    kleineTafeln -= x;
                    System.out.println("Es sind " + kleineTafeln + " kleine Tafeln zu wenig.");
                    valid = true;
                } else {
                    System.out.print("Es werden " + kleineTafeln + " kleine Tafeln benötigt.");
                    valid = true;
                }
            } else {
                System.out.print("Bitte nur Anzahl in ganzen Zahlen angeben!: ");
                scanner.nextLine();
            }

        }
    }
}