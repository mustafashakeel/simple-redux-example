import java.util.concurrent.ScheduledThreadPoolExecutor;

public class DoTwoThings
{
    ScheduledThreadPoolExecutor pool =
        new ScheduledThreadPoolExecutor(2);

    CountDownClock clock = new CountDownClock();

    public static void main(String[] args)
    {
        new DoTwoThings();
    }

    DoTwoThings()
    {
        pool.execute(clock);
        pool.execute(clock);
        pool.shutdown();
    }
}

class CountDownClock extends Thread
{
    public void run()
    {
        for (int t = 20; t >= 0; t--)
        {
            System.out.println("T minus " + t);
            try
            {
                Thread.sleep(1000);
            }
            catch (InterruptedException e)
            {}
        }
    }
}