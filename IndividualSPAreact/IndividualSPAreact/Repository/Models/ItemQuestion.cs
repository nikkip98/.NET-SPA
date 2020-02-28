using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IndividualSPAreact.Repository.Models
{
    public class ItemQuestion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Question { get; set; }

        public string Answer { get; set; }

        public string TypeName { get; set; }
        
        public int RatingUp { get; set; }
        
        public int RatingDown { get; set; }
    }
}