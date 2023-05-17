using System.ComponentModel.DataAnnotations;

namespace BusinessApi 
{

  public class Business
  {
    public int BusinessId { get; set; }
    [Required]
    [StringLength(200)]
    public string? Name { get; set; }
    [Required]
    public string? Type { get; set; }
    [Required]
    [Range(0, 200, ErrorMessage = "Number must be between 0 and 200.")]
    public int YearsInBusiness { get; set; }
  }
}