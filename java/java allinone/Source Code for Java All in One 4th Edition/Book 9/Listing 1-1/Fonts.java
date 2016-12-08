import javax.swing.*;
import java.awt.event.*;
import java.awt.*;

public class Fonts extends JFrame
{
    public static void main(String [] args)
    {
        new Fonts();
    }

    private JLabel sampleText;	

    private JComboBox fontComboBox;	
    private JComboBox sizeComboBox;
    private JCheckBox boldCheck, italCheck;

    private String[] fonts;	

    public Fonts()
    {
        this.setSize(500,150);
        this.setTitle("Fun with Fonts ");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        sampleText = new JLabel(
            "All work and no play makes Jack a dull boy");
        this.add(sampleText, BorderLayout.NORTH);	

        GraphicsEnvironment g;	
        g = GraphicsEnvironment
                .getLocalGraphicsEnvironment();
        fonts = g.getAvailableFontFamilyNames();
        JPanel controlPanel = new JPanel();

        fontComboBox = new JComboBox<String>(fonts);
        fontComboBox.addActionListener(e -> updateText());
        controlPanel.add(new JLabel("Family: "));
        controlPanel.add(fontComboBox);

        Integer[] sizes = {7, 8, 9, 10, 11, 12,
                           14, 18, 20, 22, 24, 36};
        sizeComboBox = new JComboBox<Integer>(sizes);
        sizeComboBox.setSelectedIndex(5);
        sizeComboBox.addActionListener(e -> updateText() );
        controlPanel.add(new JLabel("Size: "));
        controlPanel.add(sizeComboBox);

        boldCheck = new JCheckBox("Bold");	
        boldCheck.addActionListener(e -> updateText());
        controlPanel.add(boldCheck);

        italCheck = new JCheckBox("Ital");	
        italCheck.addActionListener(e -> updateText() );
        controlPanel.add(italCheck);

        this.add(controlPanel, BorderLayout.SOUTH);	
        updateText();

        this.setVisible(true);
    }

    public void updateText()	
    {
        String name 
            = (String) fontComboBox.getSelectedItem();

        Integer size 
            = (Integer)sizeComboBox.getSelectedItem();

        int style;
        if (boldCheck.isSelected() 
            && italCheck.isSelected())
            style = Font.BOLD | Font.ITALIC;
        else if (boldCheck.isSelected())
            style = Font.BOLD;
        else if (italCheck.isSelected())
            style = Font.ITALIC;
        else
            style = Font.PLAIN;

        Font f = new Font(name, style, 
            size.intValue());
            sampleText.setFont(f);
    }
}
