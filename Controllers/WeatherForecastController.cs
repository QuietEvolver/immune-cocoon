using Microsoft.AspNetCore.Mvc;

namespace csharp.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "None", "None/Low", "Low", "Low/Medium", "Medium/Low", "Medium", "Medium/High", "High", "High/Severe", "Severe"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        
        var SummaryX = Summaries[Random.Shared.Next(Summaries.Length)];
            Console.WriteLine("$Summary=Summaries[]: \t" + SummaryX);
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
