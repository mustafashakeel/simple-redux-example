import javax.swing.*;
import java.awt.event.*;

public class Namer extends JFrame	
{

   public static void main(String [] args)
   {
      new Namer();
   }

   private JButton buttonOK;
   private JTextField textName;	

   public Namer()
   {
      this.setSize(325,100);
      this.setTitle("Who Are You?");
      this.setDefaultCloseOperation(
          JFrame.EXIT_ON_CLOSE);

      JPanel panel1 = new JPanel();

      panel1.add(new JLabel("Enter your name: "));	

      textName = new JTextField(15);	
      panel1.add(textName);

      buttonOK = new JButton("OK");
      buttonOK.addActionListener(e -> buttonOKClick() );
      panel1.add(buttonOK);

      this.add(panel1);

      this.setVisible(true);
   }

   public void buttonOKClick()
   {
      String name = textName.getText();	
      if (name.length() == 0)	
      {
          JOptionPane.showMessageDialog(
              Namer.this,
              "You didn’t enter anything!",
              "Moron",
              JOptionPane.INFORMATION_MESSAGE);
      }
      else
      {
          JOptionPane.showMessageDialog(
              Namer.this,
              "Good morning " + name,
              "Salutations",
              JOptionPane.INFORMATION_MESSAGE);
      }
      textName.requestFocus();	
   }
}
