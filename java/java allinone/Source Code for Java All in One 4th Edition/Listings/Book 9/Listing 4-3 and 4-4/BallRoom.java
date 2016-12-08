import java.applet.*;
import java.awt.*;
import javax.swing.*;
import java.awt.geom.*;
import java.util.ArrayList;


public class BallRoom extends JApplet
{
    public static final int WIDTH = 350;
    public static final int HEIGHT = 300;

    private PaintSurface canvas;

    public void init()
    {
        this.setSize(WIDTH, HEIGHT);
        canvas = new PaintSurface();
        this.add(canvas, BorderLayout.CENTER);

        Timer t = new Timer(20,
            e -> {canvas.repaint();} );
        t.start();
    }

}

// Listing 4-4

class PaintSurface extends JComponent
{
    public ArrayList<Ball> balls = new ArrayList<Ball>();
    public PaintSurface()
    {
        for (int i = 0; i < 10; i++)
            balls.add(new Ball(20));
    }

    public void paint(Graphics g)
    {
        Graphics2D g2 = (Graphics2D)g;
        g2.setRenderingHint(
            RenderingHints.KEY_ANTIALIASING,
            RenderingHints.VALUE_ANTIALIAS_ON);
        g2.setColor(Color.RED);
        for (Ball ball : balls)
        {
            ball.move();
            g2.fill(ball);
        }
    }
}
