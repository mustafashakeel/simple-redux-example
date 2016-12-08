import javax.swing.*;
import java.awt.event.*;

public class ClickMeInner extends JFrame	
{
   public static void main(String [] args)
   {
      new ClickMeInner();
   }

   private JButton button1;	

   public ClickMeInner()
   {
      this.setSize(300,150);
      this.setDefaultCloseOperation(
         JFrame.EXIT_ON_CLOSE);
      this.setTitle("I’m Listening");

      ClickListener cl = new ClickListener();	

      JPanel panel1 = new JPanel();
      button1 = new JButton("Click Me!");
      button1.addActionListener(cl);	
      panel1.add(button1);
      this.add(panel1);

      this.setVisible(true);
   }

   private class ClickListener 
      implements ActionListener	
   {
      private int clickCount = 0;	

      public void actionPerformed(ActionEvent e)
      {
         if (e.getSource() == button1)	
         {
            clickCount++;
            if (clickCount == 1)
               button1.setText("I've been clicked!");
            else
               button1.setText("I've been clicked "
                   + clickCount + " times!");
         }
      }
   }
}
