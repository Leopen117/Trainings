

import java.util.Scanner;



public class Main {
   public static void main(String[] args) {

    double inputFirst = 0;
    String Operator;
    double inputSecond = 0;
    double output;
    Scanner scanner = new Scanner(System.in);
    boolean valid = false;
    
    while (!valid) {
      try {         
        System.out.print("Enter your digits: ");
        inputFirst = scanner.nextDouble();
        valid = true;
      } catch (Exception e) {
        System.out.println("Please just enter digits !");        
        valid = false;        
      }
      scanner.nextLine();
    }
    
    while (true) {
      System.out.print("Now enter your Operator: ");
      Operator = scanner.next();      
      if (!Operator.equals("+") && !Operator.equals("-") && !Operator.equals("/") && !Operator.equals("*")) {
          System.out.println("Please enter + or - or + or /.");
      } else {
        break;
      }
    }

    while (valid) {
      try {
        System.out.print("Finally enter your second digit: ");
        inputSecond = scanner.nextDouble();
        valid = false;  
      } catch (Exception e) {
        System.out.println("Please just enter digits !");
        valid = true; 
      }
      scanner.nextLine();
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
