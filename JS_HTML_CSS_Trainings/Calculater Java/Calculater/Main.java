
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    double inputFirst = 0;
    String Operator;
    double inputSecond = 0;
    double output;
    Scanner scanner = new Scanner(System.in);
    boolean valid = false;
    
    System.out.print("Please enter your number: ");
    while (!valid) {
      if (!scanner.hasNextDouble()) {
        System.out.print("Please just enter digits!: ");
        scanner.nextLine();
      } else {
        inputFirst = scanner.nextDouble();
        valid = true;
      }
    }
    
    while (true) {
      System.out.print("Now enter your Operator: ");
      Operator = scanner.next();      
      if (!Operator.equals("+") && !Operator.equals("-") && !Operator.equals("/") && !Operator.equals("*")) {
          System.out.println("Please just enter + or - or + or / !");
      } else {
        scanner.nextLine();
        break;
      }
    }

    System.out.print("Please enter your second number: ");
    while (valid) {
      if (!scanner.hasNextDouble()) {
        System.out.print("Please just enter digits!: ");
        scanner.nextLine();
      } else {
        inputSecond = scanner.nextDouble();
        valid = false;
      }
    }

    if (Operator.equals("+")) {
      output = inputFirst + inputSecond;
      System.out.println("This is your Result: " + output);
    } else if (Operator.equals("-")) {
      output = inputFirst - inputSecond;
      System.out.println("This is your result: " + output);
    } else if (Operator.equals("*")) {
      output = inputFirst * inputSecond;
      System.out.println("This is your result: " + output);
    } else {
      output = inputFirst / inputSecond;
      System.out.println("This is your result: " + output);
    }

    }

}
