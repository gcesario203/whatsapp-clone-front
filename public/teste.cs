using System;
using System.Text.Json;
using System.Text.Json.Serialization;
					
public class Program
{
	public static void Main()
	{
        DateTime hoje = DateTime.Now;
		
		hoje.AddDays(30);

        System.Console.WriteLine(hoje);
	}
	
}

